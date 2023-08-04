import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

// 快速实现自定义svg图标。
export default function createSvgIcon(isBuild) {
  return createSvgIconsPlugin({
    // src下实际存放svg文件的路径
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
    symbolId: "icon-[dir]-[name]",
    svgoOptions: isBuild,
  });
}
