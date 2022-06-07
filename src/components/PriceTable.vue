<template>
  <div class="card">
    <div class="card-header table-prices">
      <div>Cryptocurrency Prices</div>
      <button class="refresh-btn">Refresh</button>
    </div>
    <div class="card-body">
      <div class="table">
        <div class="table-head">
          <div class="id">#</div>
          <div class="coin-name">Coin</div>
          <div class="price">Price</div>
          <div class="percentage-24h">24h Change</div>
          <div class="volume-24h">24 h Volume</div>
          <div class="market-cap">Market</div>
          <div class="ath">ATH</div>
        </div>
        <CoinDetails :coinsData="coinsData"/>
      </div>
    </div>
    <div class="card-footer">
      <p>Card footer</p>
    </div>
  </div>
</template>

<script>
import getCoinsData from "../utilities/getCoinsData"
import CoinDetails from '../components/CoinDetails.vue'

export default {
  data() {
    return {
      coinsData: [],
      error: "",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false",
    }
  },
  components: {
    CoinDetails,
  },
  async mounted() {
    const { coinsData, error} = await getCoinsData(this.url)
    this.coinsData = coinsData
    this.error = error  
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.table-prices {
  display: flex;
  justify-content: space-between;

  .refresh-btn {
    @include button;
  }
}

.table {
  display: block;
  width: 100%;
  font-weight: 500;

  .table-head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid $border-color;
    border-top: 1px solid $border-color;
    background-color: $color-04;
  }
}

.coin-row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid $border-color;

  &:hover {
    background-color: $color-04;
  }
}

.id {
  padding: $padding-m;
  min-width: 50px;
}

.coin-name {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: $padding-m;
  min-width: 170px;
  font-weight: 800;
  margin-left: 20px;

  img {
    margin-right: 20px;
    width: 30px;
    height: 30px;
  }
}

.price {
  padding: $padding-m;
  min-width: 130px;
}

.percentage-24h {
  padding: $padding-m;
  min-width: 120px;
}

.volume-24h {
  padding: $padding-m;
  min-width: 160px;
}

.market-cap {
  padding: $padding-m;
  min-width: 160px;
}

.ath {
  padding: $padding-m;
  min-width: 120px;
}
</style>
