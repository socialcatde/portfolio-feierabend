<script setup>
const { werke } = await fetchData();
const { currentProject, isActive } = useClickKreisel();
const hover = ref(false);
</script>

<template>
  <div v-for="werk in werke" :key="werk.uid">
    <div
      :style="{
        top: werk.data.kreisel_y_position + '%',
        left: werk.data.kreisel_x_position + '%',
      }"
      class="kreisel-bild"
    >
      <PrismicLink :field="werk">
        <prismic-image
          :field="werk.data.kreisel"
          :class="[
            isActive(currentProject, werk.data.zugehoriges_projekt.uid)
              ? 'click-filter'
              : '',
            werk.data.zugehoriges_projekt.uid,
          ]"
          :style="{ width: werk.data.grosse_kreisel + 'px' }"
        />
      </PrismicLink>
      <prismic-rich-text
        class="werk-name"
        :field="werk.data.titel"
        :class="[
          isActive(currentProject, werk.data.zugehoriges_projekt.uid)
            ? 'click-color'
            : '',
          werk.data.zugehoriges_projekt.uid,
        ]"
      />
    </div>
  </div>
</template>

<style scoped>
.click-filter {
  filter: invert(26%) sepia(59%) saturate(1588%) hue-rotate(332deg)
    brightness(105%) contrast(90%);
}

.click-color {
  color: rgb(188, 55, 55);
}
.kreisel-bild {
  position: absolute;
}
.kreisel-bild .werk-name {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s linear;
}

.kreisel-bild:hover .werk-name {
  visibility: visible;
  opacity: 1;
}
</style>
