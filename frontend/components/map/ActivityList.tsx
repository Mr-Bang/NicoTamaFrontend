import {
  createStyles,
  Card,
  Image,
  Text,
  AspectRatio,
  Stack,
  ScrollArea,
  Center,
  UnstyledButton,
  SimpleGrid,
} from "@mantine/core"
import { useRouter } from "next/router"
import { useEffect } from "react"

const useStyles = createStyles((theme) => ({
  card: {
    borderRadius: theme.radius.md,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.05)",
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}))

interface Props {
  activityList: {
    name: string
    price: number
    image: string
    longitude: number
    latitude: number
    url: string
    region: string
  }[]
}

export default function ActivityList(props: Props) {
  const { classes } = useStyles()
  const { activityList } = props
  const router = useRouter()

  const cards = activityList.map((activity, index) => (
    <UnstyledButton key={index} className={classes.card}>
      <Card
        key={index}
        component='a'
        className={classes.card}
        onClick={() => router.push(activity.url)}
        shadow='sm'
        padding='lg'
        radius='md'
        withBorder
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={activity.image} fit={"contain"} />
        </AspectRatio>

        <Text className={classes.title} mt={5}>
          {activity.name}
        </Text>
        <Text size='xs' weight={700} mt='md' align='end'>
          ¥ {activity.price.toLocaleString()}
        </Text>
      </Card>
    </UnstyledButton>
  ))

  return (
    <ScrollArea h={"100vh"} mt={42}>
      <SimpleGrid cols={1}>{cards}</SimpleGrid>
    </ScrollArea>
  )
}
