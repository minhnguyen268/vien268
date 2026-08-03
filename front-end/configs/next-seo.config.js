const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | THE VEN CASINO ONLINE",
  defaultTitle: "THE VEN CASINO ONLINE",
  description: "THE VEN CASINO ONLINE - Online Casino System",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "megalott, xo so, xoso, keno, keno 1p, keno 3p, keno 5p, keno online",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images/logo.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "THE VEN CASINO ONLINE",
    description: "THE VEN CASINO ONLINE",
    images: [
      {
        url: "/assets/images-new/logo.png",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@VEN333",
    site: "@VEN333",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
