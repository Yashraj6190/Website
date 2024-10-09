<script lang="ts" setup>
interface Post {
  id: string
  slug: string
  body: string
  data: Record<string, any>
  collection: string
  render: any
}

withDefaults(defineProps<{
  list: Post[]
}>(), {
  list: () => [],
})

function getDate(date: string) {
  return new Date(date).toISOString()
}

function getHref(post: Post) {
  if (post.data.redirect)
    return post.data.redirect
  return `/Website/posts/${post.slug}`
}

function getTarget(post: Post) {
  if (post.data.redirect)
    return '_blank'
  return '_self'
}

function isSameYear(a: Date | string | number, b: Date | string | number) {
  return a && b && getYear(a) === getYear(b)
}

function getYear(date: Date | string | number) {
  return new Date(date).getFullYear()
}
</script>

<template>
  <ul class="min-h-28 mb-18">
    <template v-if="!list || list.length === 0">
      <div class="my-12 opacity-50">
        Nothing here yet.
      </div>
    </template>
    <li v-for="(post, index) in list" :key="post.data.title" class="mb-8">
      <div v-if="!isSameYear(post.data.date, list[index - 1]?.data.date)" class="select-none relative h18 pointer-events-none">
        <span class="text-3xl font-bold text-transparent text-stroke-2 text-stroke-hex-aaa opacity-14 absolute top-[-0.2em]">
          {{ getYear(post.data.date) }}
        </span>
      </div>
      <a class="text-lg leading-tight flex flex-col gap-2 nav-link" :aria-label="post.data.title" :target="getTarget(post)" :href="getHref(post)">
        <div class="flex flex-col md:flex-row gap-2 md:items-center">
          <div class="flex gap-2 items-center">
            <span class="text-xl font-bold">
              <i v-if="post.data.draft" class="text-base vertical-middle i-ri-draft-line" />
              {{ post.data.title }}
            </span>
          </div>
          <div class="opacity-50 text-sm whitespace-nowrap flex gap-2 items-center">
            <i v-if="post.data.redirect" class="text-base i-ri-external-link-line" />
            <time v-if="post.data.date" :datetime="getDate(post.data.date)">{{ post.data.date.split(',')[0] }}</time>
            <span v-if="post.data.duration">. {{ post.data.duration }}</span>
            <span v-if="post.data.tag">. {{ post.data.tag }}</span>
            <span v-if="post.data.lang && post.data.lang.includes('zh')">· 中文</span>
          </div>
          <!-- Display Supervisor -->
          <div v-if="post.data.supervisor && post.data.supervisor.length > 0" class="opacity-50 text-sm">
            <strong>Supervisors:</strong>
            <span v-for="(sup, index) in post.data.supervisor" :key="sup.name">
              <a :href="sup.url">{{ sup.name }}</a>
              <span v-if="index < post.data.supervisor.length - 1">, </span>
            </span>
          </div>
          <!-- Display Time Duration -->
          <div v-if="post.data.timeDuration" class="opacity-50 text-sm">
            {{ post.data.timeDuration }}
          </div>
        </div>
        <div class="opacity-50 text-sm">{{ post.data.description }}</div>
      </a>
    </li>
  </ul>
</template>
