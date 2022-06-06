<template>
  <div className="page-container">
    <div className="cards">
      <PriceCard2 :coin="bitCoinData" />
      <PriceCard2 :coin="ethereumData" />
      <PriceCard2 :coin="bnbData" />
      <PriceCard2 :coin="cardanoData" />
      <PriceCard2 :coin="xrpData" />
    </div>
    <hr />
    <div className="body">Charts</div>
  </div>
</template>

<script>
import PriceCard from "../components/PriceCard.vue"
import PriceCard2 from "../components/PriceCard2.vue"
import getCoinsData from "../utilities/getCoinsData"

export default {
  components: {
    PriceCard,
    PriceCard2,
  },
  data() {
    return {
      coinsData: [],
      error: "",
      bitCoinData: null,
      ethereumData: null,
      bnbData: null,
      cardanoData: null,
      xrpData: null,
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false",
    }
  },
  async mounted() {
    const { coinsData, error } = await getCoinsData(this.url)
    this.coinsData = coinsData
    this.error = error

    this.bitCoinData = this.coinsData.filter(coin => coin.id === "bitcoin")

    this.ethereumData = this.coinsData.filter(coin => coin.id === "ethereum")

    this.cardanoData = this.coinsData.filter(coin => coin.id === "cardano")

    this.bnbData = this.coinsData.filter(coin => coin.id === "binancecoin")

    this.xrpData = this.coinsData.filter(coin => coin.id === "ripple")
    
  },
}
</script>

<style lang=""></style>
