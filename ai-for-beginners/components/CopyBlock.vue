<template>
  <div class="relative">
    <div ref="contentEl" class="pr-12">
      <slot />
    </div>
    <button
      class="absolute top-2 right-2 p-1.5 rounded border border-current opacity-60 hover:opacity-100"
      :aria-label="copied ? 'Copied' : 'Copy'"
      @click="copy"
    >
      <svg
        v-if="!copied"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <svg
        v-else
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const contentEl = ref(null)
const copied = ref(false)

async function copy() {
  if (!contentEl.value) return
  await navigator.clipboard.writeText(contentEl.value.innerText.trim())
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>
