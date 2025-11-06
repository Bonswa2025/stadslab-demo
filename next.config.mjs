/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: 'loose' },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = { ...(config.resolve.alias || {}), 'pdfjs-dist/build/pdf.worker.min.mjs': 'pdfjs-dist/build/pdf.worker.min.js' };
    return config;
  },
  output: 'standalone'
};
export default nextConfig;
