import type { NextConfig } from 'next';

// STATIC_EXPORT=1: xuất web tĩnh (thư mục out/) để đưa lên GitHub Pages.
// NEXT_PUBLIC_BASE_PATH: đường dẫn con của repo, vd "/pain-clinic2" (workflow tự điền).
const isStaticExport = process.env.STATIC_EXPORT === '1';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

if (isStaticExport) {
  nextConfig.output = 'export';
  nextConfig.trailingSlash = true; // /booking → /booking/index.html, GitHub Pages phục vụ được
  nextConfig.basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  nextConfig.images = { unoptimized: true };
}

export default nextConfig;
