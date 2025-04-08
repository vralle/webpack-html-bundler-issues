/**
 * Twitter card data.
 * @see https://developer.x.com/en/docs/x-for-websites/cards/overview/markup
 */
declare interface TwitterCardData {
  /**
   * The card type.
   */
  card: string;

  /**
   * '@username' of website. Either twitter:site or twitter:site:id is required.
   */
  site: string;

  /**
   * '@username' of content creator.
   */
  creator: string;

  /**
   * Title of content (max 70 characters).
   */
  title: string;

  /**
   * Description of content (maximum 200 characters).
   */
  description: string;

  /**
   * URL to a JPG, PNG, WEBP, GIF Image, 1200x630.
   * You should not use website logo, author photo.
   * SVG is not supported.
   */
  image: URL | string;

  /**
   * Max 420 characters.
   */
  alt?: string;
}

/**
 * Open graph preview image data.
 * Best values 1200 х 630 JPG|GIF|PNG
 * @see https://developers.facebook.com/docs/sharing/webmasters#images
 */
declare interface OpenGraphImage {
  /**
   * URL to the image
   */
  url: URL | string;

  /**
   * MIME type of the image
   */
  type: "image/jpeg" | "image/gif" | "image/png";
  /***
   * Width of image in pixels
   */
  width: number;

  /**
   * Height of image in pixels
   */
  height: number;

  /**
   * A description of what is in the image (not a caption).
   * If the page specifies an og:image it should specify og:image:alt.
   */
  alt?: string;
}

/**
 * Open graph data.
 * @see https://developers.facebook.com/docs/sharing/webmasters#markup
 */
declare interface OpenGraphData {
  /**
   * The canonical URL for a entry. This should be the undecorated URL.
   */
  url: URL;

  /**
   * The title of the entry without any branding such as your site name.
   */
  title: string;

  /**
   * A brief description of the content, usually between 2 and 4 sentences.
   * This will displayed below the title of the post on Facebook.
   */
  description: string;

  /**
   * The type of media of your content. This tag impacts how your content shows
   * up in Feed. If you don't specify a type,the default is website.
   */
  type?: "website";

  /**
   * The locale of the resource. Defaults to en_US. You can also use og:locale:alternate
   * if you have other available language translations available.
   */
  locale?: string;

  /**
   * @deprecated
   */
  app_id?: number;

  /**
   * The entry preview image.
   */
  image: OpenGraphImage;
}

/**
 * The data of an entry meta tags
 * @see https://developers.google.com/search/docs/crawling-indexing/special-tags
 */
declare interface EntryMetaData {
  /**
   * Entry meta title.
   * @see https://developers.google.com/search/docs/appearance/title-link#page-titles
   */
  title: string;

  /**
   * Entry meta description.
   * @see https://developers.google.com/search/docs/appearance/snippet#meta-descriptions
   */
  description: string;

  /**
   * Entry canonical URL
   */
  canonical?: URL;

  /**
   * Robot's meta tags.
   * @see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
   */
  robots?: string;

  /**
   * Twitter card data.
   */
  twitterCard?: TwitterCardData;

  /**
   * Open Graph data.
   */
  openGraph?: OpenGraphData;
}

/**
 * Entry content data.
 */
declare interface EntryContentData {
  /**
   * Entry title.
   */
  title: string;

  /**
   * Entry lead text.
   */
  description: string;
}

declare interface EntryData {
  /**
   * Entry meta data.
   */
  meta: EntryMetaData;

  /**
   * Entry content data.
   */
  content: EntryContentData;
}

type EntryDataRegistry = {
  notExist: EntryData;
} & Record<string, EntryData>;
