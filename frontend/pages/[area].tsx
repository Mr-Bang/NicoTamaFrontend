import HotelsMap from "@/components/HotelsMap"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getHotelList } from "@/services/hotellist"
import { getRoomList } from "@/services/roomlist"
import { HotelList } from "@/types/hotelList"
import { RoomList } from "@/types/roomList"
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
} from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  item: {
    borderRadius: theme.radius.md,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },
  },
}))

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

  const area = hotelList.length ? hotelList[0].region : "404 not found"
  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: area },
  ].map((breadcrumb, index) =>
    breadcrumb.href ? (
      <Anchor href={breadcrumb.href} key={index}>
        {breadcrumb.name}
      </Anchor>
    ) : (
      <Text key={index}>{breadcrumb.name}</Text>
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
        {breadcrumbs}
      </Breadcrumbs>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={2}>{area}</Title>
      </Box>
      <Flex>
        <MapLeftBar />
        <Container sx={{ width: 3200 }}>
          <SimpleGrid cols={3}>
            {hotelList.map((hotel, index) => (
              <UnstyledButton key={index} className={classes.item}>
                <Card shadow='sm' padding='lg' radius='md' withBorder>
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
                    <Image width={300} height={170} fit='contain' src={hotel.image} alt={hotel.name} />
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
        </Container>
        <HotelsMap hotelList={hotelList} />
      </Flex>
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
