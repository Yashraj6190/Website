import { getCollection } from 'astro:content'
import type { CollectionPosts, PostKey } from '@/types'

// Modify the sort function to handle optional dates
export function sortPostsByDate(itemA: CollectionPosts, itemB: CollectionPosts) {
  const dateA = itemA.data.date ? new Date(itemA.data.date).getTime() : 0
  const dateB = itemB.data.date ? new Date(itemB.data.date).getTime() : 0
  return dateB - dateA // Sort in descending order (newest first)
}

export async function getPosts(path?: string, collection: PostKey = 'blog') {
  return (await getCollection(collection, (post) => {
    const isPublished = import.meta.env.PROD ? post.data.draft !== true : true
    const matchesPath = path ? post.slug.includes(path) : true
    return isPublished && matchesPath
  })).sort(sortPostsByDate)
}
