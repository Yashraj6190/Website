import type { CollectionEntry } from 'astro:content'

// Define your post collection key
export type PostKey = 'blog'

// Define the structure of your blog post entries
export type CollectionPosts = CollectionEntry<PostKey> & {
  data: {
    title: string
    date?: string
    description?: string
    image?: {
      src: string
      alt?: string
    }
    duration?: string
    draft?: boolean
    lang?: string
    tag?: string
    redirect?: string
    video?: boolean
    supervisor?: Supervisor[] // Always an array, even for a single supervisor
    timeDuration?: string
  }
}

// Define your pages collection key
export type Pages = 'pages'

// Define the structure of your page entries
export type CollectionPages = CollectionEntry<Pages>

// Define the structure for the ProjectData array
export type ProjectData = Array<{
  title: string
  projects: Array<{
    text: string
    description?: string
    icon?: string
    href: string
    duration?: string
    supervisor?: Supervisor[] // Always an array, even for a single supervisor
  }>
}>

// Define the Supervisor type separately
export interface Supervisor {
  name: string
  url?: string
}
