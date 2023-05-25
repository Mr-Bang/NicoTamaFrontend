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
        <Box sx={{ width: 890 }}>
          <Image radius='md' src={hotel.image} alt={hotel.name} />
        </Box>
      </Grid.Col>
      <SimpleGrid cols={2} spacing='xs'>
        {roomList.map((room, index) => (
            <Card shadow='sm' padding='lg' radius='md' withBorder key={index}>
              <Card.Section>
                <Image src={room.image} height={260} width={445} alt={room.room_type} />
              </Card.Section>

              <Group position='apart' mt='md' mb='xs'>
                <Text weight={500}>{room.room_type}</Text>
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
                <Button
                  data-disabled
                  variant='outline'
                  fullWidth
                  mt='md'
                  radius='md'
                  sx={{ "&[data-disabled]": { pointerEvents: "all" } }}
                  onClick={(event) => event.preventDefault()}
                >
                  予約する
                </Button>
              )}
            </Card>
        ))}
      </SimpleGrid>
    </Grid>
  )
}
