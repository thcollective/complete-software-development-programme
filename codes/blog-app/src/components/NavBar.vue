<template>
  <div class="nav">
    <h2>{{ title }}</h2>
    <!-- Only enable this on Blog Feed Page -->
    <router-link v-if="$route.name === 'BlogFeed'" to="blogs/create"
      >Create Blog</router-link
    >
    <!-- Only enable this on Blog Page & Create Blog Page -->
    <router-link
      v-if="$route.name === 'Blog' || $route.name === 'BlogCreate'"
      to="/"
      >Back to blogs</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid grey;
}

.nav a {
  text-decoration: none;
  color: black;
}
</style>
