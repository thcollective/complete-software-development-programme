import { createRouter, createWebHistory } from "vue-router";
import BlogFeedView from "../views/BlogFeed.view.vue";
import BlogCreateView from "../views/BlogCreate.view.vue";
import BlogPageView from "../views/BlogPage.view.vue";

const routes = [
  {
    path: "/",
    name: "BlogFeed",
    component: BlogFeedView,
  },
  {
    path: "/create",
    name: "BlogCreate",
    component: BlogCreateView,
  },
  {
    path: "/blogs/:id",
    name: "Blog",
    component: BlogPageView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
