<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg',
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg',
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1609/f8/ef0b29100632f002.jpg_750x200_ebe20c8f.jpg',
      }],
    };
  },
};
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%;
    height: 0;
    // padding-bottom: 31.25%;
    padding-bottom: 26.67%;
    overflow: hidden;
    background: #eee;
    .swiper-img
      width: 100%;
    & >>> .swiper-pagination-bullet-active
      background: #fff;
</style>
