import HotelsMap from "@/components/HotelsMap"
import MapLeftBar from "@/components/map/MapLeftBar"
import { getHotelList } from "@/services/hotellist"
import { getRoomList } from "@/services/roomlist"
import { getActivityList } from "@/services/activity"
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
  AspectRatio,
} from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"
import { ActivityList } from "@/types/activityList"
import { Area, areaDetail } from "@/types/area"

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

  activityList: ActivityList
}

export default function HotelList(props: Props) {
  const { hotelList, activityList } = props
  const { classes } = useStyles()
  const router = useRouter()

  const area: Area = hotelList[0].region as Area
  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: areaDetail[area] },
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
      <Breadcrumbs separator=">" mt="xs">
        {breadcrumbs}
      </Breadcrumbs>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={2}>{areaDetail[area]}</Title>
      </Box>
      <Flex>
        <MapLeftBar />
        <Container sx={{ width: 3200 }}>
          <SimpleGrid cols={3}>
            {hotelList.map((hotel, index) => (
              <UnstyledButton key={index} className={classes.item}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section
                    sx={{ height: 250 }}
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
                      <Image src={hotel.image} alt={hotel.name} />
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
            ))}
          </SimpleGrid>
        </Container>

        <HotelsMap hotelList={hotelList} activityList={activityList} />
      </Flex>
    </>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { area } = context.query

  if (area !== "都心" && area !== "副都心" && area !== "東部" && area !== "北西部" && area !== "南西部") {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    }
  }

  const resHotelList: HotelList = await getHotelList(area as string)
  const resActivityList: ActivityList = await getActivityList(area as string)

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
      activityList: resActivityList,
    },
  }
}
