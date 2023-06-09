import HotelTab from "@/components/hotel/HotelTab"
import HotelBreadcrumb from "@/components/hotel/HotelBreadcrumb"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getActivityList } from "@/services/activity"
import { Hotel } from "@/types/hotel"
import { AspectRatio, Box, Card, Container, Flex, Image, Text, Title } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { InfoWindowF, Marker, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { GetServerSidePropsContext } from "next"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import Activities from "@/components/map/Activities"
import { ActivityList } from "@/types/activityList"
import { useRouter } from "next/router"
import NextImage from "next/image"
import HealthIcon from "../public/rakuten_healthcare_icon.png"
import { calcDistance } from "@/services/calcDistance"
import { SimpleMapStyle } from "@/components/map/SimpleMapStyle"

const containerStyle = {
  width: "100%",
  height: "100vh",
}

const center = {
  lat: 35.64947376923544,
  lng: 139.78989191498846,
}

const SimpleMapOptions = {
  styles: SimpleMapStyle,
}

const googleMapsApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string

interface Props {
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

export default function Map(props: Props) {
  const largeScreen = useMediaQuery("(min-width: 1600px)")

  const [indexShowActivityInfo, setIndexShowActivityInfo] = useState<number>(-1)
  const [activeTab, setActiveTab] = useState<number>(0)

  const [activityPinAnimation, setActivityPinAnimation] = useState<{
    key: number
    animation: google.maps.Animation | null
  }>()

  const router = useRouter()
  const { activityList, query } = props
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  })

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

  function onClickActivityMarker(index: number) {
    setIndexShowActivityInfo(index)
  }

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

  useEffect(() => {
    if (!isLoaded) return
    getDistanceList()
  }, [isLoaded])

  // category_idごとに場合分けする
  const categorizedActivities: {
    [key: number]: ActivityList
  } = { 1: [], 2: [], 3: [], 4: [] }

  activityList.forEach((activity) => {
    const categoryId = activity.category_id
    categorizedActivities[categoryId].push(activity)
  })
  categorizedActivities[0] = activityList

  const activityMarkers = categorizedActivities[activeTab].map((activity, index) => (
    <>
      <MarkerF
        key={index}
        position={{ lat: activity.latitude, lng: activity.longitude }}
        onClick={() => onClickActivityMarker(index)}
        options={{
          animation: activityPinAnimation?.key == index ? activityPinAnimation.animation : undefined,
        }}
      />
      {index == indexShowActivityInfo && (
        <InfoWindowF
          position={{ lat: Number(activity.latitude + 0.0015), lng: Number(activity.longitude) }}
          onCloseClick={() => setIndexShowActivityInfo(-1)}
        >
          <Card
            style={{ width: "200px" }}
            padding='1'
            shadow='sm'
            key={index}
            radius='md'
            component='a'
            href='#'
            onClick={() => router.push(activity.url)}
          >
            <AspectRatio ratio={1920 / 1080}>
              <Image maw={300} mx='auto' src={activity.image} alt={activity.name} fit={"contain"} />
            </AspectRatio>

            <Text mt={5}>{activity.name}</Text>
            <Text color='dimmed' size='sm' transform='uppercase' weight={700} mt='md'>
              ¥ {activity.price.toLocaleString()}
            </Text>
            {distanceList.length > 0 && (
              <Flex justify={"flex-end"} align={"center"}>
                <NextImage src={HealthIcon} width={20} height={20} alt={""} />
                <Text p={5}>{Math.round(distanceList[index].value / 0.6)}歩</Text>
                <Text color='dimmed' size='sm' p={5}>
                  {distanceList[index].text}
                </Text>
                <Text color='dimmed' size='sm' p={5}>
                  {distanceList[index].durationText}
                </Text>
              </Flex>
            )}
          </Card>
        </InfoWindowF>
      )}
    </>
  ))

  useEffect(() => {}, [])

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
        <Box sx={(theme) => ({ width: largeScreen ? 3200 : 1200, padding: theme.spacing.xs })}>
          <HotelTab hotel={hotel} rooms={roomList} />
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{ lat: hotel.latitude, lng: hotel.longitude }}
              zoom={13}
              options={SimpleMapOptions}
            >
              <MarkerF
                position={{ lat: hotel.latitude, lng: hotel.longitude }}
                icon={{
                  path: faHotel.icon[4] as string,
                  fillColor: "#0000ff",
                  fillOpacity: 1,
                  anchor: new google.maps.Point(
                    faHotel.icon[0] / 2, // width
                    faHotel.icon[1] // height
                  ),
                  strokeWeight: 1,
                  strokeColor: "#ffffff",
                  scale: 0.055,
                }}
                animation={google.maps.Animation.DROP}
              />
              {activityMarkers}
            </GoogleMap>
          ) : (
            <></>
          )}
        </Box>
        <Box sx={{ width: largeScreen ? 400 : 340 }}>
          <Activities
            activityList={categorizedActivities[activeTab]}
            distanceList={distanceList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setActivityPinAnimation={setActivityPinAnimation}
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
      activityList: resActivityList,
      query,
    },
  }
}
