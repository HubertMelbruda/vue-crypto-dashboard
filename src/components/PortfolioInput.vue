<template>
  <div class="page-container">
    <div :class="{ cover: modal }" @click="modal = false"></div>
    <div class="portfolio">
      <p class="portfolio__header">Add Coin to your portfolio</p>
      <form class="portfolio__form">
        <div class="portfolio-element">
          <p class="portfolio-element__input-name">Coin name</p>
          <div class="relative">
            <input
              type="text"
              v-model="coinInput"
              autocomplete="off"
              @focus="modal = true"
            />
            <div class="autocomplete" v-if="filteredCoins && modal">
              <ul>
                <li
                  v-for="filteredCoin in filteredCoins"
                  :key="filteredCoin"
                  @click="setState(filteredCoin)"
                >
                  {{ filteredCoin }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="portfolio-element">
          <p class="portfolio-element__input-name">Quantity</p>
          <input type="text" />
        </div>
        <div class="portfolio-element">
          <p class="portfolio-element__input-name">Price $</p>
          <input type="text" />
        </div>
        <div class="portfolio-element">
          <p class="portfolio-element__input-name">Date</p>
          <input type="date" />
        </div>
      </form>
      <button class="button">Add to portfolio</button>
    </div>
    <div class="divider"></div>

    <button class="button">Refresh</button>
    <div class="portfolio-card-container">Portfolio to display</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      coinInput: "",
      modal: false,
      coins: ["Bitcoin", "Ethereum", "Cardano", "Binancecoin", "Ripple"],
      filteredCoins: [],
    }
  },
  mounted() {
    this.filterCoins()
  },
  methods: {
    filterCoins() {
      if (this.coinInput.length === 0) {
        this.filteredCoins = this.coins
      }
      this.filteredCoins = this.coins.filter(coin => {
        return coin.toLowerCase().startsWith(this.coinInput.toLowerCase())
      })
    },
    setState(filteredCoins) {
      this.coinInput = filteredCoins
      this.modal = false
    },
  },
  watch: {
    coinInput() {
      this.filterCoins()
    },
  },
}
</script>

<style lang="scss">
@import "../assets/scss/index.scss";

.page-container {
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1 0 auto;
}

.portfolio {
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 800px;
}

.portfolio__header {
  display: flex;
  min-width: 120px;
  margin: 10px;
  font-size: 25px;
  font-weight: 300;
}

.portfolio__form {
  display: flex;
  flex-flow: row wrap;
}

.portfolio-element {
  display: flex;
  padding: 5px;
}

.portfolio-element__input-name {
  min-width: 130px;
  margin: 10px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1px;
}

input {
  min-width: 150px;
  height: 40px;
  font-weight: 600;
  font-size: 17px;
  padding: 5px;
}

.portfolio-element__input {
  min-width: 200px;
}

.portfolio-element__date-picker {
  min-width: 200px;
}

.portfolio-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.portfolio-card__details {
  display: flex;
  flex-wrap: wrap;
}

.portfolio-card__item {
  min-width: 150px;
}

.button {
  @include button;
}

.divider {
  background-color: $color-05;
  width: 90%;
  height: 2px;
  margin: 10px;
}

.relative {
  position: relative;
}

.autocomplete {
  display: flex;
  flex-direction: column;
  background-color: $color-03;
  position: absolute;
  min-width: 150px;
  font-size: 20px;
  padding: 10px;
  background-color: $color-03;
  border: $border-thickness solid $border-color;
  border-radius: $border-radius;
  cursor: pointer;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 5px;
  border-bottom: $border-thickness solid $border-color;
}

.cover {
  position: absolute;
  inset: 0;
  z-index: 0;
}
</style>
