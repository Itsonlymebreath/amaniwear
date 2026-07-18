import productsData, { categories } from '@/data/productsData'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import TrustBadges from '@/components/TrustBadges'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-[#FDF8F4] via-[#FEFCFA] to-[#F9EDE0]" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-right">
              <div className="inline-block bg-[#8B2252]/10 text-[#8B2252] text-xs font-bold px-4 py-1.5 rounded-full mb-6 animate-pulse">
                🔥 الكمية محدودة — اطلبي قبل النفاذ
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#2D2D2D] mb-6">
                أناقة محتشمة
                <br />
                <span className="text-[#8B2252]">بجودة عالية</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-4 max-w-lg">
                عبايات عصرية بتصاميم فريدة وأقمشة فاخرة. اختاري ستايلك واطلبي مباشرة عبر واتساب.
              </p>
              <p
                className="text-sm text-[#C4A882] mb-8 max-w-lg"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Élégance modeste — Qualité premium — Livraison partout au Maroc
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/+212XXXXXXXXX?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%F0%9F%8C%B8%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AC%D8%A7%D8%AA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                  id="hero-whatsapp-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  اطلبي الآن عبر واتساب
                </a>
                <a
                  href="#products"
                  className="btn-primary text-base"
                  id="hero-products-btn"
                >
                  تصفحي المنتجات ↓
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#C4A882]/20 aspect-[3/4] max-w-md mx-auto">
                <img
                  src="/images/products/abaya-embroidered-blue.jpg"
                  alt="عباية مطرزة أنيقة — Amani Wear"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 text-white">
                  <p className="text-sm font-bold drop-shadow-lg">عباية مطرزة — أزرق ملكي</p>
                  <p className="text-xs text-white/80 drop-shadow">تواصلي معنا للسعر والمقاسات 💬</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C4A882]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B2252]/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 20C1440 20 1320 0 1200 10C1080 20 960 40 720 30C480 20 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ====== CATEGORIES SECTION ====== */}
      <section className="py-20 bg-white" id="categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-3">
              تشكيلاتنا
            </h2>
            <p
              className="text-[#C4A882] text-sm"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nos Collections
            </p>
            <div className="w-16 h-1 bg-gradient-to-l from-[#C4A882] to-[#8B2252] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRODUCTS SECTION ====== */}
      <section className="py-20 bg-[#FDF8F4]" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D2D] mb-3">
              منتجاتنا
            </h2>
            <p
              className="text-[#C4A882] text-sm"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nos Produits
            </p>
            <div className="w-16 h-1 bg-gradient-to-l from-[#C4A882] to-[#8B2252] mx-auto mt-4 rounded-full" />
            <p className="text-gray-500 mt-4 text-sm max-w-md mx-auto">
              اختاري المنتج المناسب واطلبيه مباشرة عبر واتساب — التوصيل لجميع مدن المغرب
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData
              .filter((p) => p.featured)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      {/* ====== TRUST BADGES ====== */}
      <TrustBadges />

      {/* ====== VIDEO SECTION ====== */}
      <section className="py-20 bg-[#FDF8F4]" id="video">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-block bg-[#8B2252]/10 text-[#8B2252] text-xs font-bold px-4 py-1.5 rounded-full mb-4">
              فيديو
            </div>
            <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-3">شاهدي التشكيلة</h2>
            <p className="text-gray-500 text-sm">تعرفي على جودة أقمشتنا وتصاميمنا عن قرب</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#C4A882]/20 bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video object-cover"
              poster="/images/products/collection-display.jpg"
            >
              <source src="/videos/abaya-showcase.mp4" type="video/mp4" />
              المتصفح لا يدعم الفيديو
            </video>
          </div>
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section className="py-20 bg-white" id="about">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-[#2D2D2D] mb-3">من نحن</h2>
          <p
            className="text-[#C4A882] text-sm mb-8"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            À Propos de Nous
          </p>
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              أماني وير — متجر مغربي متخصص في العبايات العصرية بأقمشة فاخرة وتصاميم أنيقة. نؤمن بأن الأناقة والاحتشام يسيران جنباً إلى جنب.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm mb-8">
              كل قطعة يتم اختيارها بعناية لتناسب ذوقك وتلبي احتياجاتك اليومية. نوفر توصيلاً لجميع مدن المغرب مع خدمة الدفع عند الاستلام.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-[#C4A882] rounded-full" />
                أقمشة فاخرة
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-[#8B2252] rounded-full" />
                تصاميم عصرية
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="w-2 h-2 bg-[#25D366] rounded-full" />
                طلب سهل عبر واتساب
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="py-20 bg-gradient-to-l from-[#8B2252] via-[#6B1A40] to-[#8B2252] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 h-40 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white relative z-10">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6 animate-pulse">
            ⚡ الكمية محدودة — لا تفوتي الفرصة
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            عجباتك شي عباية؟ 🌸
          </h2>
          <p className="text-white/80 mb-4 text-xl leading-relaxed max-w-2xl mx-auto">
            غير راسلينا فالواتساب وغادي نجاوبوك <strong className="text-white">في أقل من 5 دقائق</strong>
          </p>
          <p className="text-white/60 mb-10 text-sm">
            الدفع عند الاستلام 💰 • توصيل لجميع المدن 🚚 • إرجاع مجاني ↩️
          </p>

          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://wa.me/+212XXXXXXXXX?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%F0%9F%8C%B8%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%B9%D8%A8%D8%A7%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white text-lg font-extrabold px-10 py-5 rounded-full hover:bg-[#20BA5A] transition-all duration-300 shadow-2xl hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1"
              id="cta-whatsapp-main"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              اطلبي الآن عبر واتساب 🛒
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-base font-bold px-8 py-4 rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              شوفي المنتجات ↑
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap gap-8 justify-center text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✅</span>
              <span>+500 زبونة راضية</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>تقييم 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏷️</span>
              <span>أثمنة مناسبة</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FLOATING WHATSAPP ====== */}
      <WhatsAppButton />
    </>
  )
}
