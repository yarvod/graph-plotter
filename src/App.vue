<template>
  <Header/>
  <div class="container">
    <h5>Plotting Smith chart</h5>
    <SmithChart/>
  </div>
  <Footer/>
</template>

<script>
import Header from "@/components/Header";
import SmithChart from "@/components/SmithChart";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    SmithChart,
    Header,
    Footer,
  }
}
</script>

<style lang="scss">
@import 'normalize.css';

html {
  background-color: $background;
}

#app {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
