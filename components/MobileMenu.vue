<script setup>
const isOpen = ref(false);
const openTheMenu = () => {
  isOpen.value = !isOpen.value;
};

const route = useRoute();
watch(route, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="topnav">
    <NuxtLink to="/">Viktoria Feierabend</NuxtLink>
    <div class="myLinks" :class="{ openMenuLinks: isOpen }">
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/kontakt">Kontakt</NuxtLink>
      <NuxtLink to="/cv">CV</NuxtLink>
      <NuxtLink to="/impressum">Impressum</NuxtLink>
    </div>
    <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
    <a
      href="javascript:void(0);"
      class="icon"
      @click="openTheMenu()"
      :class="{ openMenu: isOpen }"
    >
      <i class="fa fa-bars"></i>
    </a>
  </div>
</template>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: white;
  position: relative;
  padding: 28px 16px 8px 16px;
}

.topnav .myLinks {
  transition: max-height 0.4s ease-out;
  max-height: 0;
  overflow: hidden;
}

.openMenu {
  transform: rotate(90deg);
}
.openMenuLinks {
  max-height: 155px !important;
  transition: max-height 0.4s ease-out !important;
}

.topnav a {
  color: black;
  padding: 8px 0px;
  text-decoration: none;
  font-size: 16px;
  display: block;
  width: 205px;
}

.topnav a.icon {
  background: url("/img/arrow-nav.svg");
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  position: absolute;
  right: 11px;
  top: 34px;
  padding: 16px 16px;
  transition: transform 0.2s;
  width: auto;
}

.active {
  background-color: white;
  color: white;
}

.myLinks {
  padding-top: 8px;
}
</style>
