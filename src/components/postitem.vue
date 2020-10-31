<template>
  <div v-if="item.type === 'title'">
    <!-- 标题 -->
    <span class="mdui-text-color-theme mdui-typo-headline">{{
      item.data
    }}</span>
  </div>
  <div v-else-if="item.type === 'prag'">
    <!-- 段落 -->
    <p>{{ item.data }}</p>
  </div>
  <div v-else-if="item.type === 'image'">
    <!-- 图片 -->
    <img class="mdui-img-fluid mdui-img-rounded" v-lazy="item.data" />
  </div>
  <div v-else-if="item.type === 'divider'">
    <!-- 分割线 -->
    <div class="mdui-divider"></div>
  </div>
  <div v-else-if="item.type === 'github'">
    <!-- GitHub选项卡 -->
    <github :data="item.data"></github>
  </div>
  <div v-else-if="item.type === 'html'" v-html="item.data" />
</template>

<script>
import github from "./github.vue";

export default {
  name: "postitem",
  props: ["item"],
  data: function () {
    return {};
  },
  components: {
    github,
  },
};
</script>

<style>
</style>
