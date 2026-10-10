export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "RoFront Wiki",
  shortName: "RoFront",
  logoText: "RF",
  tagline: "Codes, Guide & Strategy",
  description: "RoFront Wiki provides complete guides, strategy tips, codes, nation information, and gameplay resources to help Roblox players conquer territories and master global PvP battles.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rofront.top",
  supportEmail: "support@rofront.top",
  gameUrl: "https://www.roblox.com/es/games/137151641329864/RoFront",
  heroVideoId: "HG9mqc_FsHk", // RoFront gameplay video
  social: {
    discord: "https://www.roblox.com/es/games/137151641329864/RoFront",
    youtube: "https://www.youtube.com/watch?v=HG9mqc_FsHk",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
