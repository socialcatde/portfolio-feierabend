<script setup>
useHead({
  link: [{ rel: "icon", type: "image/x-icon", href: "/img/favicon.png" }],
});
</script>
<template>
  <div class="page-container">
    <div class="outer-container">
      <LeftNav />
      <slot />
    </div>
  </div>
</template>
