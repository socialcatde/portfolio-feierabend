<script setup>
const { client } = usePrismic();
const { data: projekte } = await useAsyncData("projekt", () =>
  client.getAllByType("projekt", {
    orderings: [
      {
        field: "my.projekt.projektname",
        direction: "asc",
      },
    ],
  })
);
const { data: projektkategorien } = await useAsyncData(
  "projektkategorien",
  () =>
    client.getAllByType("projektkategorie", {
      orderings: [
        {
          field: "my.projektkategorie.projektkategorie_name",
          direction: "asc",
        },
      ],
    })
);
const { data: werke } = await useAsyncData("werke", () =>
  client.getAllByType("werk")
);
const { toggleKreiselStyle, isClicked, isActive, currentProject } =
  useClickKreisel();
</script>

<template>
  <div class="right-nav">
    <ul>
      <li
        v-for="(projektkategorie, index) in projektkategorien"
        :key="projektkategorie.data.projektkategorie_name"
      >
        <prismic-rich-text
          :field="projektkategorie.data.projektkategorie_name"
          :class="[`index--${index}`]"
        />
        <ul class="sub-list">
          <template v-for="projekt in projekte" :key="projekt.data.projektname">
            <li
              v-if="projektkategorie.uid == projekt.data.kategorie_projekt.uid"
            >
              <a
                href="#"
                @click="toggleKreiselStyle($event, projekt.uid)"
                :class="[
                  isActive(currentProject, projekt.uid) ? 'click-color' : '',
                ]"
                class="projektnamen"
              >
                <prismic-rich-text :field="projekt.data.projektname" />
              </a>
              <ul id="sub-list-mobil">
                <template v-for="werk in werke" :key="werk.data.titel">
                  <li v-if="werk.data.zugehoriges_projekt.uid == projekt.uid">
                    <PrismicLink :field="werk">
                      <prismic-image :field="werk.data.kreisel" />
                      <prismic-rich-text :field="werk.data.titel" />
                    </PrismicLink>
                  </li>
                </template>
              </ul>
            </li>
          </template>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  text-align: left;
  padding: 8px 16px;
}

.right-nav {
  width: 315px;
}

.right-nav ul:first-child {
  padding-top: 125px;
}

ul.sub-list li,
ul.sub-list li a {
  padding: 0;
}

ul.sub-list li {
  margin: 8px 0;
}

ul.sub-list {
  margin-left: 42px;
}

.click-color {
  color: rgb(188, 55, 55);
}

#sub-list-mobil img {
  width: 27px;
}

#sub-list-mobil li a:hover {
  color: black;
}
#sub-list-mobil a {
  display: flex;
}
#sub-list-mobil a:hover {
  filter: invert(26%) sepia(59%) saturate(1588%) hue-rotate(332deg)
    brightness(105%) contrast(90%);
}

@media (max-width: 615px) {
  .right-nav ul:first-child {
    padding-top: 0;
  }

  .right-nav {
    width: 100%;
    max-width: 451px;
  }
}

@media (max-width: 1150px) {
  .right-nav {
    max-width: 461px;
    width: 80%;
  }

  a.projektnamen {
    pointer-events: none;
  }
}
</style>
