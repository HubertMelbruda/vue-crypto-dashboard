import { ref } from "vue"

const getCoinsData = url => {
  const axios = require("axios")
  const coinsData = ref()
  const error = ref()

  const load = async () => {
    try {
      const res = await axios.get(url)

      coinsData.value = res.data
    } catch (err) {
      error = "I can not fetch data from the server. "
    }
  }
  return { coinsData, error, load }
}

export default getCoinsData