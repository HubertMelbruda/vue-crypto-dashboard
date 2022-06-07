<template>
  <div v-for="item in coin" :key="item.id" class="card">
    <div class="card-header">
      <p>{{ item.name }}</p>
    </div>
    <div class="card-body">
      <div class="card-icon">
        <img :src="item.image" alt="coin-img" />
      </div>
      <div class="card-price">
        <h4>$ {{ item.current_price }}</h4>
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
