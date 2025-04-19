<template>
  <div class="grid gap-2" :class="gridClass">
    <button
      v-for="option in options"
      :key="option"
      @click="selectOption(option)"
      class="p-4 text-lg font-medium rounded-lg transition-colors border border-gray-200"
      :class="buttonClass(option)"
      :disabled="showAnswer"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue';

  const props = defineProps<{
    options: string[];
    currentCharacter: { reading: string };
    showAnswer: boolean;
    numOptions: number;
  }>();

  const emit = defineEmits<{
    (e: 'select', option: string): void;
  }>();

  const gridClass = computed(() => {
    return props.numOptions === 4 ? 'grid-cols-2' : 'grid-cols-4';
  });

  const buttonClass = (option: string) => {
    if (!props.showAnswer) {
      return 'bg-white hover:bg-gray-100 text-gray-800';
    }
    
    if (option === props.currentCharacter.reading) {
      return 'bg-green-500 text-white border-green-600';
    }
    
    return 'bg-gray-200 text-gray-600 cursor-not-allowed';
  };

  const selectOption = (option: string) => {
    if (!props.showAnswer) {
      emit('select', option);
    }
  };

  // Limpiar la selección cuando se muestra la respuesta
  watch(() => props.showAnswer, (newValue: boolean) => {
    if (newValue) {
      // Esperamos un momento antes de limpiar la selección
      setTimeout(() => {
        // No es necesario manipular el DOM directamente
        // El cambio de showAnswer a false ya reiniciará los botones
      }, 2000);
    }
  });
</script> 