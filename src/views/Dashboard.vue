<template>
  <div className="page-container">
      <div className="cards">
        <PriceCard name="bitcoin"/>
      </div>
      <hr />
      <div className="body">
        Charts
      </div>
    </div>
</template>
<script>
import PriceCard from '../components/PriceCard.vue'

export default {
  components: {
    PriceCard,
  }  
}
</script>
<style lang="">
  
</style>