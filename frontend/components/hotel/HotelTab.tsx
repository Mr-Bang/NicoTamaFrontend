import { Hotel } from "@/types/hotel"
import { RoomList } from "@/types/roomList"
import { Button, Group, createStyles, rem } from "@mantine/core"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  root: {
    height: rem(42),
    paddingLeft: rem(20),
    paddingRight: rem(20),
    "&:not([data-disabled])": theme.fn.hover({
      backgroundColor: theme.fn.darken("#EAEAEA", 0.05),
      border: 0,
    }),
  },
  active: {
    backgroundColor: theme.fn.darken("#EAEAEA", 0.05),
    border: 0,
    paddingLeft: rem(20),
    paddingRight: rem(20),
  },
}))

type Props = {
  hotel: Hotel
  rooms: RoomList
}

export default function HotelTab(props: Props) {
  const { classes } = useStyles()
  const router = useRouter()
  const path = router.pathname
  const { hotel, rooms } = props

  return (
    <Group position='left' sx={{ width: 1400 }}>
      <Button
        className={"/hotel/[hotel_id]" == path ? classes.active : classes.root}
        variant='default'
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
              roomList: JSON.stringify(rooms),
            },
          })
        }}
      >
        施設紹介
      </Button>
      <Button className={classes.root} variant='default' component='a'>
        プラン一覧
      </Button>
      <Button variant='default' component='a' className={classes.root}>
        部屋一覧
      </Button>
      <Button variant='default' component='a' className={classes.root}>
        写真・動画
      </Button>
      <Button
        className={"/map" == path ? classes.active : classes.root}
        variant='default'
        component='a'
        onClick={() => {
          router.push({
            pathname: "/map",
            query: {
              hotel_id: hotel.hotel_id,
              name: hotel.name,
              description: hotel.description,
              latitude: hotel.latitude,
              longitude: hotel.longitude,
              image: hotel.image,
              region: hotel.region,
              roomList: JSON.stringify(rooms),
            },
          })
        }}
      >
        地図・アクセス
      </Button>
      <Button variant='default' component='a' className={classes.root}>
        お客様の声
      </Button>
      <Button variant='default' component='a' className={classes.root}>
        クーポン一覧
      </Button>
    </Group>
  )
}
