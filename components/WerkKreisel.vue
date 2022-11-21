<script setup>
const { client } = usePrismic();
const { data: werke } = await useAsyncData("werk", () =>
  client.getAllByType("werk")
);
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
  filter: invert(13%) sepia(16%) saturate(6030%) hue-rotate(333deg)
    brightness(97%) contrast(87%);
}

.click-color {
  color: rgb(94, 36, 36);
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
