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
              @click="selectGameMode('multiple-choice')"
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
              @click="selectGameMode('writing')"
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
              v-for="option in [4, 8, 16]"
              :key="option"
              @click="selectNumOptions(option)"
              class="px-4 py-2 rounded-md"
              :class="[
                numOptions === option 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              {{ option }}
            </button>
          </div>
        </div>
        
        <!-- Tiempo de espera -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Tiempo de espera</h3>
            <p class="text-sm text-gray-500">Segundos antes de pasar al siguiente carácter</p>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              v-for="time in [1, 2, 3, 5]"
              :key="time"
              @click="selectWaitTime(time)"
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
        
        <!-- Sonido -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Sonido</h3>
            <p class="text-sm text-gray-500">Reproducir sonido al mostrar la respuesta</p>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              @click="toggleSound(true)"
              class="px-4 py-2 rounded-md"
              :class="[
                soundEnabled 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Activado
            </button>
            <button 
              @click="toggleSound(false)"
              class="px-4 py-2 rounded-md"
              :class="[
                !soundEnabled 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Desactivado
            </button>
          </div>
        </div>
        
        <!-- Confeti -->
        <div class="flex justify-between gap-4 flex-col md:flex-row w-full">
          <div>
            <h3 class="text-lg font-medium text-gray-700">Confeti</h3>
            <p class="text-sm text-gray-500">Mostrar confeti al superar la mejor racha</p>
          </div>
          <div class="flex items-center space-x-2">
            <button 
              @click="toggleConfetti(true)"
              class="px-4 py-2 rounded-md"
              :class="[
                confettiEnabled 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Activado
            </button>
            <button 
              @click="toggleConfetti(false)"
              class="px-4 py-2 rounded-md"
              :class="[
                !confettiEnabled 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              ]"
            >
              Desactivado
            </button>
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
          <span class="font-medium">{{ Math.round(globalAccuracy) }}%</span>
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
    
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';

  // Estado de las opciones
  const defaultGameMode = ref<'multiple-choice' | 'writing'>('multiple-choice');
  const numOptions = ref(8);
  const waitTime = ref(1);
  const soundEnabled = ref(true);
  const confettiEnabled = ref(true);

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
      numOptions.value = options.numOptions || 8;
      waitTime.value = options.waitTime || 1;
      soundEnabled.value = options.soundEnabled !== false;
      confettiEnabled.value = options.confettiEnabled !== false;
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

  // Funciones para seleccionar opciones y guardar automáticamente
  function selectGameMode(mode: 'multiple-choice' | 'writing') {
    defaultGameMode.value = mode;
    saveOptions();
  }

  function selectNumOptions(num: number) {
    numOptions.value = num;
    saveOptions();
  }

  function selectWaitTime(time: number) {
    waitTime.value = time;
    saveOptions();
  }

  function toggleSound(enabled: boolean) {
    soundEnabled.value = enabled;
    saveOptions();
  }

  function toggleConfetti(enabled: boolean) {
    confettiEnabled.value = enabled;
    saveOptions();
  }

  // Guardar opciones
  function saveOptions() {
    const options = {
      defaultGameMode: defaultGameMode.value,
      numOptions: numOptions.value,
      waitTime: waitTime.value,
      soundEnabled: soundEnabled.value,
      confettiEnabled: confettiEnabled.value
    };
    
    localStorage.setItem('gameOptions', JSON.stringify(options));
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