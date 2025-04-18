<template>
  <div class="flex flex-col">
    <!-- Contenido principal -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Menú de navegación inferior -->
    <NavigationButtons />
  </div>
</template>

<script setup lang="ts">
// El layout se aplicará automáticamente a todas las páginas
</script> 