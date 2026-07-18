'use client'

import { Product } from '@/data/productsData'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const phoneNumber = '+212XXXXXXXXX'
  const message = encodeURIComponent(
    `السلام عليكم 🌸\nأريد الاستفسار عن: ${product.name.ar}\nالمرجو إرسال السعر والمقاسات المتوفرة. شكراً!`
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="product-card group" id={`product-${product.id}`}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name.ar}
          className="product-image w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <div className="bg-[#8B2252] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider">
              جديد ✨
            </div>
          )}
          {product.originalPrice && (
            <div className="bg-red-500 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full shadow-lg">
              تخفيض 🔥
            </div>
          )}
        </div>

        {/* Full overlay CTA on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end pb-8 gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-full shadow-xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#20BA5A] text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            اطلبي الآن 🛒
          </a>
          <span className="text-white/70 text-xs font-medium transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
            الرد في أقل من 5 دقائق ⚡
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-bold text-lg text-[#2D2D2D] mb-1 leading-tight">
          {product.name.ar}
        </h3>
        <p className="text-xs text-gray-400 font-medium mb-3">{product.name.fr}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
          {product.description.ar}
        </p>

        {/* Colors */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.colors.map((color) => (
            <span
              key={color}
              className="text-[11px] bg-[#FDF8F4] text-[#8B6D4A] px-2.5 py-1 rounded-full border border-[#F0D5B8]/50"
            >
              {color}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div>
            {product.price ? (
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-extrabold text-[#8B2252]">
                  {product.price} <span className="text-sm">درهم</span>
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {product.originalPrice} درهم
                  </span>
                )}
              </div>
            ) : (
              <span className="text-sm font-bold text-[#C4A882]">
                اسألي عن السعر 💬
              </span>
            )}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#20BA5A] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            اطلبي
          </a>
        </div>
      </div>
    </div>
  )
}
