<script setup>
useHead({
  title: "Viktoria Feierabend",
  meta: [
    {
      name: "description",
      content: "Portfolio Website von Viktoria Feierabend",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  bodyAttrs: {
    class: "index",
  },
});
</script>

<template>
  <div class="container index-wrapper">
    <div class="index-container">
      <WerkKreisel />
    </div>
    <Nav />
  </div>
</template>

<style scoped>
.index-container {
  flex: 1;
  position: relative;
}

.container.index-wrapper {
  max-height: 87vh;
}

@media (max-width: 900px) {
  .container.index-wrapper {
    max-height: 100%;
  }

  @media (max-width: 615px) {
    .container {
      margin-top: 41px;
    }
  }
}
</style>
