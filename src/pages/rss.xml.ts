import rss from '@astrojs/rss'
import siteConfig from '@/site-config'
import { getPosts } from '@/utils/posts'

interface Post {
  slug: string
  data: {
    title?: string
    description?: string
    date?: string
  }
  body: string
}

interface Context {
  site: string
}

export async function GET(context: Context) {
  const posts = await getPosts()

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((item: Post) => ({
      title: item.data.title || 'Untitled', // Provide a default value if title is undefined
      description: item.data.description || '', // Provide a default value if description is undefined
      link: `${context.site}/posts/${item.slug}/`,
      pubDate: item.data.date ? new Date(item.data.date) : new Date(), // Provide a default date if date is undefined
      content: item.body,
      author: `${siteConfig.author} <${siteConfig.email}>`,
    })),
  })
}
