<template>
  <div className="page-container">
    <div className="cards">
      <div v-for="coin in defaultCoins" :key="coin">
        <PriceCard :coin="getFilteredData(coin)" />
      </div>
    </div>
    <div className="body">Charts</div>
  </div>
</template>

<script>
import PriceCard from "../components/PriceCard.vue"
import getCoinsData from "../utilities/getCoinsData"

export default {
  components: {
    PriceCard,
  },
  data() {
    return {
      coinsData: [],
      error: "",
      defaultCoins: ['bitcoin', 'ethereum', 'cardano', 'binancecoin', 'ripple'],
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false",
    }
  },
  async mounted() {
    const { coinsData, error } = await getCoinsData(this.url)
    this.coinsData = coinsData
    this.error = error
  },
  methods: {
    getFilteredData(coinName) {
      return this.coinsData.filter(coin => coin.id === `${coinName}`)
    }
  }
}
</script>

<style lang=""></style>
