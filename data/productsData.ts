export interface Product {
  id: string
  name: { ar: string; fr: string }
  description: { ar: string; fr: string }
  price: number | null // null = "اتصلي للسعر" (Contact for price)
  originalPrice?: number | null
  images: string[]
  colors: string[]
  category:
    | 'abaya-embroidered'
    | 'abaya-button'
    | 'abaya-set'
    | 'collection'
    | 'abaya-flower'
    | 'abaya-crinkle'
    | 'abaya-sleeve'
  featured: boolean
  isNew?: boolean
}

const productsData: Product[] = [
  // --- EXISTING EMBROIDERED ---
  {
    id: 'abaya-embroidered-blue',
    name: { ar: 'عباية مطرزة — أزرق ملكي', fr: 'Abaya Brodée — Bleu Royal' },
    description: {
      ar: 'عباية أنيقة بتطريز يدوي فاخر على الأمام والأكمام. قماش خفيف ومريح، مناسبة لجميع المناسبات.',
      fr: 'Abaya élégante avec broderie artisanale sur le devant et les manches. Tissu léger et confortable.',
    },
    price: null,
    images: ['/images/products/abaya-embroidered-blue.jpg'],
    colors: ['أزرق ملكي', 'أسود', 'أخضر زمردي'],
    category: 'abaya-embroidered',
    featured: true,
    isNew: true,
  },
  {
    id: 'abaya-embroidered-pink',
    name: { ar: 'عباية مطرزة — وردي', fr: 'Abaya Brodée — Rose Poudré' },
    description: {
      ar: 'عباية بلون وردي ناعم مع تطريز ذهبي رائع. تصميم عصري يجمع بين الأناقة والاحتشام.',
      fr: 'Abaya rose poudré avec broderie dorée raffinée. Design moderne alliant élégance et pudeur.',
    },
    price: null,
    images: ['/images/products/abaya-embroidered-pink.jpg'],
    colors: ['وردي', 'بيج', 'رمادي'],
    category: 'abaya-embroidered',
    featured: true,
    isNew: true,
  },

  // --- NEW EMBROIDERED FRONT ---
  {
    id: 'abaya-embroidered-front-green',
    name: { ar: 'عباية بتطريز أمامي — أخضر', fr: 'Abaya Brodée Devant — Vert' },
    description: {
      ar: 'عباية راقية بتطريز أنيق على شكل نجمة أو ألماسة على طول الجهة الأمامية والأكمام.',
      fr: 'Abaya chic avec broderie élégante (motif étoile/losange) le long du devant et des manches.',
    },
    price: null,
    images: [
      '/images/products/abaya-embroidered-front-green.jpg',
      '/images/products/abaya-embroidered-front-black.jpg',
    ],
    colors: ['أخضر', 'أسود'],
    category: 'abaya-embroidered',
    featured: true,
    isNew: true,
  },

  // --- NEW SLEEVE EMBROIDERED ---
  {
    id: 'abaya-sleeve-embroidered',
    name: { ar: 'عباية بتطريز الأكمام', fr: 'Abaya Broderie Manches' },
    description: {
      ar: 'عباية يومية بألوان جذابة تتميز بتطريز أوراق الشجر الأنيق على أطراف الأكمام.',
      fr: 'Abaya de tous les jours aux couleurs attrayantes avec élégante broderie de feuilles sur les manches.',
    },
    price: null,
    images: [
      '/images/products/abaya-sleeve-navy.jpg',
      '/images/products/abaya-sleeve-red.jpg',
      '/images/products/abaya-sleeve-purple.jpg',
      '/images/products/abaya-sleeve-maroon.jpg',
    ],
    colors: ['أزرق داكن (كحلي)', 'أحمر', 'بنفسجي', 'خمري (بوردو)'],
    category: 'abaya-sleeve',
    featured: true,
    isNew: true,
  },

  // --- NEW FLOWER PATTERN ---
  {
    id: 'abaya-flower-collection',
    name: { ar: 'عباية بنقشة الزهور', fr: 'Abaya Motif Floral' },
    description: {
      ar: 'عباية صيفية منعشة بتصميم يضم نقوش زهور أنيقة وألوان زاهية، مثالية للإطلالات الكاجوال.',
      fr: "Abaya d'été rafraîchissante avec des motifs floraux élégants et des couleurs vives, parfaite pour un look casual.",
    },
    price: null,
    images: [
      '/images/products/abaya-flower-group.jpg',
      '/images/products/abaya-flower-beige.jpg',
      '/images/products/abaya-flower-orange.jpg',
      '/images/products/abaya-flower-black.jpg',
      '/images/products/abaya-flower-burgundy.jpg',
      '/images/products/abaya-flower-green.jpg',
      '/images/products/abaya-flower-blue.jpg',
      '/images/products/abaya-flower-brown.jpg',
    ],
    colors: ['بيج', 'برتقالي', 'أسود', 'خمري', 'أخضر', 'أزرق', 'بني'],
    category: 'abaya-flower',
    featured: true,
    isNew: true,
  },

  // --- EXISTING BUTTON & SET ---
  {
    id: 'abaya-button-rose-set',
    name: { ar: 'طقم عباية بأزرار — وردي قديم', fr: 'Ensemble Abaya à Boutons — Vieux Rose' },
    description: {
      ar: 'طقم عباية مع سروال واسع متناسق. قماش كتان ناعم بأزرار ذهبية أنيقة. قطعة واحدة = إطلالة كاملة.',
      fr: 'Ensemble abaya avec pantalon large assorti. Lin doux avec boutons dorés élégants.',
    },
    price: null,
    images: [
      '/images/products/abaya-button-rose-1.jpg',
      '/images/products/abaya-button-rose-2.jpg',
    ],
    colors: ['وردي قديم', 'أسود', 'كحلي'],
    category: 'abaya-set',
    featured: true,
  },
  {
    id: 'abaya-button-rose-front',
    name: { ar: 'عباية كتان بأزرار — وردي', fr: 'Abaya Lin à Boutons — Rose' },
    description: {
      ar: 'عباية كتان واسعة بأزرار ذهبية مع حقيبة يد متناسقة. ستايل كاجوال أنيق للخروجات اليومية.',
      fr: 'Abaya en lin ample avec boutons dorés et sac assorti. Style casual chic pour le quotidien.',
    },
    price: null,
    images: ['/images/products/abaya-button-rose-2.jpg'],
    colors: ['وردي', 'أسود', 'بيج'],
    category: 'abaya-button',
    featured: true,
  },
  {
    id: 'abaya-button-beige',
    name: { ar: 'عباية بأزرار — بيج ذهبي', fr: 'Abaya à Boutons — Beige Doré' },
    description: {
      ar: 'عباية كاجوال أنيقة بأزرار متناسقة. قماش كتان طبيعي مريح للاستعمال اليومي.',
      fr: 'Abaya casual élégante avec boutons assortis. Lin naturel confortable pour un usage quotidien.',
    },
    price: null,
    images: ['/images/products/abaya-button-beige.jpg'],
    colors: ['بيج ذهبي', 'زيتي', 'بني', 'خمري'],
    category: 'abaya-button',
    featured: true,
  },

  // --- NEW CRINKLE ---
  {
    id: 'abaya-crinkle-blue',
    name: { ar: 'عباية كتان مجعد (كرينكل) بأزرار', fr: 'Abaya Lin Froissé (Crinkle) à Boutons' },
    description: {
      ar: 'عباية مريحة جداً بقماش الكرينكل (المجعد) العملي الذي لا يحتاج لكي، مع أزرار أمامية.',
      fr: 'Abaya très confortable en tissu froissé (crinkle) pratique qui ne nécessite pas de repassage, avec boutons sur le devant.',
    },
    price: null,
    images: ['/images/products/abaya-crinkle-blue.jpg'],
    colors: ['أزرق (سماوي)'],
    category: 'abaya-crinkle',
    featured: true,
    isNew: true,
  },

  // --- COLLECTIONS ---
  {
    id: 'collection-multi',
    name: { ar: 'تشكيلة عبايات متنوعة — +10 ألوان', fr: 'Collection Abayas — +10 Coloris' },
    description: {
      ar: 'تشكيلة واسعة من العبايات بأزرار بألوان متعددة. اختاري لونك المفضل وتواصلي معنا عبر واتساب — متوفرة بجميع المقاسات.',
      fr: "Large collection d'abayas à boutons en +10 coloris. Choisissez votre couleur et contactez-nous.",
    },
    price: null,
    images: ['/images/products/collection-display.jpg'],
    colors: ['بيج', 'أسود', 'وردي', 'أزرق', 'بنفسجي', 'أخضر', 'خمري'],
    category: 'collection',
    featured: true,
  },
  {
    id: 'collection-basic',
    name: { ar: 'تشكيلة العبايات الأساسية', fr: 'Collection Abayas Basiques' },
    description: {
      ar: 'تشكيلة من العبايات الأساسية بألوان متعددة وتصميم بسيط وراقي لكل يوم.',
      fr: "Collection d'abayas basiques aux multiples couleurs avec un design simple et raffiné pour tous les jours.",
    },
    price: null,
    images: ['/images/products/abaya-basic-group.jpg'],
    colors: ['ألوان متعددة'],
    category: 'collection',
    featured: true,
    isNew: true,
  },
]

