<script setup>
const { client } = usePrismic();
const { data: cv } = await useAsyncData("cv", () => client.getSingle("cv"));

useHead({
  title: cv.value.data.titel[0].text
    ? `Viktoria Feierabend - ${cv.value.data.titel[0].text}`
    : "Viktoria Feierabend - 404 Seite nicht gefunden",
  meta: [
    {
      name: "description",
      content: "CV",
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
    <div class="cv-text">
      <prismic-rich-text :field="cv.data.titel" />
      <prismic-rich-text :field="cv.data.text" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 133px;
}

@media (max-width: 615px) {
  .container {
    margin-top: 49px;
  }
}
</style>
