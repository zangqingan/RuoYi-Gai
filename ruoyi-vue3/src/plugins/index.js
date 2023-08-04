// import.meta.glob加上第二个参数全部导入
const modules = import.meta.glob("./*.js", { eager: true });

const pluginsMap = new Map(
  Object.entries(modules).map(([path, module]) => {
    return [path.split("/").pop().split(".").shift(), module.default];
  })
);

// vue插件形式全局注入对象
export default {
  install: (app) => {
    pluginsMap.forEach((value, key) => {
      // app.provide('$modal',modal)
      app.provide(`$${key}`, value);
    });
  },
};
