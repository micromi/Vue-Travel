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
  data() {
    return {
      categoryList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票景点门票景点门票景点门票景点门票',
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
          desc: 'Q+精选',
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '主题乐园',
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '漂流',
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐',
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
          desc: '印象西湖',
        },
        {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '宋城千古情',
        },
        {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          desc: '西溪湿地',
        },
        {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '千岛湖',
        },
        {
          id: '0010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
          desc: '西湖',
        },
      ],
      swiperOption: {
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.categoryList.forEach((item, index) => {
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
