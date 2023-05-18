import MapLeftBar from "@/components/map/MapLeftBar"
import { HotelList, getHotelList } from "@/services/hotellist"
import { RoomList, getRoomList } from "@/services/roomlist"
import { Box, Breadcrumbs, Card, Anchor, Grid, SimpleGrid, Image, Text, Title } from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

const regions = [
  { name: "楽天トラベルトップ", href: "/" },
  { name: "首都圏", href: "/" },
  { name: "東京23区", href: "/" },
  { name: "世田谷・目黒・品川・大田" },
].map((region, index) =>
  region.href ? (
    <Anchor href={region.href} key={index}>
      {region.name}
    </Anchor>
  ) : (
    <Text key={index}>{region.name}</Text>
  )
)

type Props = {
  hotelList: {
    hotel_id: number
    name: string
    description: string
    latitude: number
    longitude: number
    image: string
    region: string
    priceList: number[]
  }[]
}

export default function Nansei(props: Props) {
  const { hotelList } = props
  const router = useRouter()

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
        <Title order={2}>世田谷・目黒・品川・大田</Title>
      </Box>
      <Grid>
        <Grid.Col span='auto'>
          <MapLeftBar />
        </Grid.Col>
        <Grid.Col span={6}>
          <SimpleGrid cols={3}>
            {hotelList.map((hotel, index) => (
              <Card shadow='sm' padding='lg' radius='md' withBorder key={index}>
                <Card.Section
                  component='a'
                  onClick={() => {
                    router.push(
                      {
                        pathname: "/hotel/[id]",
                        query: {
                          id: hotel.hotel_id,
                          name: hotel.name,
                          description: hotel.description,
                          latitude: hotel.description,
                          longitude: hotel.description,
                          image: hotel.image,
                          region: hotel.region,
                        },
                      },
                      "/hotel/" + hotel.hotel_id
                    )
                  }}
                >
                  <Image src={hotel.image} alt={hotel.name} />
                  <Text ta='center' fw={700} fz='lg'>
                    {hotel.name}
                  </Text>
                  <Text ta='center' fz='md'>
                    {/* ¥ {hotel.price.toLocaleString()} ~ */}
                  </Text>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span='auto'>
          <Box sx={{ width: 600 }}></Box>
        </Grid.Col>
      </Grid>
    </>
  )
}

const getPriceList = (roomList: RoomList) => {
  let priceList: number[] = []
  roomList.forEach((room) => {
    priceList.push(room.price)
  })
  return {
    priceList,
  }
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { area } = context.query
  const resHotelList: HotelList = await getHotelList(area as string)
  const hotelList = resHotelList.forEach(async (hotel) => {
    return {
      ...hotel,
      priceList: getPriceList(await getRoomList(hotel.hotel_id)),
    }
  })

  return {
    props: {
      hotelList: hotelList,
    },
  }
}
