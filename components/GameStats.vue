<template>
  <div class="space-y-2">
    <!-- Barra de progreso con precisión y total de intentos -->
    <div class="flex items-center gap-2">
      <div class="relative flex-1 bg-red-500 rounded-full h-2">
        <div 
          class="bg-green-500 h-2 rounded-full transition-all duration-300 relative"
          :style="{ width: `${(stats.correct / stats.totalAttempts) * 100 || 0}%` }"
        >
          <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-blue-500 text-white text-sm font-bold rounded-full w-12 h-8 flex items-center justify-center">
            {{ Math.round(stats.accuracy) }}%
          </div>
        </div>
      </div>
      <div class="text-sm font-bold text-gray-600">
        {{ stats.totalAttempts }}
      </div>
    </div>

    <!-- Rachas -->
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="text-xs text-gray-500">Racha actual</div>
        <div class="text-base font-bold text-gray-800">{{ stats.streak }}</div>
      </div>
      <div class="flex items-center gap-2">
        <div class="text-xs text-gray-500">Mejor racha</div>
        <div class="text-base font-bold text-gray-800">{{ stats.bestStreak }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GameStats } from '~/composables/useGameState';
import { ref, watch } from 'vue';

const props = defineProps<{
  stats: GameStats;
}>();

const localStats = ref<GameStats>({ ...props.stats });

watch(() => props.stats, (newStats) => {
  localStats.value = { ...newStats };
}, { deep: true });
</script> 