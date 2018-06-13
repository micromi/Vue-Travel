<template>
  <div class="weekend-trip">
    <div class="weekend-title">
      <span class="title">周末去哪儿</span>
    </div>
    <ul class="product-list">
      <li class="product-item" v-for="item of list" :key="item.id">
        <div class="product-imgcon">
          <img class="product-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="product-info">
          <div class="product-title">{{item.title}}</div>
          <div class="product-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';

  .weekend-trip
    .weekend-title
      height: .8rem;
      padding-left: .26rem;
      line-height: .8rem;
      color: #212121;
      .title
        display: inline-block;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.32rem;
        color: $darkTextColor;
    .product-list
      .product-item
        margin-bottom: .1rem;
        background: #fff;
        .product-imgcon
          width: 100%;
          height: 0;
          padding-bottom: 37.4375%;
          overflow: hidden;
          .product-img
            width: 100%;
            transition: opacity 400ms;
        .product-info
          padding: .14rem .2rem .2rem .2rem;
          .product-title
            padding-right: 1.4rem;
            line-height: .48rem;
            font-size: .28rem;
            color: $darkTextColor;
            ellipsis();
          .product-desc
            line-height: .42rem;
            font-size: .24rem;
            color: #616161;
            ellipsis();
</style>
