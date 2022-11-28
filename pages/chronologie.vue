<script setup>
const { chronologie } = await fetchData();

useHead({
  title: chronologie.value.data.titel[0].text
    ? `Viktoria Feierabend - ${chronologie.value.data.titel[0].text}`
    : "Viktoria Feierabend - 404 Seite nicht gefunden",
  meta: [
    {
      name: "description",
      content: "Chronologie",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  bodyAttrs: {
    class: "single-page",
  },
});
</script>

<template>
  <div class="container static-pages-container">
    <prismic-rich-text class="chrono-titel" :field="chronologie.data.titel" />
    <div class="chrono-wrapper">
      <div
        v-for="(item, i) in chronologie.data.slices[0].items"
        :key="`slice-item-${i}`"
      >
        <CardChronologie :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.chrono-titel h1 {
  margin-bottom: 1em;
}
.container {
  margin-top: 133px;
  flex-direction: column;
}

.chrono-wrapper {
  display: flex;
  flex-wrap: wrap;
}
.chrono-wrapper > div {
  flex: 1 0 31%;
}

@media (max-width: 900px) {
  .chrono-wrapper > div {
    flex: 1 0 50%;
  }
}

@media (max-width: 655px) {
  .chrono-wrapper > div {
    flex: 1 0 100%;
  }
}

@media (max-width: 615px) {
  .container {
    margin-top: 49px;
  }
}
</style>
