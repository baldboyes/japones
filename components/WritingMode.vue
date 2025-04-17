<template>
  <div class="mb-8">
    <div class="flex flex-col items-center">
      <input 
        v-model="inputValue"
        type="text"
        class="w-full max-w-xs p-3 border rounded-lg text-center text-xl"
        placeholder="Escribe la lectura"
        @keyup.enter="handleCheck"
        :disabled="showAnswer"
      />
      <button 
        @click="handleCheck"
        class="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        :disabled="showAnswer"
      >
        Verificar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  showAnswer: boolean;
}>();

const emit = defineEmits<{
  (e: 'check', value: string): void;
}>();

const inputValue = ref('');

function handleCheck() {
  if (inputValue.value.trim()) {
    emit('check', inputValue.value.trim());
  }
}

// Limpiar el input cuando se muestra la respuesta
watch(() => props.showAnswer, (newValue: boolean) => {
  if (newValue) {
    // Esperamos un momento antes de limpiar el input
    setTimeout(() => {
      inputValue.value = '';
    }, 2000);
  }
});
</script> 