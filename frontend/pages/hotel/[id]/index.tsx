import MapLeftBar from "@/components/map/MapLeftBar"
import { Breadcrumbs, Anchor, Box, Center, Grid, Text, Title } from "@mantine/core"
import HotelTab from "@/components/hotel/HotelTab"
import HotelContent from "@/components/hotel/HotelContent"
import { useRouter } from "next/router"

export default function Hotel() {
  const router = useRouter()

  const hotel = router.query

  const roomList = hotel.roomList ? JSON.parse(hotel.roomList as string) : []

  const area = hotel.region
  const hotelName = hotel.name
  const hotelImage = hotel.image
  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: area, href: "/"+area },
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
          <HotelTab />
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
