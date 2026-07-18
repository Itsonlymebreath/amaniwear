/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Amani Wear',
  author: 'Amani Wear',
  headerTitle: 'Amani Wear',
  description: 'عبايات أنيقة وعصرية بجودة عالية — توصيل لجميع مدن المغرب | Abayas élégantes et modernes de haute qualité — Livraison partout au Maroc',
  language: 'ar-MA',
  theme: 'light',
  siteUrl: 'https://amaniwear.ma',
  siteRepo: '',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'contact@amaniwear.ma',
  instagram: 'https://www.instagram.com/amaniwear',
  whatsapp: '+212XXXXXXXXX',
  locale: 'ar-MA',
  stickyNav: true,
  analytics: {},
  newsletter: {},
  comments: {},
  search: {},
}

module.exports = siteMetadata
