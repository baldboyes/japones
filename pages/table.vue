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
      <!-- Vocales -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Vocales</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaVowels" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- K y G -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">K / G</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaKSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- S y Z -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">S / Z</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaSSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- T y D -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">T / D</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaTSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">N</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaNSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- H, B y P -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">H / B / P</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaHSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      
      <!-- M -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">M</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaMSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- Y -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Y</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in hiraganaYSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- R -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">R</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in hiraganaRSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- W y N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">W / N</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in hiraganaWSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Contenido de Katakana -->
    <div v-if="activeTab === 'katakana'" class="">
      
      <!-- Vocales -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Vocales</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaVowels" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- K y G -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">K / G</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaKSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- S y Z -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">S / Z</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaSSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- T y D -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">T / D</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaTSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">N</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaNSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- H, B y P -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">H / B / P</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaHSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- M -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">M</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaMSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- Y -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Y</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in katakanaYSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- R -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">R</h3>
        <div class="grid grid-cols-5 gap-4">
          <div v-for="char in katakanaRSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
      
      <!-- W y N -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">W / N</h3>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="char in katakanaWSeries" :key="char.character" class="text-center p-4 border rounded-lg relative" @click="playAudio(char)">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 absolute top-1 right-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <div class="text-3xl mb-2">{{ char.character }}</div>
            <div class="text-gray-600">{{ char.reading }}</div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { hiraganaData, katakanaData } from '~/data/characters';
import { computed, ref } from 'vue';

// Estado para la pestaña activa
const activeTab = ref('hiragana');

// Función para reproducir el audio
function playAudio(char: { type: string; romaji: string }) {
  const audio = new Audio(`/sounds/${char.type}/${char.romaji}.mp3`);
  audio.volume = 0.5;
  audio.play().catch(e => console.log('Error al reproducir sonido:', e));
}

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
</script> 