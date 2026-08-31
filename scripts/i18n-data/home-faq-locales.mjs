/** Homepage FAQ Q&A per locale. Keys match homeFaqs slugs in src/data/site.ts. */

const SLUGS = [
	'what-are-tarkov-cheats',
	'are-tarkov-cheats-undetected-in-2026',
	'pmc-raids-and-scav-runs',
	'esp-wallhack-radar-or-aimbot',
	'how-are-licenses-delivered',
	'where-to-check-updates',
	'how-to-contact-support',
];

/** @type {Record<string, Record<string, { question: string; answer: string }>>} */
export const HOME_FAQ = {
	en: {
		'what-are-tarkov-cheats': {
			question: 'What is Tarkov Cheats?',
			answer: 'One license for ESP, radar, and aimbot on Windows PC, with BattlEye rebuilds after patches.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Are tarkov cheats undetected in 2026?',
			answer:
				'Tarkov Cheats is maintained for Escape from Tarkov with rebuilds after BattlEye and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Does this work in PMC raids and Scav runs?',
			answer:
				'Yes. ESP, radar, and aimbot are built for Escape from Tarkov raid flow — reading PMCs and Scavs, spotting loot, and staying aware near extracts.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'What is included — ESP, wallhack, radar, or Aimbot?',
			answer:
				'Tarkov Cheats bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		},
		'how-are-licenses-delivered': {
			question: 'How are licenses delivered?',
			answer:
				'After payment is confirmed, Tarkov Cheats license details are delivered digitally through checkout. Timing can vary by payment method and order review.',
		},
		'where-to-check-updates': {
			question: 'Where do I check updates after an Escape from Tarkov or BattlEye patch?',
			answer:
				'Maintenance notes are posted on the Status page when an Escape from Tarkov or BattlEye update affects the package.',
		},
		'how-to-contact-support': {
			question: 'How do I contact support?',
			answer:
				'Use the Support page or email support@tarkovcheats.org. Include your order details so replies can be faster.',
		},
	},
	es: {
		'what-are-tarkov-cheats': {
			question: '¿Qué es Tarkov Cheats?',
			answer: 'Una licencia para ESP, radar y aimbot en PC Windows, con reconstrucciones BattlEye tras los parches.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: '¿Los trucos de Tarkov están indetectables en 2026?',
			answer:
				'Tarkov Cheats se mantiene para Escape from Tarkov con reconstrucciones tras parches de BattlEye y del juego. Mira Estado antes de entrar. Ningún cheat garantiza indetectable permanente.',
		},
		'pmc-raids-and-scav-runs': {
			question: '¿Funciona en raids PMC y Scav runs?',
			answer:
				'Sí. ESP, radar y aimbot están pensados para el flujo de raid de Escape from Tarkov: PMC, Scavs, loot y extracts.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: '¿Qué incluye — ESP, wallhack, radar o Aimbot?',
			answer:
				'Tarkov Cheats incluye ESP wallhack, marcadores de loot, radar 2D y Aimbot configurable en una licencia. Ver Funciones.',
		},
		'how-are-licenses-delivered': {
			question: '¿Cómo se entregan las licencias?',
			answer:
				'Tras confirmar el pago, los datos de licencia se envían por digital en el checkout. El tiempo puede variar según el método de pago.',
		},
		'where-to-check-updates': {
			question: '¿Dónde veo actualizaciones tras un parche de Escape from Tarkov o BattlEye?',
			answer: 'Las notas de mantenimiento están en la página Estado cuando un parche afecta el paquete.',
		},
		'how-to-contact-support': {
			question: '¿Cómo contacto con soporte?',
			answer: 'Usa la página Soporte o escribe a support@tarkovcheats.org. Incluye los datos de tu pedido.',
		},
	},
	fr: {
		'what-are-tarkov-cheats': {
			question: 'Qu’est-ce que Tarkov Cheats ?',
			answer: 'Une licence pour ESP, radar et aimbot sur PC Windows, avec reconstructions BattlEye après les patchs.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Les cheats Tarkov sont-ils indétectables en 2026 ?',
			answer:
				'Tarkov Cheats est maintenu pour Escape from Tarkov avec reconstructions après patchs BattlEye et jeu. Vérifiez Statut avant de queue. Aucun cheat n’est indétectable pour toujours.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Ça marche en raids PMC et runs Scav ?',
			answer:
				'Oui. ESP, radar et aimbot suivent le flux raid d’Escape from Tarkov : PMC, Scavs, loot et extracts.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Que contient la licence — ESP, wallhack, radar ou Aimbot ?',
			answer:
				'Tarkov Cheats regroupe ESP wallhack, marqueurs de loot, radar 2D et Aimbot réglable. Voir Fonctions.',
		},
		'how-are-licenses-delivered': {
			question: 'Comment les licences sont-elles livrées ?',
			answer:
				'Après paiement confirmé, les détails de licence arrivent par voie numérique. Le délai dépend du moyen de paiement.',
		},
		'where-to-check-updates': {
			question: 'Où voir les mises à jour après un patch Escape from Tarkov ou BattlEye ?',
			answer: 'Les notes de maintenance sont sur la page Statut quand un patch touche le package.',
		},
		'how-to-contact-support': {
			question: 'Comment contacter le support ?',
			answer: 'Utilisez la page Support ou e-mail support@tarkovcheats.org. Indiquez votre commande.',
		},
	},
	de: {
		'what-are-tarkov-cheats': {
			question: 'Was ist Tarkov Cheats?',
			answer: 'Eine Lizenz für ESP, Radar und Aimbot auf Windows-PC, mit BattlEye-Rebuilds nach Patches.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Sind Tarkov Cheats 2026 undetected?',
			answer:
				'Tarkov Cheats wird für Escape from Tarkov nach BattlEye- und Game-Patches neu gebaut. Status prüfen vor der Queue. Kein Cheat ist dauerhaft undetected.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Geht das in PMC-Raids und Scav-Runs?',
			answer: 'Ja. ESP, Radar und Aimbot sind für Escape from Tarkov gemacht — PMCs, Scavs, Loot und Extracts.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Was ist enthalten — ESP, Wallhack, Radar oder Aimbot?',
			answer: 'Eine Lizenz enthält ESP-Wallhack, Loot-Marker, 2D-Radar und konfigurierbaren Aimbot. Siehe Features.',
		},
		'how-are-licenses-delivered': {
			question: 'Wie werden Lizenzen geliefert?',
			answer: 'Nach Zahlungsbestätigung kommt die Lizenz digital über den Checkout. Die Dauer hängt von der Zahlung ab.',
		},
		'where-to-check-updates': {
			question: 'Wo prüfe ich Updates nach einem Escape from Tarkov- oder BattlEye-Patch?',
			answer: 'Wartungshinweise stehen auf der Status-Seite, wenn ein Patch das Paket betrifft.',
		},
		'how-to-contact-support': {
			question: 'Wie erreiche ich den Support?',
			answer: 'Über die Support-Seite oder support@tarkovcheats.org. Bestelldaten angeben.',
		},
	},
	pt: {
		'what-are-tarkov-cheats': {
			question: 'O que é Tarkov Cheats?',
			answer: 'Uma licença para ESP, radar e aimbot no PC Windows, com rebuilds BattlEye após patches.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Os cheats de Tarkov estão indetectáveis em 2026?',
			answer:
				'Tarkov Cheats é mantido para Escape from Tarkov com rebuilds após patches BattlEye e do jogo. Veja Status antes de entrar. Nenhum cheat é indetectável para sempre.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Funciona em raids PMC e Scav runs?',
			answer: 'Sim. ESP, radar e aimbot seguem o fluxo de raid do Escape from Tarkov: PMCs, Scavs, loot e extracts.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'O que está incluído — ESP, wallhack, radar ou Aimbot?',
			answer: 'Uma licença inclui ESP wallhack, marcadores de loot, radar 2D e Aimbot configurável. Ver Recursos.',
		},
		'how-are-licenses-delivered': {
			question: 'Como as licenças são entregues?',
			answer: 'Após o pagamento, os dados da licença chegam digitalmente no checkout. O prazo varia com o método.',
		},
		'where-to-check-updates': {
			question: 'Onde vejo atualizações após um patch de Escape from Tarkov ou BattlEye?',
			answer: 'Notas de manutenção ficam na página Status quando um patch afeta o pacote.',
		},
		'how-to-contact-support': {
			question: 'Como falo com o suporte?',
			answer: 'Use a página Suporte ou e-mail support@tarkovcheats.org. Inclua os dados do pedido.',
		},
	},
	it: {
		'what-are-tarkov-cheats': {
			question: 'Cos’è Tarkov Cheats?',
			answer: 'Una licenza per ESP, radar e aimbot su PC Windows, con rebuild BattlEye dopo le patch.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'I cheat di Tarkov sono undetected nel 2026?',
			answer:
				'Tarkov Cheats è aggiornato per Escape from Tarkov dopo patch BattlEye e di gioco. Controlla Stato prima di entrare. Nessun cheat è undetected per sempre.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Funziona in raid PMC e Scav run?',
			answer: 'Sì. ESP, radar e aimbot seguono il flusso raid di Escape from Tarkov: PMC, Scav, loot ed extract.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Cosa è incluso — ESP, wallhack, radar o Aimbot?',
			answer: 'Una licenza include ESP wallhack, marker loot, radar 2D e Aimbot regolabile. Vedi Funzioni.',
		},
		'how-are-licenses-delivered': {
			question: 'Come vengono consegnate le licenze?',
			answer: 'Dopo il pagamento, i dettagli arrivano in digitale dal checkout. I tempi dipendono dal metodo.',
		},
		'where-to-check-updates': {
			question: 'Dove controllo gli aggiornamenti dopo una patch Escape from Tarkov o BattlEye?',
			answer: 'Le note di manutenzione sono sulla pagina Stato quando una patch tocca il pacchetto.',
		},
		'how-to-contact-support': {
			question: 'Come contatto il supporto?',
			answer: 'Usa la pagina Supporto o scrivi a support@tarkovcheats.org. Includi i dati dell’ordine.',
		},
	},
	nl: {
		'what-are-tarkov-cheats': {
			question: 'Wat is Tarkov Cheats?',
			answer: 'Eén licentie voor ESP, radar en aimbot op Windows-pc, met BattlEye-rebuilds na patches.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Zijn Tarkov cheats undetected in 2026?',
			answer:
				'Tarkov Cheats wordt bijgehouden voor Escape from Tarkov na BattlEye- en gamepatches. Check Status voor je queuet. Geen cheat blijft altijd undetected.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Werkt dit in PMC-raids en Scav-runs?',
			answer: 'Ja. ESP, radar en aimbot volgen de raidflow van Escape from Tarkov: PMC’s, Scavs, loot en extracts.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Wat zit erin — ESP, wallhack, radar of Aimbot?',
			answer: 'Eén licentie bevat ESP-wallhack, lootmarkers, 2D-radar en instelbare Aimbot. Zie Functies.',
		},
		'how-are-licenses-delivered': {
			question: 'Hoe worden licenties geleverd?',
			answer: 'Na betaling komen de licentiegegevens digitaal via checkout. Timing hangt af van de betaalmethode.',
		},
		'where-to-check-updates': {
			question: 'Waar check ik updates na een Escape from Tarkov- of BattlEye-patch?',
			answer: 'Onderhoudsnoten staan op de Statuspagina als een patch het pakket raakt.',
		},
		'how-to-contact-support': {
			question: 'Hoe bereik ik support?',
			answer: 'Gebruik de Supportpagina of mail support@tarkovcheats.org. Vermeld je bestelgegevens.',
		},
	},
	pl: {
		'what-are-tarkov-cheats': {
			question: 'Czym jest Tarkov Cheats?',
			answer: 'Jedna licencja na ESP, radar i aimbot na PC Windows, z przebudowami BattlEye po patchach.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Czy cheaty do Tarkova są undetected w 2026?',
			answer:
				'Tarkov Cheats jest utrzymywany po patchach BattlEye i gry. Sprawdź Status przed kolejką. Żaden cheat nie jest undetected na zawsze.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Działa na rajdach PMC i Scav runach?',
			answer: 'Tak. ESP, radar i aimbot są pod Escape from Tarkov: PMC, Scavy, loot i extracty.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Co jest w pakiecie — ESP, wallhack, radar czy Aimbot?',
			answer: 'Jedna licencja to ESP wallhack, znaczniki loot, radar 2D i Aimbot. Zobacz Funkcje.',
		},
		'how-are-licenses-delivered': {
			question: 'Jak dostarczane są licencje?',
			answer: 'Po potwierdzeniu płatności dane licencji przychodzą cyfrowo. Czas zależy od metody płatności.',
		},
		'where-to-check-updates': {
			question: 'Gdzie sprawdzić aktualizacje po patchu Escape from Tarkov lub BattlEye?',
			answer: 'Notatki serwisowe są na stronie Status, gdy patch dotyczy pakietu.',
		},
		'how-to-contact-support': {
			question: 'Jak skontaktować się z supportem?',
			answer: 'Strona Wsparcie lub e-mail support@tarkovcheats.org. Podaj dane zamówienia.',
		},
	},
	ru: {
		'what-are-tarkov-cheats': {
			question: 'Что такое Tarkov Cheats?',
			answer: 'Одна лицензия на ESP, радар и аимбот для Windows PC, с пересборками BattlEye после патчей.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Читы для Таркова undetected в 2026?',
			answer:
				'Tarkov Cheats поддерживается после патчей BattlEye и игры. Смотрите Статус перед очередью. Ни один чит не undetected навсегда.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Работает в рейдах PMC и Scav-заходах?',
			answer: 'Да. ESP, радар и аимбот заточены под Escape from Tarkov: PMC, дикие, лут и выходы.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Что входит — ESP, wallhack, радар или Aimbot?',
			answer: 'Одна лицензия: ESP wallhack, метки лута, 2D-радар и настраиваемый Aimbot. См. Функции.',
		},
		'how-are-licenses-delivered': {
			question: 'Как доставляются лицензии?',
			answer: 'После оплаты данные лицензии приходят цифровым способом. Срок зависит от метода оплаты.',
		},
		'where-to-check-updates': {
			question: 'Где смотреть обновления после патча Escape from Tarkov или BattlEye?',
			answer: 'Заметки по обслуживанию на странице Статус, когда патч затрагивает пакет.',
		},
		'how-to-contact-support': {
			question: 'Как связаться с поддержкой?',
			answer: 'Страница поддержки или email support@tarkovcheats.org. Укажите заказ.',
		},
	},
	tr: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheats nedir?',
			answer: 'Windows PC için ESP, radar ve aimbot tek lisans; yamalardan sonra BattlEye yeniden derlemesi.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Tarkov hileleri 2026’da undetected mı?',
			answer:
				'Tarkov Cheats, BattlEye ve oyun yamalarından sonra güncellenir. Kuyruğa girmeden Durum’a bakın. Hiçbir hile sonsuza kadar undetected değildir.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'PMC raid ve Scav koşularında çalışır mı?',
			answer: 'Evet. ESP, radar ve aimbot Escape from Tarkov akışına göre: PMC, Scav, loot ve extract.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Neler dahil — ESP, wallhack, radar veya Aimbot?',
			answer: 'Tek lisans: ESP wallhack, loot işaretleri, 2D radar ve ayarlanabilir Aimbot. Özellikler’e bakın.',
		},
		'how-are-licenses-delivered': {
			question: 'Lisanslar nasıl teslim edilir?',
			answer: 'Ödeme onayından sonra lisans bilgileri dijital gelir. Süre ödeme yöntemine göre değişir.',
		},
		'where-to-check-updates': {
			question: 'Escape from Tarkov veya BattlEye yamasından sonra güncellemeyi nerede bakayım?',
			answer: 'Paket etkilenirse bakım notları Durum sayfasındadır.',
		},
		'how-to-contact-support': {
			question: 'Destekle nasıl iletişime geçerim?',
			answer: 'Destek sayfası veya support@tarkovcheats.org. Sipariş bilgilerinizi yazın.',
		},
	},
	ar: {
		'what-are-tarkov-cheats': {
			question: 'ما هو Tarkov Cheats؟',
			answer: 'رخصة واحدة لـ ESP والرادار والايمبوت على ويندوز، مع إعادة بناء BattlEye بعد التحديثات.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'هل شيتات تاركوڤ غير مكتشفة في 2026؟',
			answer:
				'يُصان Tarkov Cheats بعد تحديثات BattlEye واللعبة. راجع صفحة الحالة قبل الدخول. لا يوجد شيت غير مكتشف دائماً.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'هل يعمل في غارات PMC وجولات Scav؟',
			answer: 'نعم. ESP والرادار والايمبوت مبنية لتدفق Escape from Tarkov: PMC وScav والloot والمخارج.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'ماذا يتضمن — ESP أو والهاك أو رادار أو Aimbot؟',
			answer: 'رخصة واحدة: ESP والهاك، علامات loot، رادار ثنائي، وايمبوت قابل للضبط. انظر الميزات.',
		},
		'how-are-licenses-delivered': {
			question: 'كيف تُسلَّم التراخيص؟',
			answer: 'بعد تأكيد الدفع تصل بيانات الرخصة رقمياً. المدة تختلف حسب طريقة الدفع.',
		},
		'where-to-check-updates': {
			question: 'أين أتحقق من التحديثات بعد باتش Escape from Tarkov أو BattlEye؟',
			answer: 'ملاحظات الصيانة على صفحة الحالة عندما يؤثر التحديث على الحزمة.',
		},
		'how-to-contact-support': {
			question: 'كيف أتواصل مع الدعم؟',
			answer: 'صفحة الدعم أو support@tarkovcheats.org. أرفق تفاصيل الطلب.',
		},
	},
	ja: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheatsとは？',
			answer: 'Windows PC向けESP・レーダー・エイムボットの1ライセンス。パッチ後にBattlEye再ビルドがあります。',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: '2026年もTarkovチートは未検出ですか？',
			answer:
				'BattlEyeとゲームパッチ後に再ビルドします。キュー前にステータスを確認してください。永久未検出は保証できません。',
		},
		'pmc-raids-and-scav-runs': {
			question: 'PMCレイドとScavランで使えますか？',
			answer: 'はい。ESP、レーダー、エイムボットはEscape from Tarkovのレイド向けです。',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: '内容は？ESP、ウォールハック、レーダー、Aimbot？',
			answer: '1ライセンスにESPウォールハック、ルート表示、2Dレーダー、設定可能なAimbot。機能ページを見てください。',
		},
		'how-are-licenses-delivered': {
			question: 'ライセンスはどう届きますか？',
			answer: '支払い確認後、デジタルで届きます。時間は決済方法で変わります。',
		},
		'where-to-check-updates': {
			question: 'Escape from TarkovやBattlEyeパッチ後の更新はどこ？',
			answer: 'パッケージに影響があるときはステータスページに掲載します。',
		},
		'how-to-contact-support': {
			question: 'サポートへの連絡方法は？',
			answer: 'サポートページまたは support@tarkovcheats.org。注文情報を書いてください。',
		},
	},
	ko: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheats란?',
			answer: 'Windows PC용 ESP, 레이더, 에임봇 단일 라이선스. 패치 후 BattlEye 재빌드.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: '2026년에도 타르코프 치트가 undetected인가요?',
			answer:
				'BattlEye와 게임 패치 후 재빌드합니다. 대기열 전에 상태를 확인하세요. 영구 undetected는 없습니다.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'PMC 레이드와 스캐브 런에서 되나요?',
			answer: '네. ESP, 레이더, 에임봇은 Escape from Tarkov 레이드용입니다.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: '무엇이 포함되나요 — ESP, 월핵, 레이더, Aimbot?',
			answer: '한 라이선스에 ESP 월핵, 루트 마커, 2D 레이더, 설정 가능한 Aimbot. 기능 페이지를 보세요.',
		},
		'how-are-licenses-delivered': {
			question: '라이선스는 어떻게 받나요?',
			answer: '결제 확인 후 디지털로 전달됩니다. 시간은 결제 방법에 따라 다릅니다.',
		},
		'where-to-check-updates': {
			question: 'Escape from Tarkov 또는 BattlEye 패치 후 업데이트는 어디서?',
			answer: '패키지에 영향이 있으면 상태 페이지에 안내합니다.',
		},
		'how-to-contact-support': {
			question: '고객지원은 어떻게 하나요?',
			answer: '지원 페이지 또는 support@tarkovcheats.org. 주문 정보를 포함하세요.',
		},
	},
	zh: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheats 是什么？',
			answer: 'Windows PC 上一份许可证包含 ESP、雷达和自瞄，补丁后会做 BattlEye 重建。',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: '2026 年塔科夫作弊还是未检测到吗？',
			answer: '游戏和 BattlEye 补丁后会重建。排队前看状态页。没有任何作弊能永久未检测。',
		},
		'pmc-raids-and-scav-runs': {
			question: 'PMC 突袭和 Scav 局能用吗？',
			answer: '能。ESP、雷达和自瞄按 Escape from Tarkov 突袭流程设计。',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: '包含什么 — ESP、透视、雷达还是 Aimbot？',
			answer: '一份许可证含 ESP 透视、物资标记、2D 雷达和可调 Aimbot。见功能页。',
		},
		'how-are-licenses-delivered': {
			question: '许可证怎么发货？',
			answer: '付款确认后通过结账数字发送。时间因支付方式而异。',
		},
		'where-to-check-updates': {
			question: 'Escape from Tarkov 或 BattlEye 补丁后去哪看更新？',
			answer: '若补丁影响本包，维护说明在状态页。',
		},
		'how-to-contact-support': {
			question: '如何联系支持？',
			answer: '支持页或 support@tarkovcheats.org。请附上订单信息。',
		},
	},
	hi: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheats क्या है?',
			answer: 'Windows PC पर ESP, रडार और एमबॉट का एक लाइसेंस, पैच के बाद BattlEye रीबिल्ड के साथ।',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: '2026 में तारकोव चीट्स undetected हैं?',
			answer: 'BattlEye और गेम पैच के बाद रीबिल्ड होता है। क्यू से पहले स्टेटस देखें। कोई चीट हमेशा undetected नहीं।',
		},
		'pmc-raids-and-scav-runs': {
			question: 'PMC रेड और Scav रन में चलता है?',
			answer: 'हाँ। ESP, रडार और एमबॉट Escape from Tarkov रेड फ्लो के लिए हैं।',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'क्या शामिल है — ESP, वॉलहैक, रडार या Aimbot?',
			answer: 'एक लाइसेंस में ESP वॉलहैक, लूट मार्कर, 2D रडार और Aimbot। फ़ीचर्स देखें।',
		},
		'how-are-licenses-delivered': {
			question: 'लाइसेंस कैसे मिलते हैं?',
			answer: 'पेमेंट के बाद डिजिटल डिलीवरी। समय भुगतान विधि पर निर्भर करता है।',
		},
		'where-to-check-updates': {
			question: 'Escape from Tarkov या BattlEye पैच के बाद अपडेट कहाँ देखें?',
			answer: 'पैकेज प्रभावित हो तो स्टेटस पेज पर नोट्स होते हैं।',
		},
		'how-to-contact-support': {
			question: 'सपोर्ट से कैसे संपर्क करें?',
			answer: 'सपोर्ट पेज या support@tarkovcheats.org। ऑर्डर विवरण लिखें।',
		},
	},
	id: {
		'what-are-tarkov-cheats': {
			question: 'Apa itu Tarkov Cheats?',
			answer: 'Satu lisensi ESP, radar, dan aimbot di PC Windows, dengan rebuild BattlEye setelah patch.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Apakah cheat Tarkov undetected di 2026?',
			answer:
				'Tarkov Cheats di-maintain setelah patch BattlEye dan game. Cek Status sebelum antre. Tidak ada cheat yang undetected selamanya.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Berfungsi di raid PMC dan Scav run?',
			answer: 'Ya. ESP, radar, dan aimbot untuk alur raid Escape from Tarkov.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Apa yang termasuk — ESP, wallhack, radar, atau Aimbot?',
			answer: 'Satu lisensi: ESP wallhack, penanda loot, radar 2D, dan Aimbot. Lihat Fitur.',
		},
		'how-are-licenses-delivered': {
			question: 'Bagaimana lisensi dikirim?',
			answer: 'Setelah pembayaran, detail lisensi dikirim digital. Waktu tergantung metode bayar.',
		},
		'where-to-check-updates': {
			question: 'Di mana cek update setelah patch Escape from Tarkov atau BattlEye?',
			answer: 'Catatan perawatan ada di halaman Status jika patch memengaruhi paket.',
		},
		'how-to-contact-support': {
			question: 'Bagaimana menghubungi dukungan?',
			answer: 'Halaman Support atau support@tarkovcheats.org. Sertakan detail pesanan.',
		},
	},
	th: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheats คืออะไร?',
			answer: 'ไลเซนส์เดียวสำหรับ ESP เรดาร์ และเอมบอทบน Windows พร้อมรีบิลด์ BattlEye หลังแพตช์',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'ชีท Tarkov ยัง undetected ในปี 2026 ไหม?',
			answer: 'อัปเดตหลังแพตช์ BattlEye และเกม ดูหน้าสถานะก่อนเข้าคิว ไม่มีชีทที่ undetected ถาวร',
		},
		'pmc-raids-and-scav-runs': {
			question: 'ใช้ในเรด PMC และ Scav ได้ไหม?',
			answer: 'ได้ ESP เรดาร์ และเอมบอทสำหรับจังหวะเรด Escape from Tarkov',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'มีอะไรบ้าง — ESP วอลแฮ็ก เรดาร์ หรือ Aimbot?',
			answer: 'ไลเซนส์เดียวมี ESP วอลแฮ็ก มาร์กเกอร์ของ เรดาร์ 2D และ Aimbot ดูฟีเจอร์',
		},
		'how-are-licenses-delivered': {
			question: 'ส่งไลเซนส์อย่างไร?',
			answer: 'หลังชำระเงินจะส่งแบบดิจิทัล เวลาขึ้นกับวิธีจ่าย',
		},
		'where-to-check-updates': {
			question: 'ดูอัปเดตหลังแพตช์ Escape from Tarkov หรือ BattlEye ที่ไหน?',
			answer: 'โน้ตบำรุงอยู่ที่หน้าสถานะเมื่อแพตช์กระทบแพ็กเกจ',
		},
		'how-to-contact-support': {
			question: 'ติดต่อซัพพอร์ตอย่างไร?',
			answer: 'หน้าซัพพอร์ตหรือ support@tarkovcheats.org ใส่รายละเอียดออเดอร์',
		},
	},
	vi: {
		'what-are-tarkov-cheats': {
			question: 'Tarkov Cheats là gì?',
			answer: 'Một giấy phép ESP, radar và aimbot trên Windows PC, rebuild BattlEye sau bản vá.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Cheat Tarkov có undetected năm 2026 không?',
			answer:
				'Duy trì sau vá BattlEye và game. Xem Trạng thái trước khi vào hàng. Không cheat nào undetected mãi.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Dùng được trong raid PMC và Scav run?',
			answer: 'Có. ESP, radar và aimbot cho vòng raid Escape from Tarkov.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Gồm gì — ESP, wallhack, radar hay Aimbot?',
			answer: 'Một giấy phép: ESP wallhack, marker loot, radar 2D và Aimbot. Xem Tính năng.',
		},
		'how-are-licenses-delivered': {
			question: 'Giấy phép được giao thế nào?',
			answer: 'Sau thanh toán, thông tin gửi kỹ thuật số. Thời gian tùy phương thức.',
		},
		'where-to-check-updates': {
			question: 'Xem cập nhật sau vá Escape from Tarkov hoặc BattlEye ở đâu?',
			answer: 'Ghi chú bảo trì trên trang Trạng thái khi bản vá ảnh hưởng gói.',
		},
		'how-to-contact-support': {
			question: 'Liên hệ hỗ trợ thế nào?',
			answer: 'Trang Hỗ trợ hoặc support@tarkovcheats.org. Ghi thông tin đơn.',
		},
	},
	uk: {
		'what-are-tarkov-cheats': {
			question: 'Що таке Tarkov Cheats?',
			answer: 'Одна ліцензія на ESP, радар і аімбот для Windows PC, з перезбірками BattlEye після патчів.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Чити для Таркова undetected у 2026?',
			answer:
				'Підтримка після патчів BattlEye і гри. Дивіться Статус перед чергою. Жоден чит не undetected назавжди.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Працює в рейдах PMC і Scav-заходах?',
			answer: 'Так. ESP, радар і аімбот під Escape from Tarkov: PMC, дикі, лут і виходи.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Що входить — ESP, wallhack, радар чи Aimbot?',
			answer: 'Одна ліцензія: ESP wallhack, мітки луту, 2D-радар і Aimbot. Див. Функції.',
		},
		'how-are-licenses-delivered': {
			question: 'Як доставляють ліцензії?',
			answer: 'Після оплати дані ліцензії приходять цифрою. Термін залежить від способу оплати.',
		},
		'where-to-check-updates': {
			question: 'Де дивитися оновлення після патча Escape from Tarkov або BattlEye?',
			answer: 'Нотатки на сторінці Статус, коли патч зачіпає пакет.',
		},
		'how-to-contact-support': {
			question: 'Як зв’язатися з підтримкою?',
			answer: 'Сторінка підтримки або support@tarkovcheats.org. Вкажіть замовлення.',
		},
	},
	cs: {
		'what-are-tarkov-cheats': {
			question: 'Co je Tarkov Cheats?',
			answer: 'Jedna licence na ESP, radar a aimbot na Windows PC, s přestavbami BattlEye po patchech.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Jsou cheaty na Tarkov v roce 2026 undetected?',
			answer:
				'Po patchech BattlEye a hry se balíček znovu staví. Před frontou zkontrolujte Stav. Žádný cheat není undetected navždy.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Funguje to v PMC raidech a Scav runech?',
			answer: 'Ano. ESP, radar a aimbot jsou pro raid flow Escape from Tarkov.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Co je v balíčku — ESP, wallhack, radar nebo Aimbot?',
			answer: 'Jedna licence: ESP wallhack, loot značky, 2D radar a Aimbot. Viz Funkce.',
		},
		'how-are-licenses-delivered': {
			question: 'Jak se licence doručují?',
			answer: 'Po platbě přijdou údaje digitálně. Doba závisí na způsobu platby.',
		},
		'where-to-check-updates': {
			question: 'Kde kontrolovat aktualizace po patchi Escape from Tarkov nebo BattlEye?',
			answer: 'Poznámky údržby jsou na stránce Stav, když patch zasáhne balíček.',
		},
		'how-to-contact-support': {
			question: 'Jak kontaktovat podporu?',
			answer: 'Stránka podpory nebo support@tarkovcheats.org. Uveďte objednávku.',
		},
	},
	ro: {
		'what-are-tarkov-cheats': {
			question: 'Ce este Tarkov Cheats?',
			answer: 'O licență pentru ESP, radar și aimbot pe Windows PC, cu rebuild BattlEye după patch-uri.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Sunt cheat-urile Tarkov undetected în 2026?',
			answer:
				'Se reconstruiește după patch-uri BattlEye și joc. Verifică Status înainte de coadă. Niciun cheat nu e undetected mereu.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Funcționează în raiduri PMC și Scav run?',
			answer: 'Da. ESP, radar și aimbot urmează fluxul de raid Escape from Tarkov.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Ce include — ESP, wallhack, radar sau Aimbot?',
			answer: 'O licență: ESP wallhack, markere loot, radar 2D și Aimbot. Vezi Funcții.',
		},
		'how-are-licenses-delivered': {
			question: 'Cum se livrează licențele?',
			answer: 'După plată, detaliile vin digital. Timpul depinde de metodă.',
		},
		'where-to-check-updates': {
			question: 'Unde verific actualizări după un patch Escape from Tarkov sau BattlEye?',
			answer: 'Notele de mentenanță sunt pe pagina Status când patch-ul afectează pachetul.',
		},
		'how-to-contact-support': {
			question: 'Cum contactez suportul?',
			answer: 'Pagina Suport sau support@tarkovcheats.org. Include datele comenzii.',
		},
	},
	sv: {
		'what-are-tarkov-cheats': {
			question: 'Vad är Tarkov Cheats?',
			answer: 'En licens för ESP, radar och aimbot på Windows-PC, med BattlEye-ombyggnader efter patchar.',
		},
		'are-tarkov-cheats-undetected-in-2026': {
			question: 'Är Tarkov-cheats undetected 2026?',
			answer:
				'Byggs om efter BattlEye- och spelpatchar. Kolla Status innan kön. Ingen cheat är undetected för alltid.',
		},
		'pmc-raids-and-scav-runs': {
			question: 'Fungerar det i PMC-raids och Scav-runs?',
			answer: 'Ja. ESP, radar och aimbot följer Escape from Tarkov-raidflödet.',
		},
		'esp-wallhack-radar-or-aimbot': {
			question: 'Vad ingår — ESP, wallhack, radar eller Aimbot?',
			answer: 'En licens: ESP-wallhack, lootmarkörer, 2D-radar och Aimbot. Se Funktioner.',
		},
		'how-are-licenses-delivered': {
			question: 'Hur levereras licenser?',
			answer: 'Efter betalning kommer licensuppgifter digitalt. Tiden beror på betalmetod.',
		},
		'where-to-check-updates': {
			question: 'Var kollar jag uppdateringar efter en Escape from Tarkov- eller BattlEye-patch?',
			answer: 'Underhållsanteckningar ligger på Status när en patch påverkar paketet.',
		},
		'how-to-contact-support': {
			question: 'Hur kontaktar jag support?',
			answer: 'Supportsidan eller support@tarkovcheats.org. Ange orderuppgifter.',
		},
	},
};

export function buildHomeFaq(locale) {
	const pack = HOME_FAQ[locale] ?? HOME_FAQ.en;
	const out = {};
	for (const slug of SLUGS) {
		out[slug] = pack[slug] ?? HOME_FAQ.en[slug];
	}
	return out;
}
