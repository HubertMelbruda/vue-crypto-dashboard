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
              v-model="coinName"
              autocomplete="off"
              @focus="modal = true"
              required
              placeholder="BitCoin"
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
          <input
            type="text"
            v-model="coinQuantity"
            required
            placeholder="29000,12"
          />
        </div>
        <div class="portfolio-element">
          <p class="portfolio-element__input-name">Price $</p>
          <input type="text" v-model="coinPrice" required placeholder="0,875" />
        </div>
        <div class="portfolio-element">
          <p class="portfolio-element__input-name">Date</p>
          <input type="date" v-model="coinDate" />
        </div>
      </form>
      <div class="form-error" v-if="isFormFiled">
        <p>Please fill up all required fields</p>
      </div>
      <button class="button" @click="handleSubmit">Add to portfolio</button>
    </div>
    <div class="divider"></div>

    <button class="button">Refresh</button>
    <div class="portfolio-card-container">Portfolio to display</div>
  </div>
</template>

<script>
import getCoinsData from "../utilities/getCoinsData"
const { default: axios } = require("axios")
axios.defaults.headers.common["X-Auth-Token"] = "sometoken-common-token"

export default {
  data() {
    return {
      coinName: "",
      coinQuantity: null,
      coinPrice: null,
      coinDate: null,
      isFormFiled: false,
      modal: false,
      coins: [],
      filteredCoins: [],
      coinsData: [],
      error: "",
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false",
    }
  },
  async created() {
    const { coinsData, error } = await getCoinsData(this.url)
    this.coinsData = coinsData.map(coin => {
      this.coins.push(coin.name)
    })
    this.filterCoins()
    this.error = error
  },
  methods: {
    filterCoins() {
      if (this.coinName.length === 0) {
        this.filteredCoins = this.coins
      }
      this.filteredCoins = this.coins.filter(coin => {
        return coin.toLowerCase().startsWith(this.coinName.toLowerCase())
      })
    },
    setState(filteredCoins) {
      this.coinName = filteredCoins
      this.modal = false
    },
    handleSubmit() {
      // const axios = require("axios")

      const coinData = {
        name: this.coinName,
        quantity: this.coinQuantity,
        price: this.coinPrice,
        date: this.coinDate,
      }

      if (
        coinData.name === "" ||
        coinData.quantity === 0.0 ||
        coinData.price === 0.0
      ) {
        this.isFormFiled = true
      } else {
        axios.post("http://localhost:8000/portfolio/", {
          name: this.coinName,
          quantity: this.coinQuantity,
          price: this.coinPrice,
          date: this.coinDate,
        })

        this.coinName = ""
        this.coinQuantity = 0
        this.coinPrice = 0
        this.coinDate = null
        this.isFormFiled = false
      }
    },
  },
  watch: {
    coinName() {
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

.form-error {
  padding: 10px;
  margin-bottom: 10px;
  color: crimson;
}
</style>
