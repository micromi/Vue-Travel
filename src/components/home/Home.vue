<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './coms/Header';
import HomeSwiper from './coms/Swiper';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
  },
  data() {
    return {
      msg: 'Hello Travel',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
