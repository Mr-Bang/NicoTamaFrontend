import { Button, Group, createStyles, rem } from "@mantine/core"
import { useRouter } from "next/router"
import { useEffect } from "react"

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

export default function HotelTab() {
  const { classes } = useStyles()
  const router = useRouter()
  const path = router.pathname

  useEffect(() => {
    console.log(path)
  })

  return (
    <Group position='center'>
      <Button
        className={"/hotel/[id]" == path ? classes.active : classes.root}
        variant='default'
        onClick={() => router.push("/hotel/index")}
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
        写真・動画(76)
      </Button>
      <Button
        className={"/map" == path ? classes.active : classes.root}
        variant='default'
        component='a'
        onClick={() => router.push("/map")}
      >
        地図・アクセス
      </Button>
      <Button variant='default' component='a' className={classes.root}>
        お客様の声(567)
      </Button>
      <Button variant='default' component='a' className={classes.root}>
        クーポン一覧
      </Button>
    </Group>
  )
}
