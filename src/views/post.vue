<template>
  <div id="post" v-show="!status.isLoading">
    <div class="container mdui-center">
      <div class="header-nav">
        <!-- 文章头部返回按钮 -->
        <button
          class="back mdui-btn mdui-color-transparent mdui-ripple"
          @click="goBack()"
        >
          <i class="mdui-icon mdui-icon-left material-icons">arrow_back</i>返回
        </button>
      </div>
      <div class="post mdui-card mdui-shadow-11">
        <!-- 文章特色图片 -->
        <div class="mdui-card-media">
          <img :src="postdata.coverImage" />
        </div>
        <!-- 文章标题 -->
        <div class="post-header mdui-text-color-theme mdui-valign">
          <span class="mdui-typo-display-2 mdui-text-center">{{
            postdata.title
          }}</span>
        </div>
        <!-- 文章组成 -->
        <div class="mdui-card-content mdui-typo">
          <postitem
            v-for="(item, p, index) in postdata.content"
            :item="item"
            :key="index"
            class="postitem"
          ></postitem>
        </div>
        <!-- 文章末尾 -->
        <div class="mdui-divider"></div>
        <div class="mdui-card-primary mdui-color-grey-200">
          <div class="mdui-card-primary-subtitle">
            {{ postdata.auther }} 最后编辑于 {{ postdata.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import status from "../main/status.js";
import postitem from "../components/postitem.vue";
import post from "../utils/post.js";
import modules from "../main/modules.js";

export default {
  name: "post",
  components: {
    postitem,
  },
  data: function () {
    return {
      status: status,
      postdata: {},
    };
  },
  computed: {
    CID() {
      return this.$route.params.CID;
    },
  },
  watch: {
    CID: function (newQuestion, oldQuestion) {
      this.init();
    },
  },
  created: function () {
    this.init();
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    init() {
      var vm = this;
      modules.loadpost(this.CID).then(function (i) {
        vm.postdata = i;
      });
    },
  },
};
</script>

<style>
@media screen and (max-width: 600px) {
  .container > .post {
    border-radius: 0px;
  }
}

@media screen and (min-width: 600px) {
  .container > .post {
    border-radius: 8px;
  }

  .container {
    width: 96%;
    max-width: 980px;
  }
}
.post > .post-header {
  margin: 40px 0px 10px 30px;
}

.postitem {
  margin: 20px 10px 0px;
}

.header-nav {
  margin: 20px 0px 10px;
}
</style>
