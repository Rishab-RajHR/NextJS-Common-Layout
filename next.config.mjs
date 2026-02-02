/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 
  // output: "export"
  redirects : async () => {
     return [
      //  {
      //     source: '/redirection',
      //     destination : '/',
      //     permanent: false
      //  },
       {
          source: '/redirection/:id',
          destination : '/',
          permanent: false
       }
     ]
  }
};

export default nextConfig;
