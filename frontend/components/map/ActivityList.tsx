import { createStyles, Card, Image, Text, AspectRatio, Stack, ScrollArea } from "@mantine/core"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.sm,
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
    <Card
      key={index}
      p='md'
      radius='md'
      component='a'
      href='#'
      className={classes.card}
      onClick={() => router.push(activity.url)}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={activity.image} alt={activity.name} fit={"contain"} />
      </AspectRatio>

      <Text className={classes.title} mt={5}>
        {activity.name}
      </Text>
      <Text color='dimmed' size='xs' transform='uppercase' weight={700} mt='md'>
        {activity.price}
      </Text>
    </Card>
  ))

  return (
    <ScrollArea h={"100vh"} w={450}>
      <Stack>{cards}</Stack>
    </ScrollArea>
  )
}