export default productsData

export const categories = [
  {
    id: 'abaya-embroidered',
    name: { ar: 'عبايات مطرزة', fr: 'Abayas Brodées' },
    description: { ar: 'تطريز يدوي فاخر', fr: 'Broderie artisanale de luxe' },
    image: '/images/products/abaya-embroidered-pink.jpg',
  },
  {
    id: 'abaya-flower',
    name: { ar: 'عبايات بنقشة الزهور', fr: 'Abayas Motif Floral' },
    description: { ar: 'تصاميم صيفية منعشة', fr: "Designs d'été rafraîchissants" },
    image: '/images/products/abaya-flower-orange.jpg',
  },
  {
    id: 'abaya-sleeve',
    name: { ar: 'تطريز الأكمام', fr: 'Broderie Manches' },
    description: { ar: 'لمسات أنيقة', fr: 'Touches élégantes' },
    image: '/images/products/abaya-sleeve-purple.jpg',
  },
  {
    id: 'abaya-button',
    name: { ar: 'عبايات بأزرار', fr: 'Abayas à Boutons' },
    description: { ar: 'أناقة يومية مريحة', fr: 'Élégance quotidienne confortable' },
    image: '/images/products/abaya-button-beige.jpg',
  },
  {
    id: 'abaya-set',
    name: { ar: 'أطقم عبايات', fr: 'Ensembles Abayas' },
    description: { ar: 'عباية + سروال متناسق', fr: 'Abaya + Pantalon assorti' },
    image: '/images/products/abaya-button-rose-1.jpg',
  },
]
