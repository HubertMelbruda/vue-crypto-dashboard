<template>
  <div class="App">
    <SidePanel />
    <div class="mainPanel">
      <NavBar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidePanel from "./components/SidePanel.vue"
import NavBar from "./components/NavBar.vue"

export default {
  components: {
    SidePanel,
    NavBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F5F7FB;
}
</style>
