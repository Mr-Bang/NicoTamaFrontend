import axios from "axios"
import { BASE_URL } from "./baseurl"
import { RoomList } from "@/types/roomList"

const getRoomList = async (hotelId: number): Promise<RoomList> => {
  const res = await axios.get(BASE_URL + "/room", {
    data: {
      hotel_id: hotelId,
    },
  })
  return res.data
}

export { getRoomList }
