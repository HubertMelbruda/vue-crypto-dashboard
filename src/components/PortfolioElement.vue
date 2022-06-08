<template>
  <div class="card">
    <div class="card__icon"></div>
    <div class="card__header">
      <p>{{ coin.name }}</p>
    </div>
    <div class="card__body">
      <div class="coin">
        <p class="coin_data">Price: $</p>
        <h4 class="coin_data">{{ coin.price }}</h4>
      </div>
      <div class="coin">
        <p class="coin_data">Quantity:</p>
        <h4 class="coin_data">{{ coin.quantity }}</h4>
      </div>
      <div class="coin">
        <p class="coin_data">Date:</p>
        <h4 class="coin_data">{{ coin.date }}</h4>
      </div>
    </div>

    <div class="card__footer"></div>
  </div>
</template>
<script>
export default {
  props: ["coin"],
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.card {
  display: flex;
  flex-flow: column wrap;
  margin: 10px;
  background-color: $color-02;
  border-radius: $border-radius;
  border: $border-thickness solid $border-color;
  color: $font-color-light;
}

.card__header {
  display: flex;
  padding: 5px;
  margin: 0 10px;
  border-bottom: $border-thickness solid $border-color;
  font-size: $font-l;
  font-weight: 400;
}

.card__body {
  @include centerElementColumn(column);
  padding: 10px 15px;
}

.card__price {
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-left: auto;
}

.coin {
  display: flex;
  justify-content: start;
  padding: 5px;
}

.coin_data {
  font-size: 20px;
  margin: 4px;
  font-weight: 100;
}

.card__footer {
  @include centerElement;
  padding: 5px;
  margin: 0 10px;
  border-top: $border-thickness solid $border-color;
}

.card__icon {
  @include centerElement;
}

img {
  width: 40px;
  height: 40px;
}

// h4 {
//   font-size: $font-xl;
//   font-weight: 400;
// }
</style>
