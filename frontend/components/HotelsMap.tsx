import { Box, Flex  } from "@mantine/core"
import { MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { useEffect } from "react"

const containerStyle = {
  width: "100%",
  height: "100vh",
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
  hotelList: {
    hotel_id: number
    name: string
    description: string
    latitude: number
    longitude: number
    image: string
    region: string
  }[]
}

export default function HotelsMap(props: Props) {
  const { hotelList } = props
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  })

  const Markers = hotelList.map((hotel, index) => (
    <MarkerF key={index} position={{ lat: Number(hotel.latitude), lng: Number(hotel.longitude) }} />
  ))

  return (
    <>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={areaCenter[hotelList[0].region]} zoom={13}>
          {Markers}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  )
}
