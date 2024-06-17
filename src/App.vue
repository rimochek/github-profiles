<template>
  <div class="p-12">
    <div class="grid justify-items-stretch mb-6">
      <label class="inline-flex items-center cursor-pointer justify-self-start">
        <input
          type="checkbox"
          v-model="isToggled"
          @change="handleToggle()"
          class="sr-only peer"
        />
        <div
          class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        ></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Change Theme</span
        >
      </label>
      <h1
        class="text-gray-900 dark:text-gray-300 font-black text-3xl justify-self-center"
      >
        Find Github Profile
      </h1>
    </div>

    <Search @myEvent="handleEvent" />
    <div class="h-5"></div>
    <Profile :profile="profile" :repos="repos" />
  </div>
</template>

<script setup>
import Profile from "./components/Profile.vue"
import Search from "./components/Search.vue"
import { ref } from "vue"

const isToggled = ref(false)
const profile = ref(null)
const repos = ref(null)

const handleEvent = (profile_, repos_) => {
  profile.value = profile_
  repos.value = repos_
}

function handleToggle() {
  if (isToggled.value == true) {
    document.documentElement.classList.add("dark")
    document.documentElement.style.backgroundColor = "black"
  } else {
    document.documentElement.classList.remove("dark")
    document.documentElement.style.backgroundColor = "white"
  }
}
</script>
