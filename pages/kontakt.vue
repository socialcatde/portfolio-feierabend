<script setup>
const { client } = usePrismic();
const { data: kontakt } = await useAsyncData("kontakt", () =>
  client.getSingle("kontakt")
);

useHead({
  title: kontakt.value.data.titel[0].text
    ? `Viktoria Feierabend - ${kontakt.value.data.titel[0].text}`
    : "Viktoria Feierabend - 404 Seite nicht gefunden",
  meta: [
    {
      name: "description",
      content: "Kontakt",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>

<template>
  <div class="container static-pages-container">
    <div class="kontakt-text">
      <prismic-rich-text :field="kontakt.data.titel" />
      <prismic-rich-text :field="kontakt.data.text" />
    </div>
  </div>
</template>

<style scoped>
.kontakt-text {
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
  .kontakt-text {
    padding-left: 16px;
  }

  .container {
    margin-top: 49px;
  }
}
</style>
