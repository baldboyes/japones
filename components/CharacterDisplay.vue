<template>
  <div class="flex items-center justify-center gap-16">

    <button
      @click="$emit('toggle')"
      class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors hidden"
      :title="gameMode === 'multiple-choice' ? 'Cambiar a modo escritura' : 'Cambiar a modo opciones'"
    >
      <svg v-if="gameMode === 'multiple-choice'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </button>

    <div class="relative">
      <Transition name="fade">
        <div
          class="text-8xl font-bold text-center transition-all duration-300"
          :class="{ 'scale-110': isShaking }"
        >
          {{ character.character }}
        </div>
      </Transition>
    </div>

    <button
      @click="playAudio"
      class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors hidden"
      title="Escuchar pronunciación"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    </button>
    
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  character: {
    character: string;
    reading: string;
    romaji: string;
    type: 'hiragana' | 'katakana';
  };
  isShaking?: boolean;
  gameMode: 'multiple-choice' | 'writing';
}

const props = withDefaults(defineProps<Props>(), {
  isShaking: false
});

defineEmits<{
  (e: 'toggle'): void;
}>();

const playAudio = () => {
  const audio = new Audio(`/sounds/${props.character.type}/${props.character.romaji}.mp3`);
  audio.volume = 0.5;
  audio.play().catch(error => {
    console.error('Error playing audio:', error);
  });
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 