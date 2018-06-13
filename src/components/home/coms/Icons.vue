<template>
  <div class="category-container">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="category-item" v-for="item of page" :key="item.id">
          <div class="category-img">
            <img class="img" :src="item.imgUrl" alt="">
          </div>
          <div class="category-desc">{{item.desc}}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeCategory',
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const idx = Math.floor(index / 8);
        if (!pages[idx]) {
          pages[idx] = [];
        }
        pages[idx].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';

  .category-container
    padding-bottom: 0.25rem;
    background: #ffffff;
    & >>> .swiper-container
      width: 100%;
      height: 0;
      padding-bottom: 50%;
      overflow: hidden;
    .category-item
      position: relative;
      float: left;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      overflow: hidden;
      .category-img
        width: 100%;
        height: 1.1rem;
        padding-top: .25rem;
        // position: absolute;
        // top: 0;
        // left: 0;
        // right: 0;
        // bottom: 0.44rem;
        // box-sizing: border-box;
        // padding: 0.1rem;
        .img
          display: block;
          height: 100%;
          margin: 0 auto;
      .category-desc
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        color: $darkTextColor;
        ellipsis();
</style>
