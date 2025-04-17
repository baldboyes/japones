<template>
  <div class="relative">
    <Transition
      name="fade"
      mode="out-in"
    >
      <div
        :key="character.character"
        :class="[
          'text-8xl font-bold transition-all duration-300',
          { 'scale-110': isShaking }
        ]"
      >
        {{ character.character }}
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { Character } from '~/data/characters';

defineProps<{
  character: Character;
  isShaking?: boolean;
}>();

defineOptions({
  name: 'CharacterDisplay'
});
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