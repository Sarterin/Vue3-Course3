import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import theme from "./theme.css"

createApp(App)
  .use(store)
  .use(router)
  .use(theme)
  .mount("#app");
