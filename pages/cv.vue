<script setup>
const { client } = usePrismic();
const { data: cv } = await useAsyncData("cv", () => client.getSingle("cv"));
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
