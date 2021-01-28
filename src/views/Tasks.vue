<template>
  <template v-if="tasksList.length">
    <h3 class="text-white">Всего активных задач: {{ activeTasksCount }}</h3>
    <div class="card" v-for="task in tasksList" :key="task.id">
      <h2 class="card-title">
        {{ task.title }}
        <app-status :type="task.status"></app-status>
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="openTask(task.id)">Посмотреть</button>
    </div>
  </template>
  <h1 v-else class="text-white center">Задач пока нет</h1>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AppStatus from "@/components/AppStatus.vue";
export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const router = useRouter();
    function openTask(id) {
      router.push(`/task/${id}`);
    }
    return {
      tasksList: store.state.tasks.tasksList,
      activeTasksCount: store.getters["tasks/activeTasksCount"],
      openTask
    };
  }
};
</script>
