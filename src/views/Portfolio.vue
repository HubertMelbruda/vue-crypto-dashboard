<template>
  <div class="page-container">
    <PortfolioForm />
    <div class="divider"></div>
    <div class="portfolio-coins">
      <p class="portfolio__header">Portfolio</p>
      <button class="button" @click="handleRefreshPortfolio">Refresh</button>
    </div>
    <div class="portfolio__coins">
      <!-- <PortfolioCoin :portfolio="portfolio" name="Bitcoin" /> -->
      <!-- <PortfolioCoin :portfolio="portfolio" name="Ethereum" /> -->
    </div>
    <div class="portfolio__coins">
      <div v-for="coinName in coinsInPortfolio2" :key="coinName">
        <PortfolioCoin :portfolio="portfolio" :name="coinName" />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioForm from "../components/Portfolio/PortfolioForm.vue"
import PortfolioCoin from "../components/Portfolio/PortfolioCoin.vue"

const { default: axios } = require("axios")

export default {
  components: {
    PortfolioForm,
    PortfolioCoin,
  },
  data() {
    return {
      portfolio: [],
      error: "",
      coinsInPortfolio: ["Ethereum", "Bitcoin", "XRP"],
      coinsInPortfolio1: [],
      coinsInPortfolio2: [],
    }
  },
  methods: {
    async handleRefreshPortfolio() {
      try {
        const res = await axios.get("http://localhost:8000/portfolio/")
        this.portfolio = res.data
        res.data.forEach(coin => this.coinsInPortfolio1.push(coin.name))
        const set = new Set(this.coinsInPortfolio1)
        this.coinsInPortfolio2 = [...set]
      } catch (err) {
        this.error = "I can not fetch data from the server. "
      }
    },
  },
}
</script>
<style lang="scss">
@import "../assets/scss/index.scss";
.divider {
  background-color: $color-05;
  width: 90%;
  height: 2px;
  margin: 10px;
}
</style>
