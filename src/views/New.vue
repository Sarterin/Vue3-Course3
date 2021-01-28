<template>
  <form class="card" @submit.prevent="setTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="disabled">Создать</button>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import storage from "@/tools/webStorage";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const title = ref("");
    const date = ref("");
    const description = ref("");
    const disabled = computed(() =>
      [title, date, description].find(field => !field.value)
    );
    function setTask() {
      const newTask = {
        id: String(Date.now()),
        title: title.value,
        date: new Date(date.value).toLocaleDateString(),
        description: description.value,
        status:
          +new Date(date.value) - +new Date(Date.now() - 86400000) < 0
            ? "cancelled"
            : "active"
      };
      store.commit("tasks/setTask", newTask);
      storage.save(store.state.tasks.tasksList);
      router.push("/");
    }
    return {
      title,
      date,
      description,
      setTask,
      disabled
    };
  }
};
</script>
