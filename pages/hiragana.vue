<template>
  <div class="max-w-4xl mx-auto">
    <!-- Estadísticas -->
    <GameStats :stats="stats" />
    
    <!-- Carácter actual -->
    <div class="flex flex-col items-center gap-8 py-12">
      <div class="text-center">
        <CharacterDisplay
          :character="currentCharacter"
          :is-shaking="isShaking"
        />
        <p class="text-2xl mt-4">{{ showAnswer ? currentCharacter.reading : '&nbsp;' }}</p>
      </div>
    </div>
    
    <!-- Opciones múltiples -->
    <MultipleChoiceOptions
      v-if="gameMode === 'multiple-choice'"
      :options="options"
      :selected-answer="selectedAnswer"
      :is-correct="isCorrect"
      :show-answer="showAnswer"
      @select="checkAnswer"
    />
    
    <!-- Modo escritura -->
    <WritingMode
      v-else
      :show-answer="showAnswer"
      :is-correct="isCorrect"
      @check="checkWriting"
    />
    
    <!-- Botón siguiente -->
    <NextButton
      :can-proceed="canProceed"
      @next="nextCharacter"
    />
    
    <!-- Navegación -->
    <NavigationButtons 
      :game-mode="gameMode"
      @toggle="toggleGameMode" 
    />
  </div>
</template>

<script setup lang="ts">
import { hiraganaData } from '~/data/characters';
import { useGameState } from '~/composables/useGameState';
import CharacterDisplay from '~/components/CharacterDisplay.vue';
import GameStats from '~/components/GameStats.vue';
import MultipleChoiceOptions from '~/components/MultipleChoiceOptions.vue';
import WritingMode from '~/components/WritingMode.vue';
import NextButton from '~/components/NextButton.vue';
import NavigationButtons from '~/components/NavigationButtons.vue';

const {
  currentCharacter,
  selectedAnswer,
  isCorrect,
  showAnswer,
  gameMode,
  userInput,
  stats,
  options,
  isShaking,
  canProceed,
  checkAnswer,
  checkWriting,
  nextCharacter,
  toggleGameMode
} = useGameState(hiraganaData);

definePageMeta({
  title: 'Práctica de Hiragana'
});
</script> 