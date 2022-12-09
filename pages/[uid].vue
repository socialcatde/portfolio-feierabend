<script setup>
const route = useRoute();
const name = route.params.uid;
const { client } = usePrismic();
const { data: werk } = await useAsyncData(name, () =>
  client.getByUID("werk", name)
);

const { data: projekt } = await useAsyncData(name + "projekt", () =>
  client.getByUID("projekt", werk.value.data.zugehoriges_projekt.uid)
);
const { data: projektkategorie } = await useAsyncData(
  name + "projektkategorie",
  () =>
    client.getByUID(
      "projektkategorie",
      projekt.value.data.kategorie_projekt.uid
    )
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

const videoArr = ref([]);
const bilderArr = ref([]);
const medien = werk.value.data.slices;
onMounted(() => {
  medien.forEach(function (arrayItem) {
    if (arrayItem.slice_type == "video_hochladen") {
      videoArr.value = arrayItem.items;
    } else if (arrayItem.slice_type == "image_uploader") {
      bilderArr.value = arrayItem.items;
    }
  });
});
</script>

<template>
  <div class="container outer-werk">
    <div class="container-werk">
      <slider :werkBilder="bilderArr" :werkVideos="videoArr" />
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
