import HotelTab from "@/components/HotelTab"
import ActivityList from "@/components/map/ActivityList"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getActivityList } from "@/services/activity"
import { Box, Container, Flex, SimpleGrid, Title } from "@mantine/core"
import { InfoWindow, Marker, MarkerF, useJsApiLoader, useLoadScript } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { GetServerSidePropsContext } from "next"
import {
  MemoExoticComponent,
  ReactComponentElement,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useState,
} from "react"

const containerStyle = {
  width: "100%",
  height: "100vh",
}

const center = {
  lat: 35.64947376923544,
  lng: 139.78989191498846,
}

const areaCenter: {
  [key: string]: {
    lat: number
    lng: number
  }
} = {
  都心: {
    lat: 35.6752972133285,
    lng: 139.76463639450805,
  },

  副都心: {
    lat: 35.7023558010935,
    lng: 139.7027006645815,
  },

  東部: {
    lat: 35.71244223700499,
    lng: 139.81344093561813,
  },
  北西部: {
    lat: 35.731217938922306,
    lng: 139.6523175347044,
  },

  南西部: {
    lat: 35.61453465541908,
    lng: 139.69429269110896,
  },
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
  const { isLoaded } = useJsApiLoader({
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

  const Markers = activityList.map((activity, index) => (
    <MarkerF key={index} position={{ lat: Number(activity.latitude), lng: Number(activity.longitude) }} />
  ))

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
          <GoogleMap mapContainerStyle={containerStyle} center={areaCenter[activityList[0].region]} zoom={13}>
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
  const res = await getActivityList("東部")

  return {
    props: {
      activityList: res,
    },
  }
}
