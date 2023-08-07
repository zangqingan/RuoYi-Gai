// 常用方法声明为全局
import { download } from "@/utils/request";
import {
  parseTime,
  resetForm,
  addDateRange,
  handleTree,
  selectDictLabel,
  selectDictLabels,
} from "@/utils/ruoyi";

export default {
  install: (app) => {
    app.provide("download", download);
    app.provide("parseTime", parseTime);
    app.provide("resetForm", resetForm);
    app.provide("addDateRange", addDateRange);
    app.provide("handleTree", handleTree);
    app.provide("selectDictLabel", selectDictLabel);
  },
};
