import storage from "@/tools/webStorage";

export default {
  namespaced: true,

  state() {
    return {
      tasksList: storage.load || [],

      statusList: {
        active: "Активен",
        pending: "Выполняется",
        done: "Завершён",
        cancelled: "Отменён"
      }
    };
  },

  mutations: {
    setTask(state, newTask) {
      state.tasksList.push(newTask);
    },

    changeStatus(state, { idTask, status }) {
      state.tasksList = state.tasksList.map(task => {
        if (task.id === idTask) task.status = status;
        return task;
      });
    }
  },

  getters: {
    activeTasksCount: state => state.tasksList
        .filter(task => task.status === "active")
        .length,

    task: state => id => state.tasksList.find(task => task.id === id)
  },
};
