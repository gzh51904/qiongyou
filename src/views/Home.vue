<template>
  <div class="home">
    <harde-l />
    <swpie-l></swpie-l>
    <nav-l></nav-l>
    <discount-L></discount-L>
    <ploy-l></ploy-l>
    <strategy-l></strategy-l>
    <foot-l></foot-l>
  </div>
</template>

<script>
// @ is an alias to /src
// import "mint-ui/lib/style.css";
import hardeL from "../components/home/harde_l.vue";
import swpieL from "../components/home/swpie.vue";
import navL from "../components/home/navl.vue";
import discountL from "../components/home/discount.vue";
import ployL from "../components/home/ployl";
import strategyL from "../components/home/strategyl";
import footL from "../components/home/footl";
export default {
  name: "home",
  components: {
    hardeL,
    swpieL,
    navL,
    discountL,
    ployL,
    strategyL,
    footL
  }
};
</script>
