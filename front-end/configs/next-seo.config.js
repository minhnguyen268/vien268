const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | WIN GAMES ONLINE",
  defaultTitle: "WIN GAMES ONLINE 2026",
  description: "WORLD GAMES ONLINE - Online Play Games System",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "game block online, games happy, games fishhing",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/banner1.jpg",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "WORLD GAMES ONLINE",
    description: "WORLD GAMES ONLINE",
    images: [
      {
        url: "/assets/banner1.jpg",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@VEN3A3",
    site: "@VEN3A3",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
