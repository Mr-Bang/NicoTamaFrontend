import MapLeftBar from "@/components/map/MapLeftBar"
import { Breadcrumbs, Anchor, Box, Center, Grid, Text, Title } from "@mantine/core"
import HotelTab from "@/components/hotel/HotelTab"
import HotelContent from "@/components/hotel/HotelContent"
import { useRouter } from "next/router"
import SampleHotel from "@/components/hotel/SampleHotel"
import { GetServerSidePropsContext } from "next"
import { useEffect } from "react"
import { Hotel } from "@/types/hotel"

const regions = [
  { name: "楽天トラベルトップ", href: "/" },
  { name: "首都圏", href: "/" },
  { name: "東京23区", href: "/" },
  { name: "世田谷・目黒・品川・大田", href: "/" },
  { name: "住友不動産ホテル ヴィラフォンテーヌグランド東京田町" },
].map((region, index) =>
  region.href ? (
    <Anchor href={region.href} key={index}>
      {region.name}
    </Anchor>
  ) : (
    <Text fw={700} key={index}>
      {region.name}
    </Text>
  )
)

type Props = {
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
  const { query } = props

  const hotel: Hotel = {
    hotel_id: Number(query.hotel_id),
    name: query.name as string,
    description: query.description as string,
    latitude: Number(query.latitude),
    longitude: Number(query.longitude),
    image: query.image as string,
    region: query.region as string,
  }

  const area = hotel.region
  const hotelName = hotel.name
  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: area, href: "/" + area },
    { name: hotelName },
  ].map((breadcrumb, index) =>
    breadcrumb.href ? (
      <Anchor href={breadcrumb.href} key={index}>
        {breadcrumb.name}
      </Anchor>
    ) : (
      <Text fw={700} key={index}>
        {breadcrumb.name}
      </Text>
    )
  )
  // クエリパラメータをパースしてリストに変換
  const roomList = query.roomList ? JSON.parse(query.roomList) : []

  useEffect(() => {
    console.log(query)
  }, [])

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
        <Title order={2}>{hotelName}</Title>
      </Box>
      <Grid>
        <Grid.Col span='auto'>
          <MapLeftBar />
        </Grid.Col>
        <Grid.Col span={7}>
          <HotelTab hotel={hotel} rooms={roomList} />
          <Center>
            <HotelContent roomList={roomList} />
          </Center>
        </Grid.Col>
        <Grid.Col span='auto'>
          <Box sx={{ width: 300 }}></Box>
        </Grid.Col>
      </Grid>
    </>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context
  return {
    props: {
      query,
    },
  }
}