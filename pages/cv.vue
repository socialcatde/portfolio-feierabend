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
.cv-text {
  max-width: 787px;
  margin-left: 16px;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 0;
}

.container {
  margin-top: 133px;
}

@media (max-width: 615px) {
  .cv-text {
    padding-left: 16px;
  }

  .container {
    margin-top: 49px;
  }
}
</style>
