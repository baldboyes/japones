<template>
  <div class="max-w-4xl mx-auto">
    
    <!-- Sistema de pestañas -->
    <div class="mb-8">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <button 
            @click="activeTab = 'hiragana'" 
            class="py-4 px-1 border-b-2 font-medium text-sm"
            :class="[
              activeTab === 'hiragana' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            Hiragana
          </button>
          <button 
            @click="activeTab = 'katakana'" 
            class="py-4 px-1 border-b-2 font-medium text-sm"
            :class="[
              activeTab === 'katakana' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            Katakana
          </button>
        </nav>
      </div>
    </div>
    
    <!-- Contenido de Hiragana -->
    <div v-if="activeTab === 'hiragana'" class="">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Tabla de Hiragana</h2>
      
      <!-- Vocales -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Vocales</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaVowels" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- K y G -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">K / G</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaKSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- S y Z -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">S / Z</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaSSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- T y D -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">T / D</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaTSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">N</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaNSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- H, B y P -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">H / B / P</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaHSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- M -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">M</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaMSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- Y -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Y</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in hiraganaYSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- R -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">R</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaRSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- W y N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">W / N</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in hiraganaWSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contenido de Katakana -->
    <div v-if="activeTab === 'katakana'" class="">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">Tabla de Katakana</h2>
      
      <!-- Vocales -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Vocales</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaVowels" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- K y G -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">K / G</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaKSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- S y Z -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">S / Z</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaSSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- T y D -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">T / D</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaTSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">N</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaNSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- H, B y P -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">H / B / P</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaHSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- M -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">M</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaMSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- Y -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Y</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in katakanaYSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- R -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">R</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaRSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- W y N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">W / N</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in katakanaWSeries" :key="char.character" class="text-center p-4 border rounded-lg">
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
    </div>


    <!-- Navegación -->
    <NavigationButtons 
      :game-mode="gameMode"
      @toggle="toggleGameMode" 
    />

  </div>
</template>

<script setup lang="ts">
  import { hiraganaData, katakanaData } from '~/data/characters';
  import { computed, ref } from 'vue';

  // Estado para la pestaña activa
  const activeTab = ref('hiragana');

  // Filtrar los caracteres de Hiragana por series
  const hiraganaVowels = computed(() => hiraganaData.filter(char => ['a', 'i', 'u', 'e', 'o'].includes(char.reading)));
  const hiraganaKSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('k') || char.reading.startsWith('g')));
  const hiraganaSSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('s') || char.reading.startsWith('z')));
  const hiraganaTSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('t') || char.reading.startsWith('d')));
  const hiraganaNSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('n')));
  const hiraganaHSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('h') || char.reading.startsWith('b') || char.reading.startsWith('p')));
  const hiraganaMSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('m')));
  const hiraganaYSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('y')));
  const hiraganaRSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('r')));
  const hiraganaWSeries = computed(() => hiraganaData.filter(char => char.reading.startsWith('w') || char.reading === 'n'));

  // Filtrar los caracteres de Katakana por series
  const katakanaVowels = computed(() => katakanaData.filter(char => ['a', 'i', 'u', 'e', 'o'].includes(char.reading)));
  const katakanaKSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('k') || char.reading.startsWith('g')));
  const katakanaSSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('s') || char.reading.startsWith('z')));
  const katakanaTSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('t') || char.reading.startsWith('d')));
  const katakanaNSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('n')));
  const katakanaHSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('h') || char.reading.startsWith('b') || char.reading.startsWith('p')));
  const katakanaMSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('m')));
  const katakanaYSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('y')));
  const katakanaRSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('r')));
  const katakanaWSeries = computed(() => katakanaData.filter(char => char.reading.startsWith('w') || char.reading === 'n'));

  definePageMeta({
    title: 'Tablas de Caracteres Japoneses'
  });






  import { useGameState } from '~/composables/useGameState';
  import NavigationButtons from '~/components/NavigationButtons.vue';

  const {
    showAnswer,
    gameMode
  } = useGameState(katakanaData);
</script> 