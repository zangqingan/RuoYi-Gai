import hasRole from "./permission/hasRole";
import hasPermi from "./permission/hasPermi";
import copyText from "./common/copyText";

// vue插件形式注册全局指令
export default {
  install: (app) => {
    app.directive("hasRole", hasRole);
    app.directive("hasPermi", hasPermi);
    app.directive("copyText", copyText);
  },
};
