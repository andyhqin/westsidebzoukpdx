/**
 * Site-wide settings used in more than one place (header, footer, several pages).
 * Page copy lives inside each page component in src/pages/.
 *
 * Anything marked "TBD" is a placeholder to fill in before launch.
 */
export const site = {
  name: "Westside Brazilian Zouk",
  shortName: "Westside Zouk",
  tagline: "Become the dancer people love to dance with.",

  /**
   * Logo. Leave `src` empty to show the text wordmark.
   * To use an image: put the file in /public (e.g. public/logo.svg) and set src: "./logo.svg".
   */
  logo: {
    src: "",
    alt: "Westside Brazilian Zouk logo",
  },

  contact: {
    email: "hello@example.com", // TBD
    instagram: "", // TBD, e.g. "https://instagram.com/westsidezoukpdx"
  },

  /** Anonymous report form (e.g. a Google Form). Leave empty until it exists. */
  reportFormUrl: "", // TBD

  venue: {
    name: "Leedy Grange Hall",
    address: "835 NW Saltzman Rd, Portland, OR 97229",
    area: "Cedar Mill, just off Highway 26",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=835+NW+Saltzman+Rd+Portland+OR+97229",
  },
} as const;
