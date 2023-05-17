import axios from "axios"
import { BASE_URL } from "./baseurl"

const getActivityList = async (searchWord: string) => {
  const res = await axios.get(BASE_URL + "/activity/search", {
    data: {
      search_word: searchWord,
    },
  })
  return res.data
}

export { getActivityList }
