<template>
  <div class="header">
    <div class="header-left">
      <span class="icon icon-back"></span>
    </div>
    <div class="header-input">
      <span class="icon icon-search"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{city || '城市'}}
      <span class="icon icon-arrow-down"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String,
  },
  data() {
    return {
      msg: 'this is header',
    };
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';

  .header
    display: flex;
    line-height: 0.86rem;
    background: $bgColor;
    color: #fff;
    .header-left
      width: 0.64rem;
      float: left;
      .icon-back
        display: block;
        text-align: center;
        font-size: 0.4rem;
    .header-input
      flex: 1;
      height: 0.64rem;
      line-height: 0.64rem;
      margin-top: 0.12rem;
      margin-left: 0.2rem;
      padding-left: 0.2rem;
      background: #fff;
      border-radius: 0.1rem;
      color: #ccc;
    .header-right
      width: 1.24rem;
      float: right;
      text-align: center;
      .icon-arrow-down
        margin-left: -0.04rem;
        font-size: 0.24rem;
</style>
