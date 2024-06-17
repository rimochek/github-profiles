<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-md mx-auto pt-6"
    v-if="$props.profile"
  >
    <div class="flex justify-end px-4 pt-4"></div>
    <div class="flex flex-col items-center pb-10">
      <img
        class="w-24 h-24 mb-3 rounded-full shadow-lg"
        :src="image"
        alt="Bonnie image"
      />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {{ name }}
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400 mb-1">{{
        bio
      }}</span>
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Last 4 repositories:
      </h5>
      <div class="grid grid-cols-2 gap-4 px-3">
        <a v-for="repo in repos" :key="repo['id']" :href="repo['svn_url']">
          <div
            class="text-center block max-w-sm p-1 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium"
          >
            {{ repo["name"] }}
          </div>
        </a>
      </div>
      <div class="flex mt-4 md:mt-6">
        <a
          :href="url"
          class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >Check on Github</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, defineProps, ref } from "vue"

const props = defineProps({
  profile: { type: Object },
  repos: { type: Object },
})

const name = ref("")
const bio = ref("")
const image = ref("@/assets/images/image.png")
const url = ref("")
const repos = ref()

watch(
  () => props.profile,
  (newValue, oldValue) => {
    name.value = newValue["data"]["login"]
    bio.value = newValue["data"]["bio"]
    image.value = newValue["data"]["avatar_url"]
    url.value = newValue["data"]["html_url"]
  }
)

watch(
  () => props.repos,
  (newValue, oldValue) => {
    repos.value = newValue["data"].slice(0, 4)
    console.log(repos.value)
  }
)
</script>
