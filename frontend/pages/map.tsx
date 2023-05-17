import HotelTab from "@/components/HotelTab"
import ActivityList from "@/components/map/ActivityList"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getActivityList } from "@/services/activity"
import { Box, Container, Flex, SimpleGrid, Title } from "@mantine/core"
import { InfoWindow, Marker, MarkerClusterer, useLoadScript } from "@react-google-maps/api"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import { GetServerSidePropsContext } from "next"
import { useCallback, useEffect, useState } from "react"

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
}

export default function Map(props: Props) {
  const { activityList } = props
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  })

  // const [map, setMap] = useState<google.maps.Map | null>(null)

  // const onLoad = useCallback(function callback(map: google.maps.Map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   // const bounds = new window.google.maps.LatLngBounds(center)
  //   // map.fitBounds(bounds)

  //   setMap(map)
  // }, [])

  // const onUnmount = useCallback(function callback(map: google.maps.Map) {
  //   // do your stuff before map is unmounted
  //   setMap(null)
  // }, [])

  useEffect(() => {
    console.log(activityList)
  }, [])

  return (
    <>
      <Container fluid>
        <Title order={2}>住友不動産ホテル ヴィラフォンテーヌグランド東京田町</Title>
      </Container>
      <HotelTab />
      <Flex>
        <MapLeftBar />
        <Box sx={{ width: 100 }} />
        {isLoaded ? (
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
            {activityList.map((activity) => (
              <>
                <Marker
                  position={{ lat: activity.latitude, lng: activity.longitude }}
                  label={{ text: activity.name, color: "white", fontSize: "60px", fontWeight: "100" }}
                />
                <InfoWindow position={{ lat: activity.latitude, lng: activity.longitude }}>
                  <div>
                    <h1>秋葉原オフィス</h1>
                  </div>
                </InfoWindow>
              </>
            ))}
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
  const res = await getActivityList("都心")

  return {
    props: {
      activityList: res,
    },
  }
}
