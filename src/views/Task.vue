<template>
  <div v-if="task" class="card">
    <h2>{{ task.title }}</h2>
    <p>
      <strong>Статус</strong>: <app-status :type="task.status"></app-status>
    </p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="changeStatus('done')">
        Завершить
      </button>
      <button class="btn danger" @click="changeStatus('cancelled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ id }}</strong> нет.
  </h3>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AppStatus from "@/components/AppStatus.vue";
export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const route = useRoute();
    const { id } = route.params;
    function changeStatus(status) {
      store.commit("tasks/changeStatus", { idTask: id, status });
    }
    return {
      id,
      task: computed(() => store.getters["tasks/task"](id)),
      status: computed(() => store.getters["tasks/task"](id).status),
      changeStatus
    };
  }
};
</script>
