import autoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function createAutoImport() {
  return autoImport({
    imports: ["vue", "vue-router", "pinia"],
    resolvers: [
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      ElementPlusResolver(),
    ],
    dts: false,
  });
}
