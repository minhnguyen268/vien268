const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | THE VENETIAN MACAO",
  defaultTitle: "THE VENETIAN MACAO",
  description: "THE VENETIAN MACAO - Hệ thống casino trực tuyến",
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
    siteName: "THE VENETIAN MACAO CASINO",
    description: "THE VENETIAN MACAO",
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
    handle: "@VENETIAN",
    site: "@VENETIAN",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
