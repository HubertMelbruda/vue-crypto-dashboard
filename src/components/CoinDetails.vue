<template>
  <div class="coin-row" key={id}>
      <div class="id">{id}</div>
      <div class="coin-name grow">
        <img src={image} alt="coin-img" />
        {name}
      </div>
      <div class="price">
        ${" "}
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 8,
        })}
      </div>
      <div class="percentage-24h">
        {percentage24h.toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })}
        %
      </div>
      <div class="volume-24h">$ {volume24h.toLocaleString()}</div>
      <div class="market-cap">$ {marketCap.toLocaleString()}</div>
      <div class="ath">$ {ath.toLocaleString()}</div>
    </div>
</template>
<script>
export default {
  props: [],
  
}
</script>
<style lang="">
  
</style>