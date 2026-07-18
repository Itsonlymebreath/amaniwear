'use client'

export default function TrustBadges() {
  const badges = [
    {
      icon: '🚚',
      title: 'توصيل لجميع المدن',
      subtitle: 'Livraison partout au Maroc',
      detail: 'مجاني ابتداءً من 250 درهم',
    },
    {
      icon: '💰',
      title: 'الدفع عند الاستلام',
      subtitle: 'Paiement à la livraison',
      detail: 'بسيط وآمن',
    },
    {
      icon: '📱',
      title: 'خدمة عملاء واتساب',
      subtitle: 'Service client WhatsApp',
      detail: 'رد سريع مضمون',
    },
  ]

  return (
    <section className="bg-white py-16" id="trust-badges">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[#FDF8F4] p-8 text-center transition-all duration-300 hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                {badge.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold text-[#2D2D2D]">{badge.title}</h3>
              <p className="mb-2 text-xs font-medium text-[#C4A882]">{badge.subtitle}</p>
              <p className="text-sm text-gray-500">{badge.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
