<template>
  <div
    class="card mdui-card mdui-center mdui-hoverable"
    style="border-radius: 16px"
  >
    <div class="card-title mdui-typo-display-1 mdui-text-color-theme">
      <a :href="articleInf.link" target="_blank">{{ articleInf.title }}</a>
    </div>
    <div class="mdui-card-content">
      {{ articleInf.discription }}
    </div>
    <div class="mdui-divider"></div>
    <div class="card-info mdui-card-primary-subtitle mdui-float-left">
      日期:{{ articleInf.date }}
    </div>
    <button
      class="mdui-float-right card-btn mdui-text-color-theme-accent mdui-btn mdui-ripple mdui-text-center"
    >
      <a :href="articleInf.link" target="_blank"> 去浏览 </a>
    </button>
  </div>
</template>

<script>
export default {
  name: "wpBox",
  props: ["articleInf"],
};
</script>

<style>
.mdui-typo-display-1 > a {
  text-decoration: none;
  color: inherit;
}

.card {
  margin: 20px;
  max-width: 700px;
}

.card > .mdui-card-content {
  font-size: 20px;
}

.card > .card-btn {
  margin: 8px 12px 8px 0px;
}

.card-btn > a {
  text-decoration: none;
  color: inherit;
}

.card > .card-info {
  margin: 12px 15px;
}

.card > .card-title {
  margin: 18px 0px 0px 18px;
}
</style>