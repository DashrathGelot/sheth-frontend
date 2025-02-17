const nextConfig = {
    reactStrictMode: false,
    images: {
      remotePatterns: [
          { 
              hostname: 'rollyrich.s3.ap-south-1.amazonaws.com',
              protocol: 'https',
              pathname: '**'
          }
      ],
  }
}
  
module.exports = nextConfig