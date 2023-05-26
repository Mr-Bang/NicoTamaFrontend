import { Hotel } from "@/types/hotel"
import { RoomList } from "@/types/roomList"
import { Button, Group, createStyles, rem } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useRouter } from "next/router"
import { Dispatch, SetStateAction } from "react"

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
  viewMode: "hotel" | "activity"
  setViewMode: Dispatch<SetStateAction<"hotel" | "activity">>
  setActivePage: Dispatch<SetStateAction<number>>
}

export default function AreaTab(props: Props) {
  const { classes } = useStyles()
  const { viewMode, setViewMode, setActivePage } = props

  const largeScreen = useMediaQuery("(min-width: 1600px)")

  function onClickTab(viewMode: "hotel" | "activity") {
    setViewMode(viewMode)
    setActivePage(1)
  }

  return (
    <Group sx={{ width: largeScreen ? 1100 : 930 }}>
      <Button
        className={viewMode == "hotel" ? classes.active : classes.root}
        variant='default'
        component='a'
        onClick={() => onClickTab("hotel")}
      >
        Hotel
      </Button>
      <Button
        variant='default'
        component='a'
        className={viewMode == "activity" ? classes.active : classes.root}
        onClick={() => onClickTab("activity")}
      >
        Activity
      </Button>
    </Group>
  )
}
