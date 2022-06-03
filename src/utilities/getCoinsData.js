const getCoinsData = url => {
  const axios = require("axios")
  let coinsData = []
  let error = ""

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