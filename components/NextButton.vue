<template>
  <div class="fixed bottom-8 right-4">
    <button 
      @click="$emit('next')"
      class="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 shadow-lg"
      :class="{ 'opacity-50 cursor-not-allowed': !canProceed }"
      :disabled="!canProceed"
      title="Siguiente carácter"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  canProceed: boolean;
}>();

defineEmits<{
  (e: 'next'): void;
}>();

defineOptions({
  name: 'NextButton'
});
</script> 