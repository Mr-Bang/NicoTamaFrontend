import MapLeftBar from "@/components/map/MapLeftBar"
import { Breadcrumbs, Anchor, Box, Center, Grid, Text, Title } from "@mantine/core"
import HotelTab from "@/components/HotelTab"
import SampleHotel from "@/components/hotel/SampleHotel"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { HotelList } from "@/services/hotellist"

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

export default function Hotel() {
  const router = useRouter()

  const hotel = router.query

  // クエリパラメータをパースしてリストに変換
  const roomList = hotel.roomList ? JSON.parse(hotel.roomList as string) : []

  useEffect(() => {
    console.log(roomList)
  }, [])

  return (
    <>
      <Breadcrumbs separator='>' mt='xs'>
        {regions}
      </Breadcrumbs>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={2}>住友不動産ホテル ヴィラフォンテーヌグランド東京田町</Title>
      </Box>
      <Grid>
        <Grid.Col span='auto'>
          <MapLeftBar />
        </Grid.Col>
        <Grid.Col span={7}>
          <HotelTab />
          <Center>
            <SampleHotel rooms={roomList} />
          </Center>
        </Grid.Col>
        <Grid.Col span='auto'>
          <Box sx={{ width: 300 }}></Box>
        </Grid.Col>
      </Grid>
    </>
  )
}
