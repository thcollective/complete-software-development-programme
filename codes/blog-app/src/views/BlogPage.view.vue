<template>
  <section class="container">
    <NavBar title="Blog Page" />
    <Blog :blog="blog" />
  </section>
</template>

<script>
// Global components
import NavBar from "@/components/NavBar.vue";
import Blog from "@/components/Blog.vue";

// Axios
import axios from "axios";

// Vue
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
export default {
  components: {
    NavBar,
    Blog,
  },
  setup() {
    const route = useRoute();
    const loading = ref(false);
    const blog = ref({});

    onMounted(() => {
      getBlogByID();
    });

    const getBlogByID = async () => {
      loading.value = true;
      try {
        const { data } = await axios.get(
          process.env.VUE_APP_API_ENDPOINT + "/blogs/" + route.params.id
        );
        blog.value = data[0];
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    return {
      route,
      loading,
      blog,
    };
  },
};
</script>