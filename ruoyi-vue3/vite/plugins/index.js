import vue from "@vitejs/plugin-vue";

import createAutoImport from "./auto-import";
import createAutoComponents from "./auto-components";
import createSvgIcon from "./svg-icon";
import createCompression from "./compression";
import createSetupExtend from "./setup-extend";

export default function createVitePlugins(viteEnv, isBuild = false) {
  const vitePlugins = [vue()];
  vitePlugins.push(createAutoImport());
  vitePlugins.push(createAutoComponents());
  vitePlugins.push(createSetupExtend());
  vitePlugins.push(createSvgIcon(isBuild));
  isBuild && vitePlugins.push(...createCompression(viteEnv));
  return vitePlugins;
}
