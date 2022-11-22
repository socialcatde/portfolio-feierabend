<script setup>
useHead({
  title: "Viktoria Feierabend - Seite nicht gefunden",
  meta: [
    {
      name: "description",
      content: "404 Seite nicht gefunden",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>

<template>
  <div class="container">
    <h1>Seite nicht gefunden</h1>
    <NuxtLink to="/">Zurück zur Startseite</NuxtLink>
  </div>
</template>

<style scoped>
.container {
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  font-size: 14px;
}

h1 {
  font-size: 16px;
}
</style>
