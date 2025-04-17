<template>
  <div class="space-y-4">
    <!-- Barra de progreso -->
    <div class="flex items-center gap-2">
      <span class="text-sm text-gray-600 font-bold">{{ stats.correct }}</span>
      <div class="w-full bg-red-500 rounded-full h-2">
        <div 
          class="bg-green-500 h-2 rounded-full transition-all duration-300"
          :style="{ width: `${(stats.correct / stats.totalAttempts) * 100 || 0}%` }"
        ></div>
      </div>
      <span class="text-sm text-gray-600 font-bold">{{ stats.incorrect }}</span>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <!-- Columna de precisión -->
      <div class="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center">
        <div class="text-4xl font-bold text-blue-600">{{ Math.round(stats.accuracy) }}%</div>
        <div class="text-sm text-gray-500 mt-1">Precisión</div>
      </div>

      <!-- Columna de rachas e intentos -->
      <div class="space-y-4">
        <!-- Tarjeta de rachas -->
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500">Racha actual</div>
            <div class="text-lg font-medium">{{ stats.streak }}</div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="text-sm text-gray-500">Mejor racha</div>
            <div class="text-lg font-medium">{{ stats.bestStreak }}</div>
          </div>
        </div>

        <!-- Tarjeta de intentos -->
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex justify-between items-center">
            <div class="text-sm text-gray-500">Total intentos</div>
            <div class="text-lg font-medium">{{ stats.totalAttempts }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameState } from '~/composables/useGameState';

const { stats } = useGameState([]);
</script> 