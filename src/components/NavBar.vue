<template>
  <div className="nav-bar">
    <div className="nav-bar-left">
      <router-link to="/" class="navLink">Wallet</router-link>
      <router-link to="/" class="navLink">Search</router-link>
    </div>
    <router-link to="/" class="navLink">Account</router-link>
    <router-link to="/" class="navLink">Log Out</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.nav-bar {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: $border-thickness solid $border-color;
}

.navLink {
  display: flex;
  justify-content: center;
  font-size: $font-m;
  font-weight: 500;
  padding: 10px;
  margin: 10px;
  width: 210px;
  color: $font-color-light;
  background-color: $color-02;
  border: $border-thickness solid $border-color;
  border-radius: $border-radius;

  &:hover {
    background-color: $color-03;
  }
}

.nav-bar-left {
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
}
</style>
