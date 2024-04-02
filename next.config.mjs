/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    font: {
      urls: [
        {
          src: 'https://fonts.googleapis.com/css2?family=IM+Fell+English&display=swap',
          family: 'IM Fell English',
          strategy: 'self',
        },
        {
          src: 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap',
          family: 'Lato',
          strategy: 'self',
        },
      ],
    },
  },
};

export default nextConfig;
