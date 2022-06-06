<template>
  <div v-for="coin in filteredCoins" :key="coin.id" className="card grow">
    <div className="card-header">
      <p>{{ coin.id }}</p>
    </div>
    <div className="card-body">
      <div className="card-icon">
        <img :src="coin.image" alt="coin-img" />
      </div>
      <div className="card-price">
        <h4>$ {{ coin.current_price }}</h4>
      </div>
    </div>
    <div className="card-footer"></div>
  </div>
</template>
<script>
import getCoinsData from "../utilities/getCoinsData"

export default {
  props: ["name"],
  data() {
    return {
      coinsData: [],
      error: "",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false",
    }
  },
  async mounted() {
    const { coinsData, error, load } = getCoinsData(this.url)
    await load()
    this.coinsData = coinsData
    this.error = error
    console.log(this.coinsData)
  },
  computed: {
    filteredCoins() {
      const x = this.coinsData.filter(coin => coin.id === this.name)
      return x
    },
  },
}
</script>
<style lang="scss">
@import "../assets/scss/index.scss";

.card-body {
}

.chart {
  img {
    width: 500px;
  }
}

.card-icon {
  @include centerElement;

  img {
    width: 40px;
    height: 40px;
  }
}

.card-price {
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: auto;

  h4 {
    font-size: $font-xl;
    font-weight: 400;
  }
}
</style>
