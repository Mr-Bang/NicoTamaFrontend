import { Hotel } from "@/types/hotel"
import { RoomList } from "@/types/roomList"
import { Box, Badge, Button, Card, Image, Grid, Group, SimpleGrid, Text } from "@mantine/core"

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
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Card.Section>
                <Image src={room.image} height={260} width={550} alt={room.room_number.toString()} />
              </Card.Section>

              <Group position='apart' mt='md' mb='xs'>
                <Text weight={500}>{room.room_number.toString()} 号室</Text>
                {room.available ? (
                  <Badge color='blue' variant='light'>
                    空室あり
                  </Badge>
                ) : (
                  <Badge color='pink' variant='light'>
                    満室
                  </Badge>
                )}
              </Group>

              <Text size='sm' color='dimmed'></Text>

              {room.available ? (
                <Button variant='outline' fullWidth mt='md' radius='md'>
                  予約する
                </Button>
              ) : (
                ""
              )}
            </Card>
          </Grid.Col>
        ))}
      </SimpleGrid>
    </Grid>
  )
}
