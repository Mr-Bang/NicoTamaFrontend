import { InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { ActivityList } from "@/types/activityList"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { SimpleMapStyle } from "@/components/map/SimpleMapStyle"
import {
  Box,
  Container,
  Breadcrumbs,
  Card,
  Anchor,
  Flex,
  SimpleGrid,
  Image,
  Text,
  Title,
  createStyles,
  UnstyledButton,
  AspectRatio,
} from "@mantine/core"
import { useRouter } from "next/router"
import { RoomList } from "@/types/roomList"
import { useState } from "react"
import { posix } from "path"

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
    roomList: RoomList
  }[]

  activityList: ActivityList
}

export default function HotelsMap(props: Props) {
  const router = useRouter()
  const { hotelList, activityList } = props
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  })

  const [indexShowActivityInfo, setIndexShowActivityInfo] = useState<number>(-1)
  const [indexShowHotelInfo, setIndexShowHotelInfo] = useState<number>(-1)

  const getPriceList = (roomList: RoomList) => {
    let priceList: number[] = []
    roomList.forEach((room) => {
      priceList.push(room.price)
    })

    return priceList
  }

  function onClickActivityMarker(index: number) {
    setIndexShowActivityInfo(index)
  }
  function onClickHotelMarker(index: number) {
    setIndexShowHotelInfo(index)
  }

  const HotelMarkers = hotelList.map((hotel, index) => (
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
        onClick={() => onClickHotelMarker(index)}
      />
      {index == indexShowHotelInfo && (
        <InfoWindowF key={index} position={{ lat: Number(hotel.latitude + 0.0015), lng: Number(hotel.longitude) }}>
          <UnstyledButton>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section
                component="a"
                onClick={() => {
                  router.push({
                    pathname: "/hotel/[hotel_id]",
                    query: {
                      hotel_id: hotel.hotel_id,
                      name: hotel.name,
                      description: hotel.description,
                      latitude: hotel.latitude,
                      longitude: hotel.longitude,
                      image: hotel.image,
                      region: hotel.region,
                      roomList: JSON.stringify(hotel.roomList),
                    },
                  })
                }}
              >
                <AspectRatio ratio={1920 / 1080}>
                  <Image maw={300} src={hotel.image} alt={hotel.name} />
                </AspectRatio>
                <Flex direction={"column"} justify={"flex-end"}>
                  <Text ta="center" fw={700} fz="lg">
                    {hotel.name}
                  </Text>
                  <Text ta="center" fz="md">
                    ¥ {getPriceList(hotel.roomList).sort()[0].toLocaleString()} ~
                  </Text>
                </Flex>
              </Card.Section>
            </Card>
          </UnstyledButton>
        </InfoWindowF>
      )}
    </>
  ))

  const activityMarkers = activityList.map((activity, index) => (
    <>
      <MarkerF
        key={index}
        position={{ lat: Number(activity.latitude), lng: Number(activity.longitude) }}
        onClick={() => onClickActivityMarker(index)}
      />
      {index == indexShowActivityInfo && (
        <InfoWindowF position={{ lat: Number(activity.latitude + 0.0015), lng: Number(activity.longitude) }}>
          <Card
            style={{ width: "200px" }}
            padding="1"
            shadow="sm"
            key={index}
            radius="md"
            component="a"
            href="#"
            onClick={() => router.push(activity.url)}
          >
            <AspectRatio ratio={1920 / 1080}>
              <Image maw={300} mx="auto" src={activity.image} alt={activity.name} fit={"contain"} />
            </AspectRatio>

            <Text mt={5}>{activity.name}</Text>
            <Text color="dimmed" size="sm" transform="uppercase" weight={700} mt="md">
              ¥ {activity.price.toLocaleString()}
            </Text>
          </Card>
        </InfoWindowF>
      )}
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
          {activityMarkers}
          {HotelMarkers}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  )
}
