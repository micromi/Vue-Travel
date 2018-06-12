<template>
  <div class="weekend-trip">
    <div class="weekend-title">
      <span class="title">周末去哪儿</span>
    </div>
    <ul class="product-list">
      <li class="product-item" v-for="item of productList" :key="item.id">
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
  data() {
    return {
      productList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg',
          title: '杭州必游TOP10',
          desc: '杭州，前世今生与你有一场美丽约会',
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/7d45cc38259e0.jpg_r_640x214_156f4299.jpg',
          title: '承载杭城的历史之地',
          desc: '饱经沧桑的地方诉述着这座城的段段衷肠',
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/bc/83feb2e003d0dd.jpg_r_640x214_0b7269b8.jpg',
          title: '杭州多样乐园',
          desc: '这个周末终于可以陪宝贝去玩耍啦',
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1507/61/a7564da6033311.jpg_r_640x214_cc570e76.jpg',
          title: '激情漂流，嗨翻夏日',
          desc: '漂起来，展现你的“湿身”诱惑',
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ae/4fe23c6b6679e2.jpg_r_640x214_368a18d8.jpg',
          title: '美仑美奂的演出',
          desc: '一座有故事的城，天天有“戏”在上演',
        },
      ],
    };
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
