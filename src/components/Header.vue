<template>
  <div class="nav">
    <div class="main-nav container">
      <h3>Chart Plotter</h3>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.nav {
  position: sticky;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: $background;
  padding-top: 5px;
}

.main-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>