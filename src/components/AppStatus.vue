<template>
  <span :class="['badge', className]">{{ statusName }}</span>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    type: String
  },
  setup(props) {
    const store = useStore();
    const classList = {
      active: "primary",
      done: "primary",
      cancelled: "danger",
      pending: "warning"
    };
    return {
      className: computed(() => classList[props.type]),
      statusName: computed(() => store.state.tasks.statusList[props.type])
    };
  }
};
</script>
