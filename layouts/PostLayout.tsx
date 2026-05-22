import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-[#1A1A1A]">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">نُشر في</dt>
                  <dd className="text-base leading-6 font-medium text-[#D4AF37]">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-[#1A1A1A] pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pt-6 pb-10 xl:border-b xl:border-[#1A1A1A] xl:pt-11">
              <dt className="sr-only">المؤلفون</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:gap-12 xl:block xl:space-y-8 xl:space-x-0">
                  {authorDetails.map((author) => (
                    <li className="flex items-center gap-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                        <dt className="sr-only">الاسم</dt>
                        <dd className="text-[#F5F5F5]">{author.name}</dd>
                        <dt className="sr-only">تويتر</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary hover:text-primary/80"
                            >
                              {author.twitter
                                .replace('https://twitter.com/', '@')
                                .replace('https://x.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-[#1A1A1A] xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 text-[#F5F5F5]">{children}</div>
              <div className="pt-6 pb-6 text-sm text-[#F5F5F5]/80">
                <Link href={discussUrl(path)} rel="nofollow">
                  ناقش على تويتر
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}>عرض على GitHub</Link>
              </div>
              {siteMetadata.comments && (
                <div className="pt-6 pb-6 text-center text-[#F5F5F5]/80" id="comment">
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-[#1A1A1A] text-sm leading-5 font-medium xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-[#F5F5F5]/60 uppercase">الوسوم</h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-[#F5F5F5]/60 uppercase">
                          المقال السابق
                        </h2>
                        <div className="text-primary hover:text-primary/80">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs tracking-wide text-[#F5F5F5]/60 uppercase">
                          المقال التالي
                        </h2>
                        <div className="text-primary hover:text-primary/80">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary hover:text-primary/80"
                  aria-label="العودة إلى المدونة"
                >
                  &rarr; العودة إلى المدونة
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
