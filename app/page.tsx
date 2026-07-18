import productsData, { categories } from '@/data/productsData'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import TrustBadges from '@/components/TrustBadges'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section
        className="relative overflow-hidden bg-gradient-to-bl from-[#FDF8F4] via-[#FEFCFA] to-[#F9EDE0]"
        id="hero"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
            {/* Text Content */}
            <div className="w-full text-right md:w-1/2">
              <div className="mb-6 inline-block animate-pulse rounded-full bg-[#8B2252]/10 px-4 py-1.5 text-xs font-bold text-[#8B2252]">
                🔥 الكمية محدودة — اطلبي قبل النفاذ
              </div>
              <h1 className="mb-6 text-4xl leading-tight font-extrabold text-[#2D2D2D] sm:text-5xl md:text-6xl">
                أناقة محتشمة
                <br />
                <span className="text-[#8B2252]">بجودة عالية</span>
              </h1>
              <p className="mb-4 max-w-lg text-lg leading-relaxed text-gray-500">
                عبايات عصرية بتصاميم فريدة وأقمشة فاخرة. اختاري ستايلك واطلبي مباشرة عبر واتساب.
              </p>
              <p
                className="mb-8 max-w-lg text-sm text-[#C4A882]"
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-5 w-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  اطلبي الآن عبر واتساب
                </a>
                <a href="#products" className="btn-primary text-base" id="hero-products-btn">
                  تصفحي المنتجات ↓
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full md:w-1/2">
              <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-3xl shadow-2xl shadow-[#C4A882]/20">
                <img
                  src="/images/products/abaya-embroidered-blue.jpg"
                  alt="عباية مطرزة أنيقة — Amani Wear"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/40 via-transparent to-transparent" />
                <div className="absolute right-6 bottom-6 left-6 text-white">
                  <p className="text-sm font-bold drop-shadow-lg">عباية مطرزة — أزرق ملكي</p>
                  <p className="text-xs text-white/80 drop-shadow">
                    تواصلي معنا للسعر والمقاسات 💬
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-[#C4A882]/10 blur-2xl" />
              <div className="absolute -right-6 -bottom-6 h-32 w-32 rounded-full bg-[#8B2252]/5 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute right-0 bottom-0 left-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60L1440 60L1440 20C1440 20 1320 0 1200 10C1080 20 960 40 720 30C480 20 240 0 0 20L0 60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ====== CATEGORIES SECTION ====== */}
      <section className="bg-white py-20" id="categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-[#2D2D2D] sm:text-4xl">تشكيلاتنا</h2>
            <p
              className="text-sm text-[#C4A882]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nos Collections
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-l from-[#C4A882] to-[#8B2252]" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-[#FDF8F4] py-20" id="products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-extrabold text-[#2D2D2D] sm:text-4xl">منتجاتنا</h2>
            <p
              className="text-sm text-[#C4A882]"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Nos Produits
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-l from-[#C4A882] to-[#8B2252]" />
            <p className="mx-auto mt-4 max-w-md text-sm text-gray-500">
              اختاري المنتج المناسب واطلبيه مباشرة عبر واتساب — التوصيل لجميع مدن المغرب
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-[#FDF8F4] py-20" id="video">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-block rounded-full bg-[#8B2252]/10 px-4 py-1.5 text-xs font-bold text-[#8B2252]">
              فيديو
            </div>
            <h2 className="mb-3 text-3xl font-extrabold text-[#2D2D2D]">شاهدي التشكيلة</h2>
            <p className="text-sm text-gray-500">تعرفي على جودة أقمشتنا وتصاميمنا عن قرب</p>
          </div>
          <div className="overflow-hidden rounded-3xl bg-black shadow-2xl shadow-[#C4A882]/20">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full object-cover"
              poster="/images/products/collection-display.jpg"
            >
              <source src="/videos/abaya-showcase.mp4" type="video/mp4" />
              <track kind="captions" />
              المتصفح لا يدعم الفيديو
            </video>
          </div>
        </div>
      </section>

      {/* ====== ABOUT SECTION ====== */}
      <section className="bg-white py-20" id="about">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="mb-3 text-3xl font-extrabold text-[#2D2D2D]">من نحن</h2>
          <p
            className="mb-8 text-sm text-[#C4A882]"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            À Propos de Nous
          </p>
          <div className="mx-auto max-w-2xl">
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              أماني وير — متجر مغربي متخصص في العبايات العصرية بأقمشة فاخرة وتصاميم أنيقة. نؤمن بأن
              الأناقة والاحتشام يسيران جنباً إلى جنب.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-gray-500">
              كل قطعة يتم اختيارها بعناية لتناسب ذوقك وتلبي احتياجاتك اليومية. نوفر توصيلاً لجميع
              مدن المغرب مع خدمة الدفع عند الاستلام.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-500">
                <span className="h-2 w-2 rounded-full bg-[#C4A882]" />
                أقمشة فاخرة
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="h-2 w-2 rounded-full bg-[#8B2252]" />
                تصاميم عصرية
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                طلب سهل عبر واتساب
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== CTA SECTION ====== */}
      <section className="relative overflow-hidden bg-gradient-to-l from-[#8B2252] via-[#6B1A40] to-[#8B2252] py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 h-40 w-40 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-10 left-20 h-60 w-60 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6">
          {/* Urgency badge */}
          <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-white backdrop-blur-sm">
            ⚡ الكمية محدودة — لا تفوتي الفرصة
          </div>

          <h2 className="mb-4 text-4xl font-extrabold sm:text-5xl">عجباتك شي عباية؟ 🌸</h2>
          <p className="mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-white/80">
            غير راسلينا فالواتساب وغادي نجاوبوك{' '}
            <strong className="text-white">في أقل من 5 دقائق</strong>
          </p>
          <p className="mb-10 text-sm text-white/60">
            الدفع عند الاستلام 💰 • توصيل لجميع المدن 🚚 • إرجاع مجاني ↩️
          </p>

          {/* Double CTA */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/+212XXXXXXXXX?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%F0%9F%8C%B8%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B7%D9%84%D8%A8%20%D8%B9%D8%A8%D8%A7%D9%8A%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-10 py-5 text-lg font-extrabold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#20BA5A] hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
              id="cta-whatsapp-main"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-7 w-7"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              اطلبي الآن عبر واتساب 🛒
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              شوفي المنتجات ↑
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/60">
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
