<template>
  <div id="home" class="mdui-container">
    <post-box
      v-for="(postinf, p, index) in postlist"
      :postinf="postinf"
      :key="index"
    ></post-box>
    <div v-show="page <= maxpage && !status.isLoading">
      <button
        class="mdui-btn mdui-color-grey-400 mdui-text-color-white mdui-ripple mdui-center"
        style="width: 200px; border-radius: 16px"
        v-show="page <= maxpage"
        @click="loadpage()"
      >
        加载更多
      </button>
    </div>
    <div v-show="page > maxpage && !status.isLoading">
      <span class="mdui-card-primary-subtitle mdui-text-center"
        >已加载完所有数据</span
      >
    </div>
  </div>
</template>

<script>
import status from "../main/status.js";
import postBox from "../components/postBox.vue";
import post from "../utils/post.js";

export default {
  name: "home",
  data: function () {
    return {
      status: status,
      postlist: [],
      page: 1,
      maxpage: 1,
    };
  },
  components: {
    postBox,
  },
  created: function () {
    this.loadpage();
    this.status.post.title = "主页";
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    loadpage() {
      if (this.page > this.maxpage) return;
      var vm = this;
      post.list(this.page).then(function (i) {
        vm.postlist = vm.postlist.concat(i.content);
        vm.maxpage = i.maxpage;
        vm.page += 1;
      });
    },
  },
};
</script>

<style>
</style>
