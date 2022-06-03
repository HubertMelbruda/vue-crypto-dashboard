<template>
  <div className="side-panel">
    <div className="logo">
      <img :src="require('../assets/img/reactlogo.png')" alt="Logo" /> USER
      DASHBOARD
    </div>
    <div className="navLinkList">
      <router-link to="/" class="navLink">Dashboard</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "../assets/scss/index.scss";

.side-panel {
  background-image: url("../assets/img/user-background-03.jpg");
  background-position: right 35% bottom 55%;
  width: 260px;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 13px 15px;
  color: $font-color-light;
  font-size: $font-l;
  border-bottom: $border-thickness solid $color-01;

  img {
    max-width: 50px;
    max-height: 50px;
  }
}

.navLinkList {
  @include centerElementColumn(column);
  padding: 10px;
  margin: 5px;
  border-radius: $border-radius;
}

.navLink {
  display: flex;
  align-items: center;
  width: 210px;
  padding: 10px 15px;
  margin: 0 15px;
  border-radius: $border-radius;
  margin-left: 10px;
  color: $font-color-light;
  font-size: $font-l;
  font-weight: 400;

  &:hover {
    background-color: $color-03;
  }
}

.navIcon {
    width: 25px;
    height: 25px;
    color: $font-color-light;
  }

.navLink:hover {
  border: $border-thickness solid rgb(255, 255, 255);
}
</style>
