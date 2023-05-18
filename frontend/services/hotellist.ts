import axios from "axios"
import { BASE_URL } from "./baseurl"

export type HotelList = {
  hotel_id: number
  name: string
  description: string
  latitude: number
  longitude: number
  image: string
  region: string
}[]

const getHotelList = async (searchWord: string): Promise<HotelList> => {
  const res = await axios.get(BASE_URL + "/search", {
    data: {
      search_word: searchWord,
    },
  })
  return res.data
}

export { getHotelList }
