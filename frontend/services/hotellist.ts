import axios from "axios"
import { BASE_URL } from "./baseurl"
import { HotelList } from "@/types/hotelList"

const getHotelList = async (searchWord: string): Promise<HotelList> => {
  const res = await axios.get(BASE_URL + "/search", {
    data: {
      search_word: searchWord,
    },
  })
  return res.data
}

export { getHotelList }
