import type { NextConfig } from "next";

// GitHub Pages project site: https://<owner>.github.io/GYM_APP/
const nextConfig: NextConfig = {
  output: "export",
  basePath: "/GYM_APP",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
