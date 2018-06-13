<template>
  <div class="mp-group">
    <div class="group-title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="title">猜你喜欢</span>
    </div>
    <ul class="like-list">
      <li class="like-item" v-for="item of list" :key="item.id">
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
