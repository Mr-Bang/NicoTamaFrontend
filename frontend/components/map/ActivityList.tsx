import {
  Box,
  createStyles,
  Card,
  Image,
  Text,
  AspectRatio,
  Stack,
  ScrollArea,
  Center,
  MantineTheme,
  rem
} from "@mantine/core"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  card: {
    borderRadius: theme.radius.md,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.03)",
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
        ¥ {activity.price.toLocaleString()}
      </Text>
    </Card>
  ))

  return (
    <Box
      sx={(theme: MantineTheme) => ({
        height: "105vh",
        width: 400,
        border: `${rem(2)} solid #73AB23`,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.md,
	padding: theme.spacing.xl,
      })}
    >
      <Center>
        <ScrollArea h={"100vh"} type="hover" w={450}>
          <Stack>{cards}</Stack>
        </ScrollArea>
      </Center>
    </Box>
  ) 
}
