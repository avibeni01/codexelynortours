/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration des images optimisée pour les plages
  images: {
    domains: [
      // Images génériques
      'images.pexels.com',
      'images.unsplash.com',
      
      // Images plages Mer Morte
      'dynamic-media-cdn.tripadvisor.com',
      'deadsea.com',
      'res.cloudinary.com',
      'media-cdn.tripadvisor.com',
      'www.deadsea.co.il',
      'ynet-pic1.yit.co.il',
      'www.americaisraeltours.com',
      'imgs.sanatoriums.com',
      'upload.wikimedia.org',
      'sandee.com',
      'cf.bstatic.com',
      'ngedi.co.il',
      'www.immanuel-tours.com',
      'images.squarespace-cdn.com',
      'thumbs.dreamstime.com',
      'www.locate.co.il',
      'www.now14.co.il',
      
      // Images plages Méditerranée  
      'media.tacdn.com',
      'www.worldbeachguide.com',
      'lh5.googleusercontent.com',
      
      // Domaines Elynor Tours
      'elynortours.com',
      'www.elynortours.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an de cache
  },
  
  // Optimisations de performance
  swcMinify: true,
  compress: true,
  
  // Configuration SEO
  trailingSlash: false,
  
  // Headers de sécurité et performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  // Redirections SEO importantes
  async redirects() {
    return [
      // Redirections anciennes URLs vers nouvelles
      {
        source: '/beaches/dead-sea',
        destination: '/plages/mer-morte',
        permanent: true,
      },
      {
        source: '/beaches/mediterranean',
        destination: '/plages/mediterranee',
        permanent: true,
      },
      {
        source: '/dead-sea-beaches',
        destination: '/plages/mer-morte',
        permanent: true,
      },
      {
        source: '/mediterranean-beaches',
        destination: '/plages/mediterranee',
        permanent: true,
      },
    ]
  },
  
  // Configuration expérimentale pour de meilleures performances
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Configuration du bundler
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimisation pour réduire la taille du bundle
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 20,
          },
          lib: {
            test(module) {
              return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier())
            },
            name(module) {
              const hash = crypto.createHash('sha1')
              hash.update(module.libIdent({ context: config.context }))
              return hash.digest('hex').substring(0, 8)
            },
            priority: 30,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      }
    }
    
    return config
  },
  
  // Variables d'environnement publiques
  env: {
    SITE_URL: 'https://elynortours.com',
    COMPANY_NAME: 'Elynor Tours',
  },
}

module.exports = nextConfig