import { createStyles, Card, Image, Text, AspectRatio, Stack, ScrollArea, Center } from "@mantine/core"

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

  const cards = activityList.map((activity) => (
    <Card key={activity.url} p='md' radius='md' component='a' href='#' className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={activity.image} fit={"contain"} />
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
    <ScrollArea h={"100vh"} w={480}>
      <Stack>{cards}</Stack>
    </ScrollArea>
  )
}
