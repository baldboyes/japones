<template>
  <div class="grid gap-2" :class="gridClass">
    <button
      v-for="option in options"
      :key="option"
      @click="selectOption(option)"
      class="p-4 text-lg font-medium rounded-lg transition-colors border border-gray-200"
      :class="buttonClass(option)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGameState } from '~/composables/useGameState';

defineProps<{
  options: string[];
}>();

const emit = defineEmits<{
  (e: 'select', option: string): void;
}>();

const { currentCharacter, showAnswer, numOptions } = useGameState([]);

const gridClass = computed(() => {
  return numOptions.value === 4 ? 'grid-cols-2' : 'grid-cols-4';
});

const buttonClass = (option: string) => {
  if (!showAnswer.value) {
    return 'bg-white hover:bg-gray-100 text-gray-800';
  }
  
  if (option === currentCharacter.value.reading) {
    return 'bg-green-500 text-white border-green-600';
  }
  
  return 'bg-gray-200 text-gray-600';
};

const selectOption = (option: string) => {
  if (!showAnswer.value) {
    emit('select', option);
  }
};
</script> 