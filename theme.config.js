import { useRouter } from "next/router";

const Logo = ({ height }) => (
  <svg height={height} viewBox="0 0 989.000000 309.000000" fill="none">
    <g transform="translate(0.000000,309.000000) scale(0.100000,-0.100000)"
      fill="currentColor" stroke="none">
      <path d="M8090 2755 c-266 -51 -498 -182 -639 -362 -115 -145 -197 -346 -232 -568 -17 -103 -17 -437 0 -540 49 -314 184 -569 381 -720 76 -59 178 -118 193 -112 18 7 282 686 271 697 -5 4 -101 36 -214 70 -113 34 -209 66 -214 70 -5 5 262 312 593 684 330 371 601 679 601 685 0 11 -123 57 -225 83 -106 27 -403 34 -515 13z" />
      <path d="M2640 2510 l0 -210 875 0 875 0 0 210 0 210 -875 0 -875 0 0 -210z" />
      <path d="M490 2500 l0 -210 571 0 c493 0 570 -2 566 -14 -3 -8 -267 -341 -586 -740 l-581 -726 0 -210 0 -210 910 0 910 0 -2 213 -3 212 -597 3 -597 2 594 747 595 747 0 198 0 198 -890 0 -890 0 0 -210z" />
      <path d="M4880 1550 l0 -1160 228 0 229 0 6 203 c4 111 7 471 7 800 0 329 4 596 8 593 5 -3 213 -363 463 -800 l454 -796 248 0 247 0 0 1160 0 1160 -235 0 -235 0 -1 -782 c0 -740 -1 -782 -17 -759 -9 14 -211 365 -448 780 l-431 756 -261 3 -262 2 0 -1160z" />
      <path d="M8876 2631 c-16 -25 -466 -1037 -466 -1047 0 -6 102 -39 228 -73 125 -35 230 -66 234 -69 3 -4 -198 -243 -447 -532 -339 -393 -450 -527 -439 -533 8 -4 49 -15 91 -23 385 -73 796 38 1040 283 160 160 257 374 299 657 22 150 15 467 -14 606 -50 237 -142 419 -287 566 -90 90 -227 185 -239 165z" />
      <path d="M2640 1550 l0 -210 875 0 875 0 0 210 0 210 -875 0 -875 0 0 -210z" />
      <path d="M2640 600 l0 -210 875 0 875 0 0 210 0 210 -875 0 -875 0 0 -210z" />
    </g>
  </svg>
);

const NSI = ({ height = 22 }) => (
  <svg height={height} viewBox="0 0 178.8 72.001">
    <g fillRule="evenodd" fontSize="9pt" fill="currentColor">
      <path d="M 140.2 72 L 97.8 72 Q 93.8 72 90.4 70 Q 87 68 85 64.6 Q 83 61.2 83 57.2 L 83 50.5 L 98.5 50.5 L 98.5 56.4 L 139.3 56.4 L 139.3 43.8 L 97.8 43.8 Q 93.8 43.8 90.4 41.8 Q 87 39.8 85 36.45 Q 83 33.1 83 29 L 83 14.8 Q 83 10.7 85 7.35 Q 87 4 90.4 2 Q 93.8 0 97.8 0 L 140.2 0 Q 144.2 0 147.55 2 Q 150.9 4 152.95 7.35 Q 155 10.7 155 14.8 L 155 21.5 L 139.3 21.5 L 139.3 15.6 L 98.5 15.6 L 98.5 28.2 L 140.2 28.2 Q 144.2 28.2 147.55 30.2 Q 150.9 32.2 152.95 35.55 Q 155 38.9 155 43 L 155 57.2 Q 155 61.2 152.95 64.6 Q 150.9 68 147.55 70 Q 144.2 72 140.2 72 Z M 15.5 72 L 0 72 L 0 0 L 16 0 L 56.3 48 L 56.3 0 L 72 0 L 72 72 L 56 72 L 15.5 23.8 L 15.5 72 Z M 178.8 72 L 163.5 72 L 163.5 0 L 178.8 0 L 178.8 72 Z" vectorEffect="non-scaling-stroke" />
    </g>
  </svg>
);

