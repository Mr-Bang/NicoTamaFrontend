import { MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { ActivityList } from "@/types/activityList"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { SimpleMapStyle } from "@/components/map/SimpleMapStyle"

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

const SimpleMapOptions = {
  styles: SimpleMapStyle,
}

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

  activityList: ActivityList
}

export default function HotelsMap(props: Props) {
  const { activityList, hotelList } = props
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  })

  const Markers = hotelList.map((hotel, index) => (
    <>
      <MarkerF
        key={index}
        position={{ lat: hotel.latitude, lng: hotel.longitude }}
        icon={{
          path: faHotel.icon[4] as string,
          fillColor: "#0000ff",
          fillOpacity: 1,

          strokeWeight: 1,
          strokeColor: "#ffffff",
          scale: 0.055,
        }}
      />
    </>
  ))

  const Markers2 = activityList.map((activity, index) => (
    <>
      <MarkerF key={index} position={{ lat: Number(activity.latitude), lng: Number(activity.longitude) }} />
    </>
  ))

  return (
    <>
      {isLoaded ? (
        <GoogleMap
	  mapContainerStyle={containerStyle}
	  center={areaCenter[hotelList[0].region]}
	  zoom={13}
	  options={SimpleMapOptions}
	>
          {Markers2}
          {Markers}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  )
}
