<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './coms/Header';
import HomeSwiper from './coms/Swiper';
import HomeIcons from './coms/Icons';
import HomeRecommend from './coms/recommend';
import HomeWeekend from './coms/weekend';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    getHomeInfo() {
      this.$http.get('/api/index').then((response) => {
        const res = response.data;
        if (res.code === '10000' && res.data) {
          const data = res.data;
          this.city = data.city;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .home
    background: #f5f5f5;
</style>
