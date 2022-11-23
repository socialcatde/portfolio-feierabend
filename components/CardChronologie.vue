<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="card-container">
    <prismic-link :field="item.projektlink">
      <prismic-rich-text :field="item.titel" />
    </prismic-link>
    <prismic-rich-text :field="item.beschreibung" />
    <span class="date">{{ item.entsehungszeitpunkt }}</span>
  </div>
</template>

<style scoped>
.card-container {
  flex: 1;
  height: 150px;
  display: flex;
  flex-direction: column;
}
</style>
