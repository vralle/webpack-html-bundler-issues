import { URL } from "node:url";

/**
 * @type {EntryDataRegistry}
 */
const data = {
  notExist: {
    meta: {
      title: "Data not found",
      description: "This page does not exist in the database.",
    },
    content: {
      title: "Error 404",
      description: "Please check the URL and try again.",
    },
  },
  home: {
    meta: {
      title: "Welcome",
      description: "The main page of our website.",
      canonical: new URL("https://example.com"),
      twitterCard: {
        card: "summary_large_image",
        site: "@example",
        creator: "@example",
        title: "Welcome",
        description: "The main page of our website.",
        image: "https://example.com/image.jpg",
      },
      openGraph: {
        url: new URL("https://example.com"),
        title: "Welcome",
        description: "The website's main page.",
        type: "website",
        locale: "en_US",
        image: {
          url: "https://example.com/image.jpg",
          type: "image/jpeg",
          width: 1200,
          height: 630,
        },
      },
    },
    content: {
      title: "Welcome!",
      description: "This is the main page of our website.",
    },
  },
  "privacy-policy": {
    meta: {
      title: "Privacy Policy",
      description: "How we collect and use data.",
      canonical: new URL("https://example.com/privacy-policy"),
      robots: "noindex, nofollow",
    },
    content: {
      title: "Privacy Policy",
      description: "Details about data collection and processing.",
    },
  },
  error_500: {
    meta: {
      title: "Server Error",
      description: "An internal error occurred, please try again later.",
      robots: "noindex, noarchive",
    },
    content: {
      title: "Error 500",
      description: "Try refreshing the page or visiting later.",
    },
  },
};

export default data;
