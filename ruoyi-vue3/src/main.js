import { createApp } from "vue";

import App from "./App";
import store from "./store";
import router from "./router";

import "./permission"; // permission control
import "@/assets/styles/index.scss"; // global css
import installPlugins from "./plugins"; // 注册全局方法
import installDirective from "./directive"; // 注册自定义指令
import installGlobalComponent from "@/components/index.js"; // 注册全局组件

const app = createApp(App);

app.use(router);
app.use(store);
app.use(installDirective); // 注册自定义指令
app.use(installPlugins); // 注册自定义全局插件
app.use(installGlobalComponent); // 注册自定义全局组件

app.mount("#app");
