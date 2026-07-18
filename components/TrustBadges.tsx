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
    <section className="py-16 bg-white" id="trust-badges">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-[#FDF8F4] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                {badge.icon}
              </div>
              <h3 className="font-bold text-lg text-[#2D2D2D] mb-1">{badge.title}</h3>
              <p className="text-xs text-[#C4A882] font-medium mb-2">{badge.subtitle}</p>
              <p className="text-sm text-gray-500">{badge.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
