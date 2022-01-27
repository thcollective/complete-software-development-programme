<template>
  <div class="blog-feed">
    <BlogCard v-for="blog in blogs" :key="blog._id" :blog="blog" />
  </div>
</template>

<script>
import BlogCard from "./BlogCard.vue";
export default {
  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
  components: {
    BlogCard,
  },
};
</script>
<style scoped>
.blog-feed {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
