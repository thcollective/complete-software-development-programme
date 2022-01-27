<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.75;
}
.container {
  max-width: 1024px;
  margin: 0 auto;
}
</style>
