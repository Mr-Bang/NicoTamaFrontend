import MapLeftBar from "@/components/map/MapLeftBar"
import { getHotelList } from "@/services/hotellist"
import { getRoomList } from "@/services/roomlist"
import { HotelList } from "@/types/hotelList"
import { RoomList } from "@/types/roomList"
import { Box, Breadcrumbs, Card, Anchor, Grid, SimpleGrid, Image, Text, Title, createStyles } from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}))

const regions = [
  { name: "楽天トラベルトップ", href: "/" },
  { name: "首都圏", href: "/SearchPageMetropolitan" },
  { name: "東京23区", href: "/SearchPageTokyo" },
  { name: "世田谷・目黒・品川・大田", href: "/SearchPageTokyo" },
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
    roomList: RoomList
  }[]
}

export default function HotelList(props: Props) {
  const { hotelList } = props
  const { classes } = useStyles()
  const router = useRouter()

  const getPriceList = (roomList: RoomList) => {
    let priceList: number[] = []
    roomList.forEach((room) => {
      priceList.push(room.price)
    })

    return priceList
  }

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
              <Card className={classes.card} shadow='sm' padding='lg' radius='md' withBorder key={index}>
                <Card.Section
                  component='a'
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
                  <Image src={hotel.image} alt={hotel.name} />
                  <Text ta='center' fw={700} fz='lg'>
                    {hotel.name}
                  </Text>
                  <Text ta='center' fz='md'>
                    ¥ {getPriceList(hotel.roomList).sort()[0].toLocaleString()} ~
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

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { area } = context.query
  const resHotelList: HotelList = await getHotelList(area as string)

  let hotelList: {
    hotel_id: number
    name: string
    description: string
    latitude: number
    longitude: number
    image: string
    region: string
    roomList: RoomList
  }[] = []

  // ループを `for...of` に変更
  for (const hotel of resHotelList) {
    const roomList = await getRoomList(hotel.hotel_id)

    hotelList.push({
      ...hotel,
      roomList: roomList,
    })
  }

  console.log(hotelList)

  return {
    props: {
      hotelList: hotelList,
    },
  }
}
