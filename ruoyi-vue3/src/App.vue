<template>
  <el-config-provider :size="customSize" :z-index="zIndex" :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import Cookies from "js-cookie";
import useSettingsStore from "@/store/modules/settings";
import { handleThemeStyle } from "@/utils/theme";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const locale = ref(zhCn); // 中文
const zIndex = ref(2101); // 层级

const customSize = computed(() => {
  if (Cookies.get("size")) {
    return Cookies.get("size");
  } else {
    return "default";
  }
});

onMounted(() => {
  nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme);
  });
});
</script>
