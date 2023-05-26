import { Hotel } from "@/types/hotel"
import { RoomList } from "@/types/roomList"
import { Box, Badge, Button, Card, Image, Grid, Group, SimpleGrid, Text, Flex } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

type Props = {
  hotel: Hotel
  roomList: RoomList
}

export default function SampleHotel(props: Props) {
  const { hotel, roomList } = props

  const largeScreen = useMediaQuery("(min-width: 1600px)")

  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Box sx={{ width: largeScreen ? 1000 : 910 }}>
          <Image radius="md" src={hotel.image} alt={hotel.name} />
        </Box>
      </Grid.Col>
      <Box sx={{ width: largeScreen ? 1000 : 910 }}>
        <Flex>
          {roomList.map((room, index) => (
            <Card
              sx={{ width: largeScreen ? 500 : 450 }}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              key={index}
              ml={"md"}
            >
              <Card.Section>
                <Image src={room.image} height={260} width={largeScreen ? 550 : 480} alt={room.room_type} />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{room.room_type}</Text>
                {room.available ? (
                  <Badge color="blue" variant="light">
                    空室あり
                  </Badge>
                ) : (
                  <Badge color="pink" variant="light">
                    満室
                  </Badge>
                )}
              </Group>

              <Text size="sm" color="dimmed"></Text>

              {room.available ? (
                <Button variant="outline" fullWidth mt="md" radius="md">
                  予約する
                </Button>
              ) : (
                <Button
                  data-disabled
                  variant="outline"
                  fullWidth
                  mt="md"
                  radius="md"
                  sx={{ "&[data-disabled]": { pointerEvents: "all" } }}
                  onClick={(event) => event.preventDefault()}
                >
                  予約する
                </Button>
              )}
            </Card>
          ))}
        </Flex>
      </Box>
    </Grid>
  )
}
