<template> 
  <div class="App">
      <SidePanel />
    <div class="mainPanel">
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>

  
</template>

<script>
import SidePanel from './components/SidePanel.vue'
export default {
  components: {
    SidePanel,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>