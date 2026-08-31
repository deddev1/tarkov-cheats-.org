import { defineMiddleware } from 'astro:middleware';
import { applySecurityHeaders } from './lib/security-headers.js';
import { isCrawler, localeRedirectTarget, preferredLocale } from './lib/locale-redirect';

function isBrandStudioPage(pathname: string): boolean {
	return pathname === '/brand-studio' || pathname === '/brand-studio/';
}

/**
 * Applies Trust & Safety headers during `astro dev` / `astro preview`
 * so Lighthouse audits see the same protections as production.
 *
 * Brand Studio page: blocked in production builds and non-localhost hosts.
 * Write API lives only in the Vite dev plugin (never in dist) and has its own IP checks.
 */
export const onRequest = defineMiddleware(async (context, next) => {
	if (isBrandStudioPage(context.url.pathname)) {
		const host = context.url.hostname;
		const localHost = host === 'localhost' || host === '127.0.0.1' || host === '::1';

		if (import.meta.env.PROD || !localHost) {
			return new Response('Brand Studio is only available on localhost during astro dev.', {
				status: 404,
				headers: {
					'Content-Type': 'text/plain; charset=utf-8',
					'Cache-Control': 'no-store',
					'X-Robots-Tag': 'noindex, nofollow',
				},
			});
		}
	}

	const ua = context.request.headers.get('user-agent');
	if (!isCrawler(ua)) {
		const redirectPath = localeRedirectTarget(
			context.url.pathname,
			context.request.headers.get('accept-language'),
			context.request.headers.get('cookie'),
		);
		if (redirectPath) {
			const target = new URL(redirectPath + context.url.search, context.url);
			const locale = preferredLocale(
				context.request.headers.get('accept-language'),
				context.request.headers.get('cookie'),
			);
			const headers = new Headers({
				Location: target.toString(),
				'Cache-Control': 'no-store',
				'Set-Cookie': `fc_locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`,
			});
			applySecurityHeaders(headers);
			return new Response(null, { status: 302, headers });
		}
	}

	const response = await next();
	const headers = new Headers(response.headers);
	const contentType = headers.get('Content-Type') || '';
	const isHtml = contentType.includes('text/html');

	if (isBrandStudioPage(context.url.pathname)) {
		headers.set('X-Robots-Tag', 'noindex, nofollow');
		headers.set('Cache-Control', 'no-store');
	}

	applySecurityHeaders(headers, {
		html: isHtml,
		dev: import.meta.env.DEV,
	});

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
});
