<template>
  <div class="mdui-drawer" id="drawer">
    <ul class="mdui-list">
      <!-- 固定按钮 -->
      <li class="mdui-list-item mdui-ripple" @click="navto('/')">
        <i class="mdui-list-item-icon mdui-icon material-icons">home</i>
        <div class="mdui-list-item-content">主页</div>
      </li>
      <li class="mdui-list-item mdui-ripple" @click="goPost(1)">
        <i class="mdui-list-item-icon mdui-icon material-icons">info_outline</i>
        <div class="mdui-list-item-content">关于我们</div>
      </li>
      <li class="mdui-list-item mdui-ripple" @click="navto('/more')">
        <i class="mdui-list-item-icon mdui-icon material-icons">launch</i>
        <div class="mdui-list-item-content">更多文章</div>
      </li>
      <a
        href="https://github.com/TePuint-Club"
        target="_blank"
        class="mdui-list-item mdui-ripple"
      >
        <i class="mdui-list-item-icon mdui-icon material-icons">assignment</i>
        <div class="mdui-list-item-content">我们的项目</div>
      </a>
      <!-- 动态加载内容 -->
      <div class="mdui-subheader">我们的成员</div>
      <member
        v-for="(member, p, index) in memberlist"
        :key="index"
        :member="member"
      />
      <!-- 网站信息 -->
      <div class="copyright">
        <p class="mdui-typo-caption-opacity">© 2020 TePuint Club</p>
        <p class="mdui-typo-caption-opacity">
          Powered by <a href="https://mdui.org" target="_blank">MDUI</a> &amp;
          <a href="https://vuejs.cn" target="_blank">VUE</a>
        </p>
      </div>
    </ul>
  </div>
</template>

<script>
import status from "../../main/status.js";
import member from "./member.vue";
import drawer from "../../utils/drawer.js";

export default {
  name: "drawer",
  components: {
    member,
  },
  data: function () {
    return {
      status: status,
      memberlist: [],
    };
  },
  mounted: function () {
    this.status.drawer = new mdui.Drawer("#drawer");
  },
  created: function () {
    var vm = this;
    drawer.member().then(function (i) {
      vm.memberlist = i.contains;
    });
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
    navto(nav) {
      try {
        this.$router.push(nav);
      } catch (err) {}
    },
    goPost(i) {
      this.$router.push({
        name: "post",
        params: {
          CID: i,
        },
      });
    },
  },
};
</script>

<style>
.copyright {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  position: absolute;
  bottom: 0;
}
.mdui-list > .mdui-list-item {
  border-radius: 0px 30px 30px 0px;
}
</style>
