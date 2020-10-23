<template>
  <div id="home" class="mdui-container mdui-center">
    <auther-box
      v-for="(data, p, index) in info"
      :key="index"
      :autherInf="data"
    ></auther-box>
    <div v-show="!status.isLoading">
      <span class="mdui-card-primary-subtitle mdui-text-center"
        >已加载完所有数据</span
      >
    </div>
  </div>
</template>

<script>
import status from "../main/status.js";
import post from "../utils/post.js";

import autherBox from "../components/more/autherBox";

export default {
  name: "home",
  data: function () {
    return {
      status: status,
      postlist: [],
      info: {}
    }
  },
  components: { autherBox },
  created: function () {
    var vm = this;
    post.more().then(function (i) {
      vm.info = i;
    });
    this.status.post.title = "更多文章";
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
