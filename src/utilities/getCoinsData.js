const axios = require("axios")

const getCoinsData = async url => {
  let coinsData = []
  let error = []

  try {
    const res = await axios.get(url)
    coinsData = res.data
  } catch (err) {
    error = "I can not fetch data from the server. "
  }
  return { coinsData, error }
}

export default getCoinsData