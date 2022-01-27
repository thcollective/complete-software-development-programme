<template>
  <div class="blog">
    <img :src="blog.image" alt="Blog image" width="200" height="300" />

    <div class="content">
      <div class="title">
        <h2>{{ blog.title }}</h2>
        <p>- {{ parsedDate }}</p>
      </div>
      <div class="body">
        <p>{{ blog.body }}</p>
      </div>
    </div>
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
    const parsedDate = computed(() => {
      return new Date(Props.blog.createdAt).toDateString();
    });
    return {
      parsedDate,
    };
  },
};
</script>
<style scoped>
.blog {
  display: flex;
  justify-content: space-around;
  padding: 3em 1em;
}

.content {
  display: flex;
  flex-direction: column;
}
</style>
