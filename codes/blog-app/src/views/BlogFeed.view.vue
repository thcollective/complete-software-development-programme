<template>
  <section class="container">
    <NavBar title="Blogs" />
    <BlogFeed v-if="blogs.length" :blogs="blogs" />
    <p v-else>Loading</p>
  </section>
</template>

<script>
// Global components
import NavBar from "@/components/NavBar.vue";
import BlogFeed from "@/components/BlogFeed.vue";

// Axios
import axios from "axios";

// Vue
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    NavBar,
    BlogFeed,
  },
  setup() {
    const loading = ref(false);
    const blogs = ref([]);
    const getBlogs = async () => {
      loading.value = true;
      try {
        const { data } = await axios.get(
          process.env.VUE_APP_API_ENDPOINT + "/blogs"
        );
        blogs.value = data;
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      getBlogs();
    });
    return {
      loading,
      blogs,
    };
  },
};
</script>
