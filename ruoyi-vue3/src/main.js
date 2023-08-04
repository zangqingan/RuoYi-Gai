import { createApp } from "vue";

import "@/assets/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

// 注册全局方法
import installPlugins from "./plugins";
// 注册自定义指令
import installDirective from "./directive";
// 注册全局组件
import installGlobalComponent from "@/components/index.js";



import "./permission"; // permission control
const app = createApp(App);
// 全局方法挂载
import { useDict } from "@/utils/dict";
import { download } from "@/utils/request";
import {
  parseTime,
  resetForm,
  addDateRange,
  handleTree,
  selectDictLabel,
  selectDictLabels,
} from "@/utils/ruoyi";
app.config.globalProperties.useDict = useDict;
app.config.globalProperties.download = download;
app.config.globalProperties.parseTime = parseTime;
app.config.globalProperties.resetForm = resetForm;
app.config.globalProperties.handleTree = handleTree;
app.config.globalProperties.addDateRange = addDateRange;
app.config.globalProperties.selectDictLabel = selectDictLabel;
app.config.globalProperties.selectDictLabels = selectDictLabels;

app.use(router);
app.use(store);
app.use(installDirective); // 注册自定义指令
app.use(installPlugins); // 注册自定义全局插件
app.use(installGlobalComponent); // 注册自定义全局组件

app.mount("#app");
