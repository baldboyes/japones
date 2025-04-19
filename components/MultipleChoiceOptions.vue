<template>
  <div class="grid gap-2" :class="gridClass">
    <div
      v-for="option in options"
      :key="`${currentCharacter.character}-${option}`"
      @click="selectOption(option)"
      class="p-4 text-lg font-medium rounded-lg transition-colors border border-gray-200"
      :class="getButtonClass(option)"
      :disabled="showAnswer"
    >
       - {{ option }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, watch, ref } from 'vue';

  const props = defineProps<{
    options: string[];
    currentCharacter: { reading: string; character: string };
    showAnswer: boolean;
    numOptions: number;
    selectedAnswer?: string;
  }>();

  const emit = defineEmits<{
    (e: 'select', option: string): void;
  }>();

  // Usar una variable reactiva para forzar la actualización
  const buttonState = ref(0);

  const gridClass = computed(() => {
    return props.numOptions === 4 ? 'grid-cols-2' : 'grid-cols-4';
  });

  // Función para obtener la clase del botón
  const getButtonClass = (option: string) => {
    // Si no se muestra la respuesta, todos los botones deben ser blancos
    if (!props.showAnswer) {
      return 'bg-white hover:bg-gray-100 text-gray-800';
    }
    
    // Si se muestra la respuesta, resaltar la correcta en verde
    if (option === props.currentCharacter.reading) {
      return 'bg-green-500 text-white border-green-600';
    }
    
    // Si se muestra la respuesta y esta es la opción seleccionada incorrectamente, mostrarla en rojo
    if (props.selectedAnswer && option === props.selectedAnswer) {
      return 'bg-red-500 text-white border-red-600';
    }
    
    // Las demás opciones en gris
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
        // Incrementar buttonState para forzar la actualización
        buttonState.value++;
      }, 2000);
    }
  });

  // Observar cambios en el carácter actual
  watch(() => props.currentCharacter.character, () => {
    // Incrementar buttonState para forzar la actualización
    buttonState.value++;
  });
</script> 