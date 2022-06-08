<template>
  <div class="card">
    <div class="card__icon"></div>
    <div class="card__header">
      <p>{{ coin.name }}</p>
    </div>
    <div class="card-body">
      <div class="card-price">
        <p>Price</p>
        <h4>$ {{ coin.price }}</h4>
      </div>
      <div class="card-price">
        <p>Quantity</p>
        <h4>$ {{ coin.quantity }}</h4>
      </div>
      <div class="card-price">
        <h4>{{ coin.date }}</h4>
      </div>
    </div>
    <div class="card-footer"></div>
  </div>
</template>
<script>
export default {
  props: ["coin"],
}
</script>
<style lang="scss">
@import "../assets/scss/index.scss";

.card__icon {
  @include centerElement;
}

img {
  width: 40px;
  height: 40px;
}

.card-price {
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: auto;
}

h4 {
  font-size: $font-xl;
  font-weight: 400;
}
</style>
