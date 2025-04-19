<template>
  <div class="bg-white">
    <main class="max-w-7xl mx-auto p-4 pb-20">
      <NuxtRouteAnnouncer />
      <NuxtLoadingIndicator />
      <NuxtPwaManifest />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup lang="ts">
// Aquí irá la lógica del componente
</script>

<style>
/* Estilos globales */
</style>
