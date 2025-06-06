/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'images.unsplash.com',
      // Ajoute ici les domaines d'images que tu utilises
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // i18n configuration moved to app directory
  // For App Router, i18n is configured differently
  // See: https://nextjs.org/docs/app/building-your-application/routing/internationalization
}

module.exports = nextConfig