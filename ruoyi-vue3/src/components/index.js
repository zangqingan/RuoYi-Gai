// 批量自动注册全局组件，文件夹名字作为组件名
// * 匹配当前目录下的文件
// ** 匹配当前目录及其嵌套的全部子目录下的文件

// import.meta.glob加上第二个参数全部同步导入，获取所有index.vue文件
const modules = import.meta.glob("./*/index.vue", { eager: true });

// 获取所有饿了么图标
import * as ElementPlusIcons from "@element-plus/icons-vue";

// 虚拟 svg 图标应用
import "virtual:svg-icons-register";

const componentsMap = new Map(
  Object.entries(modules).map(([path, module]) => {
    return [path.split("/")[1], module];
  })
);

// 批量注册全局组件插件形式
export default {
  install: (app) => {
    // 全局注册所有自定义全局组件
    componentsMap.forEach((value, key) => {
      app.component(key, defineAsyncComponent(value));
    });
    // 全局注册所有图标
    for (const [key, component] of Object.entries(ElementPlusIcons)) {
      app.component(key, component);
    }
  },
};
