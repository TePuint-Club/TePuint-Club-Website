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
      info: {
        rainnote: {
          name: "rain的博客",
          url: "https://www.rainnote.net",
          post: [
            {
              title: "Markdown转Html原理讲解",
              discription:
                "前言 别看这个命题这么高大上，其实这玩意儿实现起来莫非就两种方式：直接转换和间接转换 直接转换 这种方法特别简 [&hellip;]\n",
              date: "2020-10-06T14:05:30",
              link:
                "https://www.rainnote.net/markdown%e8%bd%achtml%e5%8e%9f%e7%90%86%e8%ae%b2%e8%a7%a3/",
            },
          ],
        },
        papernote: {
          name: "纸莫的博客",
          url: "https://papernote.cn",
          post: [
            {
                "title": "图鉴日图 - 我制作了一些方便web使用的API",
                "discription": "前言 刚创建网站时，我看着我选择的首页大图，如果一成不变，那固然会让人索然乏味，于是我打算随机的获取一张美图。 [&hellip;]\n",
                "date": "2020-09-01T22:45:22",
                "link": "https://papernote.cn/post/464/"
            },
            {
                "title": "从Batch到JAVA Script，NowChat的脱胎换骨之路！",
                "discription": "前传： 点击这里，查看首发帖。 2018-08-14 21:20 NowChat Batch Edition正 [&hellip;]\n",
                "date": "2020-02-22T12:49:28",
                "link": "https://papernote.cn/post/397/"
            },
            {
                "title": "[已结束]小站暂时停更通告（2019.9.1~2020.7.1）",
                "discription": "今年七月，我开了这么一个小站，走上了一条写博客的道路， 决定在小站发表文章，成为一名博客的实习生。但是不巧，今 [&hellip;]\n",
                "date": "2019-08-24T10:58:37",
                "link": "https://papernote.cn/post/362/"
            },
            {
                "title": "jimallen的声明/jimallen's statement",
                "discription": "内容/Content 8月3日，paper的小站加入了一个新成员jimallen。此处声明，jimallen写 [&hellip;]\n",
                "date": "2019-08-12T19:57:19",
                "link": "https://papernote.cn/post/321/"
            },
            {
                "title": "SMBchat-一个基于SMB协议的聊天软件",
                "discription": "什么是SMB协议？ 这个协议的内容十分的繁冗复杂，具有非常多样化的功能，其作用和原理我就不在这里赘述了，尽管S [&hellip;]\n",
                "date": "2019-08-04T18:28:04",
                "link": "https://papernote.cn/post/243/"
            },
            {
                "title": "安卓虚拟终端Termux",
                "discription": "换源 可以先换apt源 但是并不建议，在我使用的时候，换源会导致各种问题 而且官方源也不慢 所以可以选择跳过这 [&hellip;]\n",
                "date": "2019-08-03T13:27:44",
                "link": "https://papernote.cn/post/170/"
            },
            {
                "title": "制作S-Pixie（皮鞋）cw无线电收发报机",
                "discription": "开箱！ 收到了快递，立马将快递盒大卸八块。 准备工作 家境贫寒，真的 焊接过程 烙铁真烫手 安装一些大的组件的 [&hellip;]\n",
                "date": "2019-07-20T15:58:27",
                "link": "https://papernote.cn/post/137/"
            },
            {
                "title": "网站的一期优化已基本完成",
                "discription": "我是正经人吗？ 随着对于wordpress的深入研究，我最终选定如下主题： 基于MDUI（官方网站）的MDx主 [&hellip;]\n",
                "date": "2019-07-15T19:01:55",
                "link": "https://papernote.cn/post/52/"
            },
            {
                "title": "您好，世界！",
                "discription": "欢迎使用WordPress。这是您的第一篇文章。编辑或删除它，然后开始写作吧！ 你以为到这就结束了？ 欢迎您为 [&hellip;]\n",
                "date": "2019-07-15T09:44:33",
                "link": "https://papernote.cn/post/1/"
            }
          ],
        },
      },
    };
  },
  components: { autherBox },
  created: function () {
    var vm = this;
    post.more().then(function (i) {
      if (i.source == 3) return
      vm.info = i;
    });
    this.status.post = "更多文章";
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
