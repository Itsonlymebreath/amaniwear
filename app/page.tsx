import { getSortedBlogsData } from '@/lib/blogs'
import Link from 'next/link'

export default function Home() {
  const allPostsData = getSortedBlogsData()

  return (
    <div
      className="bg-black text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-black"
      dir="rtl"
    >
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-zinc-900">
        <div className="flex items-center gap-2">
          <span className="font-black text-xl tracking-wider">Hammadi Capital</span>
          <div className="w-5 h-5 bg-yellow-500 transform skew-x-12"></div>
        </div>
        <div className="flex gap-6 text-zinc-400 text-sm font-bold">
          <Link href="/tools" className="hover:text-yellow-500 transition">
            الأدوات
          </Link>
          <Link href="/blog" className="hover:text-yellow-500 transition">
            المدونة
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12 text-right">
        {/* Text Area */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-right">
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 w-full">
            النظام المالي فالمغرب <br />
            <span className="text-yellow-500">مضروب.</span> بني السيستم ديالك.
          </h1>
          <p className="text-zinc-400 text-base max-w-md mb-8 leading-relaxed w-full">
            سيكولوجية الفلوس، الوعي المالي، وأنظمة صناعة المحتوى للجيل الجديد. كولشي مـحسوب بـ الماط
            بلا زواق.
          </p>
          <div className="flex gap-4">
            <Link
              href="/system"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition duration-300 shadow-[0_4px_20_rgba(234,179,8,0.15)]"
            >
              ادخل للسيستم
            </Link>
            <Link
              href="/tools"
              className="border border-zinc-700 px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-black transition duration-300"
            >
              اكتشف الأدوات
            </Link>
          </div>
        </div>

        {/* Hammadi Character Vector Container */}
        <div className="w-full md:w-1/2 flex justify-center border border-zinc-800 rounded-2xl bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-yellow-500/30 transition duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
          <img
            src="/images/hammadi-hero.png"
            alt="Hammadi Character"
            className="w-full h-auto max-w-sm object-contain z-10 filter drop-shadow-[0_0_20px_rgba(234,179,8,0.08)]"
          />
        </div>
      </section>

      {/* Latest Blogs Section (أحدث التسريبات) */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-zinc-900 w-full">
        <h2 className="text-2xl font-black text-right mb-10 tracking-wide text-zinc-100">
          أحدث التسريبات
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {allPostsData.slice(0, 3).map(({ id, title, description, date }) => (
            <Link href={`/blog/${id}`} key={id} className="block group">
              <div className="border border-zinc-850 bg-zinc-900/20 p-6 rounded-xl text-right h-full flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/50 transition duration-300">
                <div>
                  <span className="text-xs text-zinc-500 font-mono">{date}</span>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-yellow-500 transition duration-200">
                    {title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">{description}</p>
                </div>
                <div className="text-yellow-500 text-xs font-bold mt-4 flex items-center justify-start gap-1 opacity-0 group-hover:opacity-100 transition duration-300">
                  اقرأ التسريب ←
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
