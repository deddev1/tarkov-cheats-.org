type StarRowProps = {
	rating: number;
	max?: number;
	className?: string;
};

/** Renders star icons for a 0–5 rating (rounded to nearest half for display). */
export function StarRow({ rating, max = 5, className = 'reviews__stars' }: StarRowProps) {
	const clamped = Math.min(max, Math.max(0, rating));
	const rounded = Math.round(clamped * 2) / 2;
	const full = Math.floor(rounded);
	const half = rounded - full >= 0.5;

	return (
		<span className={className} aria-hidden="true">
			{Array.from({ length: max }, (_, index) => {
				const isFull = index < full;
				const isHalf = !isFull && half && index === full;

				return (
					<svg
						key={index}
						viewBox="0 0 20 20"
						fill={isFull ? 'currentColor' : 'none'}
						stroke="currentColor"
						strokeWidth={isFull ? 0 : 1.15}
						opacity={isFull || isHalf ? 1 : 0.3}
					>
						{isHalf ? (
							<>
								<defs>
									<clipPath id={`half-${index}-${rounded}`}>
										<rect x="0" y="0" width="10" height="20" />
									</clipPath>
								</defs>
								<path
									clipPath={`url(#half-${index}-${rounded})`}
									d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z"
									fill="currentColor"
									stroke="none"
								/>
								<path d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z" />
							</>
						) : (
							<path d="M10 2.5l2.2 5.1 5.5.5-4.2 3.7 1.3 5.4L10 14.4 5.2 17.2l1.3-5.4L2.3 8.1l5.5-.5L10 2.5z" />
						)}
					</svg>
				);
			})}
		</span>
	);
}
