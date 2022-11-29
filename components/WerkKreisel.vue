<script setup>
const { werke, werktags } = await fetchData();
const { currentProject, isActive, isWerkActive } = useClickKreisel();
</script>

<template>
  <div v-for="werk in werke" :key="werk.uid">
    <div
      :style="{
        top: werk.data.kreisel_y_position + '%',
        left: werk.data.kreisel_x_position + '%',
        width: werk.data.grosse_kreisel + 'px',
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
            isWerkActive(currentProject, werk.tags) ? 'click-filter' : '',
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
          isWerkActive(currentProject, werk.tags) ? 'click-color' : '',
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

.kreisel-bild a:hover + .werk-name {
  visibility: visible;
  opacity: 1;
  position: absolute;
  left: 0;
  max-width: 200px;
}
</style>
