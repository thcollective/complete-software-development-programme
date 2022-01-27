<template>
  <section class="container">
    <NavBar title="Create Blog" />
    <div>
      <label for="title"> Title </label>
      <input id="title" v-model="title" type="text" placeholder="Title" />
    </div>

    <div>
      <label for="body"> Body </label>
      <textarea v-model="body" id="body" cols="30" rows="10"></textarea>
    </div>
    <button @click="submit">Submit</button>
  </section>
</template>

<script>
// Global components
import NavBar from "@/components/NavBar.vue";

// Axios
import axios from "axios";

// Vue
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const title = ref("");
    const body = ref("");
    const image = ref("");
    const submit = async () => {
      if (!title.value) {
        alert("Please fill title.");
        return;
      }
      if (!body.value) {
        alert("Please fill body.");
        return;
      }
      image.value = "https://picsum.photos/200/300";

      loading.value = true;
      try {
        const { data } = await axios.post(
          process.env.VUE_APP_API_ENDPOINT + "/blogs/create",
          {
            title: title.value,
            body: body.value,
            image: image.value,
          }
        );
        router.push("/");
        console.log(data);
      } catch (err) {
        console.error(err);
      } finally {
        loading.value = false;
      }
    };
    return {
      title,
      body,
      image,
      loading,
      submit,
      router,
    };
  },
};
</script>
