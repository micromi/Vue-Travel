<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './coms/Header';

export default {
  name: 'Home',
  components: {
    HomeHeader,
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
