import { RoomList } from "@/services/roomlist"
import { Box, Image, Grid, SimpleGrid } from "@mantine/core"

const sampleHotel = {
  name: "住友不動産ホテル　ヴィラフォンテーヌグランド東京田町",
  image: "https://trvimg.r10s.jp/share/image_up/80762/LARGE/68efbfe47ae1a0860d17741a1957b54275782207.47.1.26.2.jpg",
}

const rooms = [
  {
    name: "モデレートツインルーム",
    image: "https://trvimg.r10s.jp/share/image_up/80762/LARGE/06edab8fc7bf41abb5f8f35d7b398ad395b99027.47.9.26.3.jpg",
  },
  {
    name: "おまかせ",
    image: "https://trvimg.r10s.jp/share/image_up/80762/LARGE/3128cf52b31fd62fe521277c8f980fa132d690d1.47.1.26.2.jpg",
  },
  {
    name: "モデレートツインルーム",
    image: "https://trvimg.r10s.jp/share/image_up/80762/LARGE/06edab8fc7bf41abb5f8f35d7b398ad395b99027.47.9.26.3.jpg",
  },
  {
    name: "おまかせ",
    image: "https://trvimg.r10s.jp/share/image_up/80762/LARGE/3128cf52b31fd62fe521277c8f980fa132d690d1.47.1.26.2.jpg",
  },
].map((room, index) => (
  <Grid.Col span={4} key={index}>
    <Image radius='md' src={room.image} alt={room.name} />
  </Grid.Col>
))

type Props = {
  rooms: RoomList
}

export default function SampleHotel(props: Props) {
  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Box maw={1200} mx='auto'>
          <Image radius='md' src={sampleHotel.image} alt={sampleHotel.name} />
        </Box>
      </Grid.Col>
      <SimpleGrid cols={2}>{rooms}</SimpleGrid>
    </Grid>
  )
}
