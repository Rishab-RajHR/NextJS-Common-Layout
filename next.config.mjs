/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images : {
      domains : ["pixabay.com"]
  },
  output: "export"
};

export default nextConfig;
