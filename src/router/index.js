import { createRouter, createWebHistory } from "vue-router";
import Tasks from "@/views/Tasks.vue";
import New from "@/views/New.vue";
import Task from "@/views/Task.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/new",
    name: "New",
    component: New
  },
  {
    path: "/task/:id",
    name: "Task",
    component: Task
  },
  {
    path: "/:notFound(.*)",
    name: "404",
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});

export default router;
