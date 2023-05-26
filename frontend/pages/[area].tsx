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
  Pagination,
} from "@mantine/core"
import { GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"
import { ActivityList } from "@/types/activityList"
import { Area, areaDetail } from "@/types/area"
import { faHotel, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import AreaTab from "@/components/area/areaTab"

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

const itemsPerPage = 9

export default function HotelList(props: Props) {
  const { hotelList, activityList } = props
  const { classes } = useStyles()
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"hotel" | "activity">("hotel")
  const [activePage, setActivePage] = useState(1)

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

  const hotelCards = hotelList.map((hotel, index) => (
    <UnstyledButton key={index} className={classes.item}>
      <Card shadow='sm' padding='lg' radius='md' withBorder>
        <Card.Section
          sx={{ height: 250 }}
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
          <AspectRatio ratio={1920 / 1080}>
            <Image src={hotel.image} alt={hotel.name} />
          </AspectRatio>
          <Flex direction={"column"} justify={"flex-end"}>
            <Text ta='center' fw={700} fz='lg'>
              {hotel.name}
            </Text>
            <Text ta='center' fz='md'>
              ¥ {getPriceList(hotel.roomList).sort()[0].toLocaleString()} ~
            </Text>
          </Flex>
        </Card.Section>
      </Card>
    </UnstyledButton>
  ))

  const activityCards = activityList.map((activity, index) => (
    <UnstyledButton key={index} className={classes.item}>
      <Card shadow='sm' padding='lg' radius='md' withBorder>
        <Card.Section
          sx={{ height: 250 }}
          component='a'
          onClick={() => {
            router.push(activity.url)
          }}
        >
          <AspectRatio ratio={1920 / 1080}>
            <Image src={activity.image} alt={activity.name} />
          </AspectRatio>
          <Flex direction={"column"} justify={"flex-end"}>
            <Text ta='center' fw={700} fz='lg'>
              {activity.name}
            </Text>
            <Text ta='center' fz='md'>
              ¥ {activity.price} ~
            </Text>
          </Flex>
        </Card.Section>
      </Card>
    </UnstyledButton>
  ))

  const startIndex = (activePage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedCards =
    viewMode == "hotel" ? hotelCards.slice(startIndex, endIndex) : activityCards.slice(startIndex, endIndex)

  const total = Math.ceil(viewMode == "hotel" ? hotelCards.length / itemsPerPage : activityCards.length / itemsPerPage)

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
        <Flex w={"100%"}>
          <Title order={2}>{areaDetail[area]}</Title>
          <Flex ml='auto' mb={-15} align={"flex-end"}>
            <FontAwesomeIcon size='xl' color='#0000ff' icon={faHotel} />
            <Text ml={"xs"}>Hotel</Text>
            <Box sx={{ width: 20 }} />
            <FontAwesomeIcon size='xl' color='#ff0000' icon={faLocationDot} />
            <Text ml={"xs"}>Activity</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex>
        <MapLeftBar />
        <Container sx={{ width: 3200 }}>
          <AreaTab viewMode={viewMode} setViewMode={setViewMode} setActivePage={setActivePage} />
          <SimpleGrid cols={3}>{displayedCards}</SimpleGrid>
          <Flex justify={"flex-end"} mt={"xl"}>
            <Pagination color='green' value={activePage} onChange={setActivePage} total={total} />
          </Flex>
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
