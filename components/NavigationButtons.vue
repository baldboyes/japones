<template>
  <div class="fixed bottom-8 left-4 flex items-center gap-2">
    <button 
      @click="$emit('toggle')"
      class="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-lg"
      :title="gameMode === 'multiple-choice' ? 'Cambiar a modo escritura' : 'Cambiar a modo opciones'"
    >
      <!-- Icono de dedo para modo opciones -->
      <svg v-if="gameMode === 'multiple-choice'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
      <!-- Icono de teclado para modo escritura -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    </button>
    
    <NuxtLink 
      to="/hiragana" 
      class="text-2xl p-2 px-4 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-200 shadow-lg"
      :class="[
        $route.path === '/hiragana' 
          ? 'bg-blue-500 text-white' 
          : 'bg-blue-50 text-blue-700'
      ]"
    >
      あ
    </NuxtLink>
    
    <NuxtLink 
      to="/katakana" 
      class="text-2xl p-2 px-4 bg-green-50 text-green-700 rounded-full hover:bg-green-200 shadow-lg"
      :class="[
        $route.path === '/katakana' 
          ? 'bg-green-500 text-white' 
          : 'bg-green-50 text-green-700'
      ]"
    >
      ア
    </NuxtLink>
    
    <NuxtLink 
      to="/options" 
      class="p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-lg"
      :class="[
        $route.path === '/options' 
          ? 'bg-gray-500 text-white' 
          : 'bg-gray-200'
      ]"
      title="Opciones"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

defineProps<{
  gameMode: 'multiple-choice' | 'writing';
}>();

defineEmits<{
  (e: 'toggle'): void;
}>();

defineOptions({
  name: 'NavigationButtons'
});
</script> 