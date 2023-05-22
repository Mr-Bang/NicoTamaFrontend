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
  rem,
  Flex,
} from "@mantine/core"
import { useRouter } from "next/router"
import NextImage from "next/image"
import HealthIcon from "../../public/rakuten_healthcare_icon.png"

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
  distanceList: {
    text: string
    value: number
    durationText: string
  }[]
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
  const { activityList, distanceList } = props
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
      <Text color='dimmed' size='sm' transform='uppercase' weight={700} mt='md'>
        ¥ {activity.price.toLocaleString()}
      </Text>
      {distanceList.length > 0 && (
        <Flex justify={"flex-end"} align={"center"}>
          <NextImage src={HealthIcon} width={20} height={20} alt={""} />
          <Text className={classes.title} p={5}>
            {Math.round(distanceList[index].value / 0.6)}歩
          </Text>
          <Text color='dimmed' size='sm' p={5}>
            {distanceList[index].text}
          </Text>
          <Text color='dimmed' size='sm' p={5}>
            {distanceList[index].durationText}
          </Text>
        </Flex>
      )}
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
        <ScrollArea h={"100vh"} type='hover' w={450}>
          <Stack>{cards}</Stack>
        </ScrollArea>
      </Center>
    </Box>
  )
}
