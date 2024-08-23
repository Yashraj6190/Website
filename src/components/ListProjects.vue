<script lang="ts" setup>
defineProps<{
  list: {
    text: string
    description?: string
    icon?: string
    href: string
    duration?: string
    supervisor?: {
      name: string
      link: string
    }
  }[]
}>()
</script>

<template>
  <ul>
    <template v-if="!list || list.length === 0">
      <div py10 opacity-50 text-lg>
        nothing here yet.
      </div>
    </template>
    <li v-for="project in list" :key="project.text" class="w-full flex mb-10 p-4 rounded-lg shadow-lg">
      <a class="flex w-full" :href="project.href" :aria-label="project.text">
        <div class="flex-shrink-0 mr-6 flex items-center">
          <i class="text-5xl" :class="project.icon || 'i-carbon-unknown'" /> <!-- Icon centered vertically -->
        </div>
        <div class="flex-grow">
          <div class="text-lg font-bold hover:text-main">{{ project.text }}</div>
          <div v-if="project.duration" class="opacity-50 text-sm mt-1">
            <strong>Duration:</strong> {{ project.duration }}
          </div>
          <div v-if="project.supervisor" class="opacity-50 text-sm mt-1">
            <strong>Supervisor:</strong>
            <a :href="project.supervisor.link" class="supervisor-link">{{ project.supervisor.name }}</a>
          </div>
          <div class="opacity-50 text-sm mt-2">{{ project.description }}</div>
        </div>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.supervisor-link {
  color: blue;
  text-decoration: underline;
}

ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margin */
}

li {
  display: block; /* Ensure each project takes the full width of its parent */
  border-radius: 8px; /* Rounded corners for each project block */
}

a {
  text-decoration: none; /* Remove underline from links */
  color: inherit; /* Inherit text color */
  display: flex; /* Flexbox layout for alignment */
  align-items: center; /* Align items to the center vertically */
}

.flex-grow {
  flex-grow: 1; /* Ensure the project details take up the remaining space */
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Soft shadow for aesthetic */
}
</style>
