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
        className="category-image absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white">
        <h3 className="mb-1 text-2xl font-bold drop-shadow-lg">{name.ar}</h3>
        <p className="mb-3 text-sm font-medium text-white/80 drop-shadow">{name.fr}</p>
        <p className="mb-4 text-xs text-white/70">{description.ar}</p>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-bold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">
          اكتشفي المجموعة ←
        </span>
      </div>
    </div>
  )
}
