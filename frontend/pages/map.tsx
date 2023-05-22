import HotelTab from "@/components/hotel/HotelTab"
import ActivityList from "@/components/map/ActivityList"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getActivityList } from "@/services/activity"
import { Hotel } from "@/types/hotel"
import { Anchor, Box, Breadcrumbs, Center, Container, Flex, Grid, SimpleGrid, Text, Title } from "@mantine/core"
import { InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { GetServerSidePropsContext } from "next"
import { useEffect } from "react"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { Area, areaDetail } from "@/types/area"

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

  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: areaDetail[hotel.region as Area] },
  ].map((breadcrumb, index) =>
    breadcrumb.href ? (
      <Anchor href={breadcrumb.href} key={index}>
        {breadcrumb.name}
      </Anchor>
    ) : (
      <Text key={index}>{breadcrumb.name}</Text>
    )
  )

  return (
    <>
      <Breadcrumbs separator='>' mt='xs'>
        {breadcrumbs}
      </Breadcrumbs>
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
          <ActivityList activityList={activityList} />
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
