<template>
  <div className="card grow">
      <div className="card-header">
        <!-- <p>{name}</p> -->
      </div>
      <div className="card-body">
        <div className="card-icon">
          <!-- <img src={image} alt="coin-img" /> -->
        </div>
        <div className="card-price">
          <!-- <h4>$ {price}</h4> -->
        </div>
      </div>
      <div className="card-footer">
        <!-- <p>Card Stats</p> -->
        {{filteredCoins[0]}}
        <!-- {{ coinsData.filter(coin => coin.id === this.name) }} -->
      </div>
    </div>
</template>
<script>
import getCoinsData from "../utilities/getCoinsData"

export default {
  props: ['name'],
  data() {
    return {
      coinsData: [],
      error: "",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
    }
  }, 
  mounted() {
    const { coinsData, error, load } = getCoinsData(this.url)
    load()
    this.coinsData = coinsData
    this.error = error

    // const coinToDisplay = this.coinsData.filter(coin => coin.id === this.name)
    console.log(this.coinsData)
  }, 
  computed: {
    filteredCoins() {
      
      const x = this.coinsData.filter(coin => coin.id === this.name)
      return  x
    }
    // const filteredCoins = data.filter(coin => coin.id === props.name);
  }
  
}
</script>
<style lang="">
  
</style>