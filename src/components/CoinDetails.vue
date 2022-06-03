<template>
  <div class="coin-row" v-for="coin in coinsData" :key="coin.id">
    <div class="coin-row">
      <div class="id">{{ coin.market_cap_rank }}</div>
      <div class="coin-name grow">
        <img :src="coin.image" alt="coin-img" />
        {{ coin.name }}
      </div>
      <div class="price">
        ${{" "}}
        {{coin.current_price.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 8,
        })}}
      </div>
      <div class="percentage-24h">
        {{coin.price_change_percentage_24h.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}}
        %
      </div>
      <div class="volume-24h">$ {{coin.total_volume.toLocaleString()}}</div>
      <div class="market-cap">$ {{coin.market_cap.toLocaleString()}}</div>
      <div class="ath">$ {{coin.ath.toLocaleString()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coinsData"],
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";


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