const Zeno = ({ height = 20 }) => (
  <svg height={height} viewBox="0 0 989.000000 309.000000" fill="none">
    <g transform="translate(0.000000,309.000000) scale(0.100000,-0.100000)"
      fill="currentColor" stroke="none">
      <path d="M8090 2755 c-266 -51 -498 -182 -639 -362 -115 -145 -197 -346 -232 -568 -17 -103 -17 -437 0 -540 49 -314 184 -569 381 -720 76 -59 178 -118 193 -112 18 7 282 686 271 697 -5 4 -101 36 -214 70 -113 34 -209 66 -214 70 -5 5 262 312 593 684 330 371 601 679 601 685 0 11 -123 57 -225 83 -106 27 -403 34 -515 13z" />
      <path d="M2640 2510 l0 -210 875 0 875 0 0 210 0 210 -875 0 -875 0 0 -210z" />
      <path d="M490 2500 l0 -210 571 0 c493 0 570 -2 566 -14 -3 -8 -267 -341 -586 -740 l-581 -726 0 -210 0 -210 910 0 910 0 -2 213 -3 212 -597 3 -597 2 594 747 595 747 0 198 0 198 -890 0 -890 0 0 -210z" />
      <path d="M4880 1550 l0 -1160 228 0 229 0 6 203 c4 111 7 471 7 800 0 329 4 596 8 593 5 -3 213 -363 463 -800 l454 -796 248 0 247 0 0 1160 0 1160 -235 0 -235 0 -1 -782 c0 -740 -1 -782 -17 -759 -9 14 -211 365 -448 780 l-431 756 -261 3 -262 2 0 -1160z" />
      <path d="M8876 2631 c-16 -25 -466 -1037 -466 -1047 0 -6 102 -39 228 -73 125 -35 230 -66 234 -69 3 -4 -198 -243 -447 -532 -339 -393 -450 -527 -439 -533 8 -4 49 -15 91 -23 385 -73 796 38 1040 283 160 160 257 374 299 657 22 150 15 467 -14 606 -50 237 -142 419 -287 566 -90 90 -227 185 -239 165z" />
      <path d="M2640 1550 l0 -210 875 0 875 0 0 210 0 210 -875 0 -875 0 0 -210z" />
      <path d="M2640 600 l0 -210 875 0 875 0 0 210 0 210 -875 0 -875 0 0 -210z" />
    </g>
  </svg>
);

const TITLE_WITH_TRANSLATIONS = {
  "zh-CN": "Zeno",
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "zh-CN": "有疑问？给我们反馈 →",
};

export default {
  projectLink: false,
  docsRepositoryBase: "https://github.com/zenohq/site/blob/main/pages",
  projectChatLink: "https://discord.gg/NbWmRhZj3s",
  titleSuffix: " – Zeno",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["zh-CN"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={20} />
      </>
    );
  },
  head: ({ title, meta }) => {
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Zeno 为快速交付打造的应用分发平台。"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Zeno 为快速交付打造的应用分发平台。"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={
            meta.image ||
            "/banner.jpg"
          }
        />
        <meta
          name="og:title"
          content={
            title ? title + " – Zeno" : "Zeno"
          }
        />
        <meta
          name="og:image"
          content={
            meta.image ||
            "/banner.jpg"
          }
        />
        <meta name="apple-mobile-web-app-title" content="Zeno" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
          media="print"
          onLoad="this.media='all'"
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GZD10FSL31"></script>
        <script src="/analytics.js"></script>
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "zh-CN":
        return "在 GitHub 上编辑本页 →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      default:
        return (
          <a
            href="https://neospaceindustries.com/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">
              <NSI />
            </span>
            <span className="text-xs font-normal">© Verse Ltd.</span>
          </a>
        );
    }
  },
  i18n: [
    { locale: "zh-CN", text: "简体中文" },
  ],
};
