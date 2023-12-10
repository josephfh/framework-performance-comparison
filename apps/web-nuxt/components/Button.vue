<script setup lang="ts">
import { clsx } from 'clsx'
import { useAttrs } from 'vue'

const attrs = useAttrs()
</script>

<template>
  <button
    :class="
      clsx(
        attrs.class ||
          'inline-flex rounded-sm bg-slate-300 px-4 py-3 hover:bg-slate-200'
      )
    "
  >
    <slot />
  </button>
</template>
