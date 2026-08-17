<template>
  <div class="relative">
    <div ref="contentEl">
      <slot />
    </div>
    <button
      class="absolute top-2 right-2 text-xs px-2 py-1 rounded border border-current opacity-60 hover:opacity-100"
      @click="copy"
    >
      {{ copied ? 'Copied' : 'Copy' }}
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
