import axios from "axios"
import { BASE_URL } from "./baseurl"

export type RoomList = {
  hotel_id: number
  room_number: number
  price: number
  image: string
  available: boolean
}[]

const getRoomList = async (hotelId: number): Promise<RoomList> => {
  const res = await axios.get(BASE_URL + "/room", {
    data: {
      hotel_id: hotelId,
    },
  })
  return res.data
}

export { getRoomList }
