<template>
  <div class="max-w-4xl mx-auto ">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Opciones</h1>
    
    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Configuración de juego</h2>
      
      <div class="space-y-12">
        <!-- Modo de juego por defecto -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Modo de juego por defecto</h3>
            <p class="text-sm text-gray-500">Selecciona el modo de juego que se cargará al iniciar</p>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              @click="defaultGameMode = 'multiple-choice'"
              class="px-4 py-2 rounded-md"
              :class="[
                defaultGameMode === 'multiple-choice' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Opciones múltiples
            </button>
            <button 
              @click="defaultGameMode = 'writing'"
              class="px-4 py-2 rounded-md"
              :class="[
                defaultGameMode === 'writing' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Escritura
            </button>
          </div>
        </div>
        
        <!-- Número de opciones -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Número de opciones</h3>
            <p class="text-sm text-gray-500">Cantidad de opciones en el modo de selección múltiple</p>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              v-for="num in [4, 8, 12, 16]"
              :key="num"
              @click="numOptions = num"
              class="px-4 py-2 rounded-md"
              :class="[
                numOptions === num 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              {{ num }}
            </button>
          </div>
        </div>
        
        <!-- Tiempo de espera -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Tiempo de espera</h3>
            <p class="text-sm text-gray-500">Tiempo en segundos antes de avanzar automáticamente</p>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              v-for="time in [1, 2, 3, 5]"
              :key="time"
              @click="waitTime = time"
              class="px-4 py-2 rounded-md"
              :class="[
                waitTime === time 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              {{ time }}s
            </button>
          </div>
        </div>
        
        <!-- Sonidos -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Sonidos</h3>
            <p class="text-sm text-gray-500">Activar o desactivar efectos de sonido</p>
          </div>
          <div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                v-model="soundEnabled" 
                class="sr-only peer"
              >
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Estadísticas</h2>
      
      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-gray-700">Total de intentos</span>
          <span class="font-medium">{{ totalAttempts }}</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-700">Precisión global</span>
          <span class="font-medium">{{ globalAccuracy }}%</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="text-gray-700">Mejor racha</span>
          <span class="font-medium">{{ bestStreak }}</span>
        </div>
        
        <div class="pt-4">
          <button 
            @click="resetStats"
            class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Reiniciar estadísticas
          </button>
        </div>
      </div>
    </div>
    
    <div class="flex justify-between">
      <NuxtLink 
        to="/hiragana" 
        class="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Volver a Hiragana
      </NuxtLink>
      
      <button 
        @click="saveOptions"
        class="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Guardar cambios
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Estado de las opciones
const defaultGameMode = ref<'multiple-choice' | 'writing'>('multiple-choice');
const numOptions = ref(16);
const waitTime = ref(2);
const soundEnabled = ref(true);

// Estadísticas
const totalAttempts = ref(0);
const globalAccuracy = ref(0);
const bestStreak = ref(0);

// Cargar opciones guardadas
onMounted(() => {
  const savedOptions = localStorage.getItem('gameOptions');
  if (savedOptions) {
    const options = JSON.parse(savedOptions);
    defaultGameMode.value = options.defaultGameMode || 'multiple-choice';
    numOptions.value = options.numOptions || 16;
    waitTime.value = options.waitTime || 2;
    soundEnabled.value = options.soundEnabled !== false;
  }
  
  // Cargar estadísticas
  const savedStats = localStorage.getItem('gameStats');
  if (savedStats) {
    const stats = JSON.parse(savedStats);
    totalAttempts.value = stats.totalAttempts || 0;
    globalAccuracy.value = stats.accuracy || 0;
    bestStreak.value = stats.bestStreak || 0;
  }
});

// Guardar opciones
function saveOptions() {
  const options = {
    defaultGameMode: defaultGameMode.value,
    numOptions: numOptions.value,
    waitTime: waitTime.value,
    soundEnabled: soundEnabled.value
  };
  
  localStorage.setItem('gameOptions', JSON.stringify(options));
  
  // Mostrar mensaje de éxito
  alert('Opciones guardadas correctamente');
}

// Reiniciar estadísticas
function resetStats() {
  if (confirm('¿Estás seguro de que quieres reiniciar todas las estadísticas? Esta acción no se puede deshacer.')) {
    localStorage.removeItem('gameStats');
    totalAttempts.value = 0;
    globalAccuracy.value = 0;
    bestStreak.value = 0;
    alert('Estadísticas reiniciadas correctamente');
  }
}

definePageMeta({
  title: 'Opciones'
});
</script> 