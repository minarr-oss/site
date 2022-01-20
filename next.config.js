const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: false,
  unstable_contentDump: true,
  unstable_staticImage: true,
});

module.exports = withNextra({
  i18n: {
    locales: ["zh-CN"],
    defaultLocale: "zh-CN",
  },
  redirects: () => {
    return [
      {
        source: "/blog",
        destination: "/blog/bootstrap",
        statusCode: 302,
      },
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 302,
      },
    ];
  },
});
