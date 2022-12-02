<script setup>
const route = useRoute();
const name = route.params.uid;
const { client } = usePrismic();
const { data: werk } = await useAsyncData(name, () =>
  client.getByUID("werk", name)
);
const { data: projekt } = await useAsyncData("projekt1", () =>
  client.getByUID("projekt", werk.value.data.zugehoriges_projekt.uid)
);
const { data: projektkategorie } = await useAsyncData("projektkategorie1", () =>
  client.getByUID("projektkategorie", projekt.value.data.kategorie_projekt.uid)
);
if (!werk.value) {
  throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

useHead({
  title: werk.value.data.titel[0].text
    ? `Viktoria Feierabend - ${werk.value.data.titel[0].text}`
    : "Viktoria Feierabend - 404 Seite nicht gefunden",
  meta: [
    {
      name: "description",
      content: werk.value.data.beschreibung[0].text
        ? werk.value.data.beschreibung[0].text
        : "Viktoria Feierabend - 404 Seite nicht gefunden",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
  bodyAttrs: {
    class: "single-page",
  },
});
</script>

<template>
  <div class="container outer-werk">
    <div v-if="werk.data.slices[0]" class="container-werk">
      <slider
        :werkBilder="werk.data.slices[0].items"
        :werkVideos="werk.data.slices[1].items"
      />
    </div>
    <NavWerk
      :werk="werk"
      :projekt="projekt"
      :projektkategorie="projektkategorie"
    />
  </div>
</template>

<style scoped>
.container-werk {
  flex: 1;
  max-width: 100vw;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.container {
  flex: 1;
  margin: 0;
  display: flex;
  width: 80%;
  max-height: 70vh;
  margin-top: 135px;
}

@media (max-width: 1920px) {
  .container {
    margin-top: 135px;
  }
}

@media (max-width: 1500px) {
  .container {
    flex-direction: column;
    margin-top: 135px;
    max-height: none;
  }

  .container-werk {
    flex: none;
  }
}

@media (max-width: 615px) {
  .container {
    width: 100%;
    margin-top: 49px;
  }
}
</style>
