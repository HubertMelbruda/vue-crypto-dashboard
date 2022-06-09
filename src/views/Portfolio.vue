<template>
  <div class="page-container">
    <PortfolioForm />
    <div class="divider"></div>
    <div class="portfolio-coins">
      <p class="portfolio__header">Portfolio</p>
      <button class="button" @click="handleRefreshPortfolio">Refresh</button>
    </div>
    <div class="portfolio__coins">
      <div v-for="name in uniqueCoinNames" :key="name">
        <PortfolioCoin 
          :name="name" 
          :averagePrice="getAveragePrice(name)" 
          :quantitySum="getQuantitySum(name)" 
          :invested="getInvested(name)" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioForm from "../components/Portfolio/PortfolioForm.vue"
import PortfolioCoin from "../components/Portfolio/PortfolioCoin.vue"

import axios from 'axios'

export default {
  components: {
    PortfolioForm,
    PortfolioCoin,
  },
  data() {
    return {
      portfolio: [],
      error: "",
    }
  },
  computed: {
    uniqueCoinNames() {
      return [...new Set(this.portfolio.map(coin => coin.name))]
    }
  },
  methods: {
    filteredPortfolio(name) {
      return this.portfolio.filter(coin => coin.name === name)
    },
    getAveragePrice(name) {
      const filteredArray = this.filteredPortfolio(name)
      if (filteredArray.length) {
        return filteredArray.reduce((previousEl, currentEl) => {
          return previousEl + parseFloat(currentEl.price)
        }, 0)
      }
    },
    getQuantitySum(name) {
      const filteredArray = this.filteredPortfolio(name)
      if (filteredArray.length) {
        return filteredArray.reduce((previousEl, currentEl) => {
          return previousEl + parseFloat(currentEl.quantity)
        }, 0)
      }
    },
    getInvested(name) {
      const filteredArray = this.filteredPortfolio(name)
      if (filteredArray.length) {
        return filteredArray.reduce((previousEl, currentEl) => {
          return previousEl + parseFloat(currentEl.price * currentEl.quantity)
        }, 0)
      }
    },
    async handleRefreshPortfolio() {
      try {
        const res = await axios.get("http://localhost:8000/portfolio/")
        this.portfolio = res.data
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