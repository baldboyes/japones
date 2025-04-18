import { ref, computed, onMounted, reactive } from 'vue';
import type { Character } from '~/data/characters';
import confetti from 'canvas-confetti';

export interface GameStats {
  correct: number;
  incorrect: number;
  streak: number;
  bestStreak: number;
  totalAttempts: number;
  accuracy: number;
}

export interface GameOptions {
  defaultGameMode: 'multiple-choice' | 'writing';
  numOptions: number;
  waitTime: number;
  soundEnabled: boolean;
}

export function useGameState(characters: Character[]) {
  // Crear una copia aleatoria de los caracteres
  const shuffledCharacters = ref([...characters].sort(() => Math.random() - 0.5));
  const currentIndex = ref(0);
  const selectedAnswer = ref('');
  const isCorrect = ref(false);
  const showAnswer = ref(false);
  const gameMode = ref<'multiple-choice' | 'writing'>('multiple-choice');
  const userInput = ref('');
  const isShaking = ref(false);
  const canProceed = ref(false);
  const autoNextTimer = ref<number | null>(null);
  const waitTime = ref(2);
  const soundEnabled = ref(true);
  const numOptions = ref(8);
  
  const stats = ref<GameStats>({
    correct: 0,
    incorrect: 0,
    streak: 0,
    bestStreak: 0,
    totalAttempts: 0,
    accuracy: 0
  });
  
  // Cargar opciones guardadas
  onMounted(() => {
    const savedOptions = localStorage.getItem('gameOptions');
    if (savedOptions) {
      const options: GameOptions = JSON.parse(savedOptions);
      gameMode.value = options.defaultGameMode || 'multiple-choice';
      numOptions.value = options.numOptions || 8;
      waitTime.value = options.waitTime || 2;
      soundEnabled.value = options.soundEnabled !== false;
    }
    
    // Cargar estadísticas
    const savedStats = localStorage.getItem('gameStats');
    if (savedStats) {
      const savedGameStats = JSON.parse(savedStats);
      stats.value = {
        ...stats.value,
        ...savedGameStats
      };
    }
  });
  
  const currentCharacter = computed(() => shuffledCharacters.value[currentIndex.value]);
  
  const options = computed(() => {
    if (gameMode.value === 'writing') return [];
    
    const correctAnswer = currentCharacter.value.reading;
    const otherOptions = characters
      .filter(char => char.reading !== correctAnswer)
      .map(item => item.reading)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort(() => Math.random() - 0.5)
      .slice(0, numOptions.value - 1);
    
    return [correctAnswer, ...otherOptions].sort(() => Math.random() - 0.5);
  });
  
  function playErrorSound() {
    if (!soundEnabled.value) return;
    
    const audio = new Audio('/sounds/error.mp3');
    audio.volume = 0.3; // Volumen al 30%
    audio.play().catch(e => console.log('Error al reproducir sonido:', e));
  }
  
  function shakeCharacter() {
    isShaking.value = true;
    setTimeout(() => {
      isShaking.value = false;
    }, 500); // Duración del temblor: 500ms
  }
  
  function checkAnswer(answer: string) {
    selectedAnswer.value = answer;
    isCorrect.value = answer === currentCharacter.value.reading;
    
    if (isCorrect.value) {
      stats.value.correct++;
      stats.value.streak++;
      if (stats.value.streak > stats.value.bestStreak) {
        stats.value.bestStreak = stats.value.streak;
      }
      
      // Mostrar confeti y la respuesta correcta
      showAnswer.value = true;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Habilitar el botón de siguiente
      canProceed.value = true;
      
      // Programar el avance automático después del tiempo configurado
      if (autoNextTimer.value) {
        clearTimeout(autoNextTimer.value);
      }
      autoNextTimer.value = window.setTimeout(() => {
        nextCharacter();
      }, waitTime.value * 1000);
    } else {
      stats.value.incorrect++;
      stats.value.streak = 0;
      showAnswer.value = true;
      
      // Efectos de error
      playErrorSound();
      shakeCharacter();
      // Habilitar el botón de siguiente
      canProceed.value = true;
      
      // Programar el avance automático después del tiempo configurado
      if (autoNextTimer.value) {
        clearTimeout(autoNextTimer.value);
      }
      autoNextTimer.value = window.setTimeout(() => {
        nextCharacter();
      }, waitTime.value * 1000);
    }
    
    stats.value.totalAttempts++;
    stats.value.accuracy = (stats.value.correct / stats.value.totalAttempts) * 100;
    
    // Guardar estadísticas
    localStorage.setItem('gameStats', JSON.stringify(stats.value));
  }
  
  function checkWriting(input: string) {
    const isCorrectAnswer = input.toLowerCase() === currentCharacter.value.reading.toLowerCase();
    selectedAnswer.value = input;
    isCorrect.value = isCorrectAnswer;
    
    if (isCorrectAnswer) {
      stats.value.correct++;
      stats.value.streak++;
      if (stats.value.streak > stats.value.bestStreak) {
        stats.value.bestStreak = stats.value.streak;
      }
      
      // Mostrar confeti y la respuesta correcta
      showAnswer.value = true;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      // Habilitar el botón de siguiente
      canProceed.value = true;
      
      // Programar el avance automático después del tiempo configurado
      if (autoNextTimer.value) {
        clearTimeout(autoNextTimer.value);
      }
      autoNextTimer.value = window.setTimeout(() => {
        nextCharacter();
      }, waitTime.value * 1000);
    } else {
      stats.value.incorrect++;
      stats.value.streak = 0;
      showAnswer.value = true;
      
      // Efectos de error
      playErrorSound();
      shakeCharacter();
      // Habilitar el botón de siguiente
      canProceed.value = true;
      
      // Programar el avance automático después del tiempo configurado
      if (autoNextTimer.value) {
        clearTimeout(autoNextTimer.value);
      }
      autoNextTimer.value = window.setTimeout(() => {
        nextCharacter();
      }, waitTime.value * 1000);
    }
    
    stats.value.totalAttempts++;
    stats.value.accuracy = (stats.value.correct / stats.value.totalAttempts) * 100;
    
    // Guardar estadísticas
    localStorage.setItem('gameStats', JSON.stringify(stats.value));
    
    return isCorrectAnswer;
  }
  
  function nextCharacter() {
    if (autoNextTimer.value) {
      clearTimeout(autoNextTimer.value);
      autoNextTimer.value = null;
    }
    currentIndex.value = (currentIndex.value + 1) % shuffledCharacters.value.length;
    selectedAnswer.value = '';
    isCorrect.value = false;
    showAnswer.value = false;
    canProceed.value = false;
  }
  
  function resetStats() {
    stats.value = {
      correct: 0,
      incorrect: 0,
      streak: 0,
      bestStreak: 0,
      totalAttempts: 0,
      accuracy: 0
    };
    localStorage.removeItem('gameStats');
  }
  
  function toggleGameMode() {
    gameMode.value = gameMode.value === 'multiple-choice' ? 'writing' : 'multiple-choice';
    resetStats();
  }
  
  function shuffleCharacters() {
    shuffledCharacters.value = [...characters].sort(() => Math.random() - 0.5);
    currentIndex.value = 0;
    canProceed.value = false;
  }
  
  return {
    currentIndex,
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
    waitTime,
    soundEnabled,
    checkAnswer,
    checkWriting,
    nextCharacter,
    resetStats,
    toggleGameMode,
    shuffleCharacters,
    numOptions
  };
} 