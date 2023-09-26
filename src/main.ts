// import "bootstrap/dist/css/bootstrap.min.css";
// import "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap";
import "@/assets/styles/index.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";


const app = createApp(App);
app.use(store, key);
app.use(router);

app.mount("#app");
