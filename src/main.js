import { createApp } from "vue";

// Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

// Styles
import "./assets/scss/common.scss";

// Plugins
import router from "./router";
import store from "./store";

import App from "./App.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
