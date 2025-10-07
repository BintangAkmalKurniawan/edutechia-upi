import { createMemoryHistory, createRouter } from "vue-router";
import Welcome from "../view/Welcome.vue";
import Creator from "../view/Creator.vue";
import Content from "../view/Content.vue";
import Diskusi from "../view/Diskusi.vue";
import Kuis from "../view/Kuis.vue";

const routes = [
  { path: "/", component: Welcome },
  { path: "/creator", component: Creator },
  { path: "/content/:id", name: "content-detail", component: Content, props: true },
  { path: "/content/:id/diskusi", name: "DiskusiMateri", component: Diskusi, props: true },
  { path: "/content/:id/kuis", name: "KuisMateri", component: Kuis, props: true },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
