import MapLeftBar from "@/components/map/MapLeftBar"
import { Box, Container, Flex, Title } from "@mantine/core"
import HotelTab from "@/components/hotel/HotelTab"
import HotelContent from "@/components/hotel/HotelContent"
import HotelBreadcrumb from "@/components/hotel/HotelBreadcrumb"
import { GetServerSidePropsContext } from "next"
import { Hotel } from "@/types/hotel"
import Activities from "@/components/map/Activities"
import { useMediaQuery } from "@mantine/hooks"
import { getActivityList } from "@/services/activity"
import { ActivityList } from "@/types/activityList"
import { useEffect, useState } from "react"

type Props = {
  activityList: {
    name: string
    price: number
    image: string
    longitude: number
    latitude: number
    url: string
    region: string
    category_id: number
  }[]
  query: {
    hotel_id: number
    name: string
    description: string
    latitude: number
    longitude: number
    image: string
    region: string
    roomList: string
  }
}

export default function Hotel(props: Props) {
  const largeScreen = useMediaQuery("(min-width: 1600px)")
  const { activityList, query } = props

  const hotel: Hotel = {
    hotel_id: Number(query.hotel_id),
    name: query.name as string,
    description: query.description as string,
    latitude: Number(query.latitude),
    longitude: Number(query.longitude),
    image: query.image as string,
    region: query.region as string,
  }

  const roomList = query.roomList ? JSON.parse(query.roomList) : []

  const [activeTab, setActiveTab] = useState<number>(0)

  // category_idごとに場合分けする
  const categorizedActivities: {
    [key: number]: ActivityList
  } = { 1: [], 2: [], 3: [], 4: [] }

  activityList.forEach((activity) => {
    const categoryId = activity.category_id
    categorizedActivities[categoryId].push(activity)
  })
  categorizedActivities[0] = activityList

  const [distanceList, setDistanceList] = useState<
    {
      text: string
      value: number
      durationText: string
    }[]
  >([])

  async function getDistanceList() {
    // 計算量すごいから、DEMOのときだけ有効にする (使う時相談して！！)
    // const distances = await calcDistance({
    //   origin: [{ lat: hotel.latitude, lng: hotel.longitude }],
    //   destinations: destinations,
    // })
    // setDistanceList(distances.distanceList)
    // console.log(distances.distanceList)
    const objects = activityList.map((activity) => ({
      durationText: "7 mins",
      text: "0.5 km",
      value: 501,
    }))
    setDistanceList(objects)
  }

  return (
    <>
      <HotelBreadcrumb hotel={hotel} />
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={2}>{hotel.name}</Title>
      </Box>
      <Flex>
        <MapLeftBar />
        <Box pl={largeScreen ? "44px" : "xl"}>
          <HotelTab hotel={hotel} rooms={roomList} />
          <HotelContent hotel={hotel} roomList={roomList} />
        </Box>
        {/* <Box sx={{ width: 600 }} /> */}
        <Box sx={{ width: largeScreen ? 400 : 340 }}>
          <Activities
            activityList={categorizedActivities[activeTab]}
            distanceList={distanceList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context
  const resActivityList = await getActivityList(query.region as string)

  return {
    props: {
      query,
      activityList: resActivityList,
    },
  }
}
