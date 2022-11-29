<script setup>
const props = defineProps({
  werk: Object,
  projektkategorie: Object,
  projekt: Object,
});
</script>

<template>
  <div class="right-nav">
    <ul>
      <li v-if="projektkategorie">
        <prismic-rich-text
          :field="projektkategorie.data.projektkategorie_name"
        />
        <ul class="sub-list">
          <li v-if="projekt">
            <prismic-rich-text :field="projekt.data.projektname" />
          </li>
        </ul>
      </li>
    </ul>

    <div class="werk-infos">
      <prismic-rich-text v-if="werk.data.titel" :field="werk.data.titel" />
      <prismic-rich-text
        v-if="werk.data.beschreibung"
        :field="werk.data.beschreibung"
      />
    </div>
  </div>
</template>

<style scoped>
li {
  text-align: left;
  padding: 8px 16px;
}

.right-nav {
  width: 315px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

@media (max-width: 1500px) {
  .right-nav {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 60px;
  }

  .right-nav ul {
    width: auto;
  }

  ul.sub-list {
    margin-left: 0px;
  }

  li,
  p,
  h1,
  .werk-infos p,
  .werk-infos h1 {
    margin: 0px;
    padding: 0;
  }

  .werk-infos {
    text-align: right;
    padding-left: 5vw;
    padding-right: 16px;
  }
  .right-nav > ul {
    padding-left: 16px;
  }
}

@media (max-width: 615px) {
  .right-nav {
    width: auto;
    padding: 0 16px;
  }

  .right-nav > ul {
    padding-left: 0;
  }
  .werk-infos {
    padding-right: 0;
  }
}
</style>
