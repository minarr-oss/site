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
  projectLink: "https://github.com/zenohq",
  docsRepositoryBase: "https://github.com/zenohq/site/blob/master/pages",
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
      case "zh-CN":
        return (
          <a
            href="https://zeno.so"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">由</span>
            <span className="mr-2">
              <Zeno />
            </span>
            驱动
          </a>
        );
      default:
        return (
          <a
            href="https://zeno.so"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1">Powered by</span>
            <span>
              <Zeno />
            </span>
          </a>
        );
    }
  },
  i18n: [
    { locale: "zh-CN", text: "简体中文" },
  ],
};
