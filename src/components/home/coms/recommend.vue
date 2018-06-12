<template>
  <div class="mp-group">
    <div class="group-title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="title">猜你喜欢</span>
    </div>
    <ul class="like-list">
      <li class="like-item" v-for="item of likeList" :key="item.id">
        <div class="like-imgcon">
          <img class="like-img" :src="item.imgUrl" :alt="item.title">
        </div>
        <div class="like-tag" v-if="item.tagUrl"
          :style="{backgroundImage: 'url(' + item.tagUrl + ')'}">{{item.tag}}
        </div>
        <div class="like-info">
          <div class="like-title">{{item.title}}</div>
          <div class="like-comment"><span class="comment-num">{{item.comment}}条评论</span></div>
          <div class="like-price">
            <span class="price">¥<em>{{item.price}}</em></span>起
            <span class="address">{{item.address}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  data() {
    return {
      likeList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1801/66/665b245a7ca8728a3.img.jpg_200x200_88d144ad.jpg',
          title: '杭州烂苹果乐园',
          tag: '可订明日',
          tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
          comment: 5578,
          price: 140,
          address: '萧山区',
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1412/be/c788f0f3767d2ea037b9b66d2010bfa4.water.jpg_200x200_ead93bcd.jpg',
          title: '宋城千古情',
          tag: '',
          tagUrl: '',
          comment: 14782,
          price: 245,
          address: '西湖区',
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/ae/aecef86d7655873f90.water.jpg_200x200_22a0790e.jpg',
          title: '杭州野生动物园',
          tag: '可订明日',
          tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
          comment: 4798,
          price: 170,
          address: '富阳市',
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/12/4e6170303c63bdb7070fb1987480afab.water.jpg_200x200_0775a71c.jpg',
          title: '杭州极地海洋世界',
          tag: '可订明日',
          tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png',
          comment: 634,
          price: 345,
          address: '萧山区',
        },
        {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201408/14/771e7f0a85ca13b12c3fde0f7739440f.jpg_200x200_5e08c104.jpg',
          title: '杭州极地海洋世界',
          tag: '',
          tagUrl: '',
          comment: 4447,
          price: 120,
          address: '萧山区',
        },
        {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/27/8211cadd5d9fefeaa044c5b7eefc695d.jpg_200x200_38791bd1.jpg',
          title: '千岛湖',
          tag: '随买随用',
          tagUrl: 'https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png',
          comment: 6177,
          price: 24,
          address: '淳安县',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';

  .mp-group
    margin-top: 0.2rem;
    background: #fff;
    .group-title
      padding: 0.24rem 0 0.26rem;
      background: none;
      .title-img
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        overflow: hidden;
        margin-left: 0.2rem;
        vertical-align: top;
      .title
        display: inline-block;
        height: 0.44rem;
        line-height: 0.44rem;
        font-size: 0.32rem;
        color: $darkTextColor;
    .like-list
      margin-left: 0.24rem;
      .like-item
        display: flex;
        position: relative;
        padding: 0.2rem 0;
        overflow: hidden;
        .like-imgcon
          width: 2rem;
          height: 2rem;
          overflow: hidden;
          .like-img
            width: 100%;
        .like-tag
          position: absolute;
          top: .2rem;
          left: 0;
          width: 1.02rem;
          height: .38rem;
          line-height: .38rem;
          background-size: 100%;
          color: #fff;
          font-size: .2rem;
          text-indent: .04rem;
        .like-info
          flex: 1;
          padding-left: 0.22rem;
          min-width: 0;
          .like-title
            margin-top: 0.26rem;
            height: 0.44rem;
            line-height: 0.44rem;
            font-size: 0.32rem;
            color: $darkTextColor;
            ellipsis();
          .like-comment
            line-height: 0.34rem;
            margin-top: 0.14rem;
            .comment-num
                font-size: .24rem;
                line-height: .34rem;
                color: #616161;
                vertical-align: text-bottom;
          .like-price
            position: relative;
            margin-top: 0.22rem;
            line-height: 0.4rem;
            font-size: 0.24rem;
            color:#616161;
            .price
              color: #ff8300;
              em
                font-size: 0.4rem;
            .address
              position: absolute;
              right: 0.24rem;
              bottom: 0;
</style>
