import { RoomList } from "@/services/roomlist"
import { Box, Image, Grid, SimpleGrid } from "@mantine/core"

const sampleHotel = {
  name: "住友不動産ホテル　ヴィラフォンテーヌグランド東京田町",
  image: "https://trvimg.r10s.jp/share/image_up/80762/LARGE/68efbfe47ae1a0860d17741a1957b54275782207.47.1.26.2.jpg",
}

type Props = {
  roomList: RoomList
}

export default function SampleHotel(props: Props) {
  const { roomList } = props

  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Box maw={1200} mx='auto'>
          <Image radius='md' src={sampleHotel.image} alt={sampleHotel.name} />
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
