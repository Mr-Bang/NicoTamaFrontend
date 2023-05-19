import MapLeftBar from "@/components/map/MapLeftBar"
import { HotelList, getHotelList } from "@/services/hotellist"
import { RoomList, getRoomList } from "@/services/roomlist"
import { Box, Breadcrumbs, Card, Anchor, Grid, SimpleGrid, Image, Text, Title, createStyles, UnstyledButton } from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  item: {
    borderRadius: theme.radius.md,
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },
}));

const regions = [
  { name: "楽天トラベルトップ", href: "/" },
  { name: "首都圏", href: "/SearchPageMetropolitan" },
  { name: "東京23区", href: "/SearchPageTokyo" },
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
    roomList: RoomList
  }[]
}

export default function HotelList(props: Props) {
  const { hotelList } = props
  const router = useRouter()

  const { classes } = useStyles();

  const area = hotelList.length ? hotelList[0].region : "404 not found"
  const regions = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: area},
  ].map((region, index) =>
    region.href ? (
      <Anchor href={region.href} key={index}>
        {region.name}
      </Anchor>
    ) : (
      <Text key={index}>{region.name}</Text>
    )
  )

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
        <Title order={2}>{area}</Title>
      </Box>
      <Grid>
        <Grid.Col span='auto'>
          <MapLeftBar />
        </Grid.Col>
        <Grid.Col span={6}>
          <SimpleGrid cols={3}>
            {hotelList.map((hotel, index) => (
	      <UnstyledButton key={index} className={classes.item}>
                <Card shadow='sm' padding='lg' radius='md' withBorder>
                  <Card.Section
                    component='a'
	            ref={(node) => console.log(node)}
                    onClick={() => {
                      router.push(
                        {
                          pathname: "/hotel/[id]",
                          query: {
                            id: hotel.hotel_id,
                            name: hotel.name,
                            description: hotel.description,
                            latitude: hotel.latitude,
                            longitude: hotel.longitude,
                            image: hotel.image,
                            region: hotel.region,
                            roomList: JSON.stringify(hotel.roomList),
                          },
                        },
                        "/hotel/" + hotel.hotel_id
                      )
                    }}
                  >
                    <Image width={300} height={170} fit="contain" src={hotel.image} alt={hotel.name} />
                    <Text ta='center' fw={700} fz='lg'>
                      {hotel.name}
                    </Text>
                    <Text ta='center' fz='md'>
                      ¥ {getPriceList(hotel.roomList).sort()[0].toLocaleString()} ~
                    </Text>
                  </Card.Section>
                </Card>
	      </UnstyledButton>
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

  for (const hotel of resHotelList) {
    const roomList = await getRoomList(hotel.hotel_id)

    hotelList.push({
      ...hotel,
      roomList: roomList,
    })
  }

  return {
    props: {
      hotelList: hotelList,
    },
  }
}
