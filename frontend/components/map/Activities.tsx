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
  Tabs,
  TabsValue,
  Title,
} from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { useRouter } from "next/router"
import NextImage from "next/image"
import HealthIcon from "../../public/rakuten_healthcare_icon.png"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { ActivityList } from "@/types/activityList"

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
  activityList: ActivityList
  activeTab: number
  setActiveTab: Dispatch<SetStateAction<number>>
  setActivityPinAnimation?: Dispatch<
    SetStateAction<
      | {
          key: number
          animation: google.maps.Animation | null
        }
      | undefined
    >
  >
}

export default function Activities(props: Props) {
  const { classes } = useStyles()
  const { activityList, distanceList, activeTab, setActiveTab, setActivityPinAnimation } = props
  const router = useRouter()
  const largeScreen = useMediaQuery("(min-width: 1600px)")

  function changeCategoryIdToValue(value: string) {
    switch (value) {
      case "all":
        return 0
      case "food":
        return 1
      case "outdoor":
        return 2
      case "ticket":
        return 3
      case "relax":
        return 4
      default:
        return -1
    }
  }

  function changeValueToCategoryId(value: number) {
    switch (value) {
      case 0:
        return "all"
      case 1:
        return "food"
      case 2:
        return "outdoor"
      case 3:
        return "ticket"
      case 4:
        return "relax"
      default:
        return "unknown"
    }
  }

  function onChangeTab(value: TabsValue) {
    setActiveTab(changeCategoryIdToValue(value as string))
  }

  function onMouseEnter(index: number) {
    setActivityPinAnimation && setActivityPinAnimation({ key: index, animation: google.maps.Animation.BOUNCE })
  }
  function onMouseLeave(index: number) {
    setActivityPinAnimation && setActivityPinAnimation({ key: index, animation: null })
  }

  const cards = activityList.map((activity, index) => (
    <Card
      key={index}
      p='md'
      radius='md'
      component='a'
      className={classes.card}
      onClick={() => window.open(activity.url, "_blank")}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
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
    <>
      <Title order={4} align='center' mt={-25} pb={5}>
        周辺のアクティビティ
      </Title>
      <Tabs variant='outline' value={changeValueToCategoryId(activeTab)} onTabChange={(value) => onChangeTab(value)}>
        <Tabs.List grow position='center'>
          <Tabs.Tab value='all'>all</Tabs.Tab>
          <Tabs.Tab value='food'>food</Tabs.Tab>
          <Tabs.Tab value='outdoor'>outdoor</Tabs.Tab>
          <Tabs.Tab value='ticket'>ticket</Tabs.Tab>
          <Tabs.Tab value='relax'>relax</Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Box
        sx={(theme: MantineTheme) => ({
          height: "105vh",
          width: largeScreen ? 400 : 340,
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
    </>
  )
}
