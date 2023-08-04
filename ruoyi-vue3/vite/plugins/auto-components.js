import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function createAutoComponents() {
  return Components({
    resolvers: [
      // 自动导入 Element Plus 组件
      ElementPlusResolver(),
    ],
  });
}
