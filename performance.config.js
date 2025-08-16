// Configuration des performances pour le portfolio
module.exports = {
  // Optimisations des images
  images: {
    formats: ['image/webp', 'image/avif'],
    quality: 85,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Optimisations CSS
  css: {
    purge: true,
    minify: true,
    autoprefixer: true,
  },
  
  // Optimisations JavaScript
  js: {
    minify: true,
    treeShaking: true,
    codeSplitting: true,
  },
  
  // Optimisations des polices
  fonts: {
    preload: true,
    display: 'swap',
    fallback: true,
  },
  
  // Optimisations du cache
  cache: {
    images: '1 year',
    css: '1 month',
    js: '1 month',
    fonts: '1 year',
  },
  
  // Optimisations de compression
  compression: {
    gzip: true,
    brotli: true,
    minify: true,
  }
}
