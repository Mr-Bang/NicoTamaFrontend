import MapLeftBar from "@/components/map/MapLeftBar"
import { Box, Container, Flex, Title } from "@mantine/core"
import HotelTab from "@/components/hotel/HotelTab"
import HotelContent from "@/components/hotel/HotelContent"
import HotelBreadcrumb from "@/components/hotel/HotelBreadcrumb"
import { GetServerSidePropsContext } from "next"
import { Hotel } from "@/types/hotel"

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

  const roomList = query.roomList ? JSON.parse(query.roomList) : []

  return (
    <>
      <HotelBreadcrumb hotel={hotel} />
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={2}>{hotel.name}</Title>
      </Box>
      <Flex>
        <MapLeftBar />
        <Container>
          <HotelTab hotel={hotel} rooms={roomList} />
          <HotelContent hotel={hotel} roomList={roomList} />
	</Container>
        <Box sx={{ width: 600 }} />
      </Flex>
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
