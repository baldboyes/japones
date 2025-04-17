<template>
  <div class="fixed bottom-8 left-4">
    <button 
      @click="$emit('toggle')"
      class="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-lg"
      title="Cambiar modo de juego"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

defineEmits<{
  (e: 'toggle'): void;
}>();

defineOptions({
  name: 'GameModeToggle'
});
</script> 