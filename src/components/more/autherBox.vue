<template>
  <div>
    <div
      class="mdui-typo-display-1 mdui-text-center mdui-text-color-theme-400 autherName"
      style="max-width: 700px"
    >
      <a :href="autherInf.url" target="_blank">{{ autherInf.name }}</a>
    </div>
    <wp-box
      v-for="(data, p, index) in autherInf.post"
      :key="index"
      :articleInf="data"
    ></wp-box>
  </div>
</template>

<script>
import wpBox from "./wpBox.vue";

export default {
  name: "autherBox",
  components: { wpBox },
  props: ["autherInf"],
};
</script>

<style>
.mdui-typo-display-1 > a {
  text-decoration: none;
  color: inherit;
}

.autherName{
    margin: 30px 0px 0px 0px;
}
</style>