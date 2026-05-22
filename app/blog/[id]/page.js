import { getBlogData } from '@/lib/blogs'
import Link from 'next/link'

export default async function BlogPost({ params }) {
  const { id } = await params
  const postData = await getBlogData(id)

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-yellow-500 selection:text-black">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-4xl items-center justify-between border-b border-zinc-900 p-6">
        <Link href="/" className="text-sm font-bold text-zinc-500 transition hover:text-yellow-500">
          ← الرجوع للرئيسية
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-wider">Hammadi Capital</span>
          <div className="h-4 w-4 skew-x-12 transform bg-yellow-500"></div>
        </div>
      </nav>

      {/* Blog Content Container */}
      <article className="mx-auto max-w-3xl px-6 py-16 text-right">
        {/* Meta Data */}
        <header className="mb-12 border-b border-zinc-900 pb-6">
          <span className="font-mono text-xs tracking-widest text-yellow-500">{postData.date}</span>
          <h1 className="mt-3 mb-4 text-3xl leading-tight font-black text-zinc-100 md:text-5xl">
            {postData.title}
          </h1>
          <p className="ml-auto max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            {postData.description}
          </p>
        </header>

        {/* Dynamic Parsed Markdown Content HTML */}
        <div
          className="prose prose-invert prose-headings:font-black prose-headings:text-zinc-100 prose-headings:mt-8 prose-headings:mb-4 prose-h1:text-2xl md:prose-h1:text-3xl prose-h2:text-xl md:prose-h2:text-2xl prose-p:text-base md:prose-p:text-lg prose-p:text-zinc-300 prose-strong:text-yellow-500 prose-strong:font-bold max-w-none space-y-6 leading-relaxed text-zinc-300"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  )
}
