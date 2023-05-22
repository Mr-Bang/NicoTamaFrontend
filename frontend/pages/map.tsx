import HotelTab from "@/components/hotel/HotelTab"
import ActivityList from "@/components/map/ActivityList"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getActivityList } from "@/services/activity"
import { Hotel } from "@/types/hotel"
import { Box, Container, Flex, Title } from "@mantine/core"
import { MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { GetServerSidePropsContext } from "next"
import { faHotel } from "@fortawesome/free-solid-svg-icons"

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

  // クエリパラメータをパースしてリストに変換
  const roomList = query.roomList ? JSON.parse(query.roomList) : []

  const Markers = activityList.map((activity, index) => (
    <>
      <MarkerF key={index} position={{ lat: activity.latitude, lng: activity.longitude }} />
      {/* <InfoWindowF key={index} position={{ lat: activity.latitude, lng: activity.longitude }}>
        <div>{activity.name}</div>
      </InfoWindowF> */}
    </>
  ))

  return (
    <>
      <Container fluid>
        <Title order={2}>{hotel.name}</Title>
      </Container>
      <HotelTab hotel={hotel} rooms={roomList} />
      <Flex>
        <MapLeftBar />
        <Box sx={{ width: 100 }} />

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
        <Box sx={{ width: 100 }} />

        <ActivityList activityList={activityList} />
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
