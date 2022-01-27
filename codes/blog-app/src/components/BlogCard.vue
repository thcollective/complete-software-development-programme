<template>
  <div class="blog-card" :style="style">
    <router-link :to="'/blogs/' + blog._id">{{ blog.title }}</router-link>
    <p>{{ parsedDate}}</p>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  setup(Props) {
    const style = computed(() => {
      return {
        backgroundImage: `url(${Props.blog.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    });

    const parsedDate = computed(() => {
      return new Date(Props.blog.createdAt).toDateString();
    });
    return {
      style,
      parsedDate
    };
  },
};
</script>

<style scoped>
.blog-card {
  margin: 10px;
  flex-shrink: 0;
  padding-left: 3px;
  position: relative;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
}

.blog-card:before {
  filter: contrast(0.7) brightness(0.7);
}
.blog-card a {
  text-decoration: none;
  color: white;
}
.blog-card p {
  margin-top: auto;
  color: white;
}
</style>
