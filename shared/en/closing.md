---
layout: center
---

# Questions?

<div>
  <a :href="deckUrl">{{ deckUrl }}</a>
</div>

<script setup>
import { ref, onMounted, computed } from 'vue'

const pathname = ref('')
onMounted(() => {
  pathname.value = window.location.pathname
})

const deckUrl = computed(() => {
  const match = pathname.value.match(/\/([^/]+)\/(en|fr)\//)
  return match
    ? `https://xballoy.github.io/presentations/${match[1]}/${match[2]}/`
    : 'https://xballoy.github.io/presentations/'
})
</script>
