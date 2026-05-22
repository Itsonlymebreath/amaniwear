import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'المشاريع' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-[#1A1A1A]">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-[#F5F5F5] sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            المشاريع
          </h1>
          <p className="text-lg leading-7 text-[#F5F5F5]/60">اعرض مشاريعك هنا.</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
