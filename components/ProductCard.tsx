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
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name.ar}
          className="product-image h-full w-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <div className="rounded-full bg-[#8B2252] px-3 py-1.5 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-lg">
              جديد ✨
            </div>
          )}
          {product.originalPrice && (
            <div className="rounded-full bg-red-500 px-3 py-1.5 text-[10px] font-extrabold text-white shadow-lg">
              تخفيض 🔥
            </div>
          )}
        </div>

        {/* Full overlay CTA on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pb-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex translate-y-6 transform items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-xl transition-all duration-500 group-hover:translate-y-0 hover:bg-[#20BA5A]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            اطلبي الآن 🛒
          </a>
          <span className="translate-y-6 transform text-xs font-medium text-white/70 transition-all delay-100 duration-500 group-hover:translate-y-0">
            الرد في أقل من 5 دقائق ⚡
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="mb-1 text-lg leading-tight font-bold text-[#2D2D2D]">{product.name.ar}</h3>
        <p className="mb-3 text-xs font-medium text-gray-400">{product.name.fr}</p>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {product.description.ar}
        </p>

        {/* Colors */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {product.colors.map((color) => (
            <span
              key={color}
              className="rounded-full border border-[#F0D5B8]/50 bg-[#FDF8F4] px-2.5 py-1 text-[11px] text-[#8B6D4A]"
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
              <span className="text-sm font-bold text-[#C4A882]">اسألي عن السعر 💬</span>
            )}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20BA5A] hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            اطلبي
          </a>
        </div>
      </div>
    </div>
  )
}
