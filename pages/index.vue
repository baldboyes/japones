<template>
  <div>
    <ClientOnly>
      <NuxtPage />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
// Redirigir a la página de Hiragana
const router = useRouter();
onMounted(() => {
  router.push('/hiragana');
});

definePageMeta({
  title: 'Práctica de Hiragana'
});
</script> 