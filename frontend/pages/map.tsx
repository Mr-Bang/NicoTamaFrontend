import HotelTab from "@/components/hotel/HotelTab"
import HotelBreadcrumb from "@/components/hotel/HotelBreadcrumb"
import ActivityList from "@/components/map/ActivityList"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getActivityList } from "@/services/activity"
import { Hotel } from "@/types/hotel"
import { Box, Center, Grid, Title } from "@mantine/core"
import { MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { GetServerSidePropsContext } from "next"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { calcDistance } from "@/services/calcDistance"
import { useEffect, useState } from "react"

const containerStyle = {
  width: "100%",
  height: "100vh",
}

const center = {
  lat: 35.64947376923544,
  lng: 139.78989191498846,
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

  const Markers = activityList.map((activity, index) => (
    <>
      <MarkerF key={index} position={{ lat: activity.latitude, lng: activity.longitude }} />
      {/* <InfoWindowF key={index} position={{ lat: activity.latitude, lng: activity.longitude }}>
        <div>{activity.name}</div>
      </InfoWindowF> */}
    </>
  ))

  const destinations = activityList.map((activity) => ({
    lat: activity.latitude,
    lng: activity.longitude,
  }))

  const [distanceList, setDistanceList] = useState<
    {
      text: string
      value: number
      durationText: string
    }[]
  >([])

  async function getDistanceList() {
    // 計算量すごいから、DEMOのときだけ有効にする (使う時相談して！！)
    //   const distances = await calcDistance({
    //     origin: [{ lat: hotel.latitude, lng: hotel.longitude }],
    //     destinations: destinations,
    //   })
    //   setDistanceList(distances.distanceList)
    //   console.log(distances.distanceList)

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
      <Grid>
        <Grid.Col span='auto'>
          <MapLeftBar />
        </Grid.Col>
        <Grid.Col span={7}>
          <HotelTab hotel={hotel} rooms={roomList} />
          <Center>
            {isLoaded && center ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: hotel.latitude, lng: hotel.longitude }}
                zoom={13}
              >
                <MarkerF
                  position={{ lat: hotel.latitude, lng: hotel.longitude }}
                  icon={{
                    path: faHotel.icon[4] as string,
                    fillColor: "#ff0066",
                    fillOpacity: 1,
                    anchor: new google.maps.Point(
                      faHotel.icon[0] / 2, // width
                      faHotel.icon[1] // height
                    ),
                    strokeWeight: 1,
                    strokeColor: "#ffffff",
                    scale: 0.055,
                  }}
                />
                {Markers}
              </GoogleMap>
            ) : (
              <></>
            )}
          </Center>
        </Grid.Col>
        <Grid.Col span='auto'>
          <ActivityList activityList={activityList} distanceList={distanceList} />
        </Grid.Col>
      </Grid>
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
