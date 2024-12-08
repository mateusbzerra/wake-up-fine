import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WakeUp Fine",
    short_name: "WakeUp Fine",
    description:
      "WakeUp Fine is a simple web app that helps you calculate the best time to wake up based on your sleep cycles.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/manifest-icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/manifest-icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
