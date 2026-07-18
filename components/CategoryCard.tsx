'use client'

interface CategoryCardProps {
  name: { ar: string; fr: string }
  description: { ar: string; fr: string }
  image: string
  onClick?: () => void
}

export default function CategoryCard({ name, description, image, onClick }: CategoryCardProps) {
  return (
    <div
      className="category-card group cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <img
        src={image}
        alt={name.ar}
        className="category-image absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
        <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">{name.ar}</h3>
        <p className="text-sm text-white/80 font-medium mb-3 drop-shadow">{name.fr}</p>
        <p className="text-xs text-white/70 mb-4">{description.ar}</p>
        <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 w-fit group-hover:bg-white/30 transition-all duration-300">
          اكتشفي المجموعة ←
        </span>
      </div>
    </div>
  )
}
