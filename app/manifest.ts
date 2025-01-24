import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "3D Display",
    short_name: "3D Display",
    description: "3D Display",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF",
    theme_color: "#FFF",
  };
}
