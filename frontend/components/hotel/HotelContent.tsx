import { Hotel } from "@/types/hotel"
import { RoomList } from "@/types/roomList"
import { Box, Image, Grid, SimpleGrid } from "@mantine/core"

type Props = {
  hotel: Hotel
  roomList: RoomList
}

export default function SampleHotel(props: Props) {
  const { hotel, roomList } = props

  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Box maw={1200} mx='auto'>
          <Image radius='md' src={hotel.image} alt={hotel.name} />
        </Box>
      </Grid.Col>
      <SimpleGrid cols={2}>
        {roomList.map((room, index) => (
          <Grid.Col span={4} key={index}>
            <Image radius='md' src={room.image} alt={room.room_number.toString()} />
          </Grid.Col>
        ))}
      </SimpleGrid>
    </Grid>
  )
}
