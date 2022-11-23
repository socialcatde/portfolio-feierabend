<script setup>
const { openTheMenu, isOpen } = indexMenu();

const route = useRoute();
watch(route, () => {
  isOpen.value = false;
});
</script>

<template>
  <div class="left-nav">
    <ul>
      <li>
        <NuxtLink class="first-name" to="/">Viktoria Feierabend </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/" class="indexPoint" @click="openTheMenu">
          Index
        </NuxtLink>
      </li>
      <li class="chrono-left-link">
        <NuxtLink to="/chronologie"> Chronologie </NuxtLink>
      </li>
      <li><NuxtLink to="/kontakt"> Kontakt </NuxtLink></li>
      <li><NuxtLink to="cv"> CV </NuxtLink></li>
      <li><NuxtLink class="impressum" to="#"> Impressum </NuxtLink></li>
    </ul>
    <div class="footer">
      <NuxtLink to="/impressum"> Impressum </NuxtLink>
    </div>
    <MobileMenu />
  </div>
</template>

<style scoped>
.left-nav {
  width: 17em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 600vh;
}

.left-nav ul {
  padding-top: 80px;
}

.first-name {
  font-size: 14px;
}

.impressum {
  display: none;
}

.topnav {
  display: none;
}

@media (max-width: 900px) {
  .left-nav ul {
    padding-top: 20px;
  }

  .left-nav {
    width: 130px;
  }

  .first-name {
    font-size: 16px;
  }

  .index a.indexPoint {
    display: none;
  }
}

@media (max-width: 615px) {
  .topnav {
    display: block;
  }

  .left-nav {
    height: 100%;
    width: 100%;
  }
  .footer {
    display: none;
  }

  .impressum {
    display: block;
  }

  .left-nav ul {
    display: none;
  }
}
</style>
