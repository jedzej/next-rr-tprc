/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/:any*",
        destination: "/api/v1/proxy/",
      },
      {
        source: "/api/tprc/:any*",
        destination: "/api/trpc/:any*",
      },
      {
        source: "/api/:any*",
        destination: "/api/:any*",
      },
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
