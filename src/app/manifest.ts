import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ALLTRYON — Digital Haute-Couture Try-On",
    short_name: "ALLTRYON",
    description: "Try on any garment on your real body with zero guesswork. High-precision neural AI virtual fitting room.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F2",
    theme_color: "#121212",
    icons: [
      {
        src: "/assets/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

