<script setup>
const { client } = usePrismic();
const { data: impressum } = await useAsyncData("impressum", () =>
  client.getSingle("impressum")
);

useHead({
  title: impressum.value.data.titel[0].text
    ? `Viktoria Feierabend - ${impressum.value.data.titel[0].text}`
    : "Viktoria Feierabend - 404 Seite nicht gefunden",
  meta: [
    {
      name: "description",
      content: "Impressum",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>

<template>
  <div class="container static-pages-container">
    <div class="impressum-text">
      <prismic-rich-text :field="impressum.data.titel" />
      <prismic-rich-text :field="impressum.data.text" />
    </div>
  </div>
</template>

<style scoped>
.impressum-text {
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
  .impressum-text {
    padding-left: 16px;
  }

  .container {
    margin-top: 49px;
  }
}
</style>
