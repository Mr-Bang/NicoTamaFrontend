import axios from "axios"
import { BASE_URL } from "./baseurl"

const getHotelList = async (searchWord: string) => {
  const res = await axios.get(BASE_URL + "/search", {
    data: {
      search_word: searchWord,
    },
  })
  return res.data
}

export { getHotelList }
