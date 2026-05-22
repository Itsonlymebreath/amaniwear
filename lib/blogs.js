import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export function getSortedBlogsData() {
  if (!fs.existsSync(blogsDirectory)) {
    fs.mkdirSync(blogsDirectory, { recursive: true })
  }

  const fileNames = fs.readdirSync(blogsDirectory)
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    }
  })

  return allBlogsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogData(id) {
  const fullPath = path.join(blogsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}
