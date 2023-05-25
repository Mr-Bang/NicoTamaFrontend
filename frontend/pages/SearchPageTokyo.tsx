import { useRouter } from "next/router"
import Image from "next/image"
import {
  Box,
  Breadcrumbs,
  Title,
  Grid,
  Container,
  Space,
  Text,
  SimpleGrid,
  Button,
  createStyles,
  rem,
  Anchor,
} from "@mantine/core"
import mapoftokyo from "../public/mapoftokyo.svg"
import { useMediaQuery } from "@mantine/hooks"

export default function Home() {
  const router = useRouter()
  const largeScreen = useMediaQuery("(min-width: 1600px)")

  const useStyles = createStyles((theme) => ({
    root: {
      height: rem(42),
      "&:not([data-disabled])": theme.fn.hover({
        backgroundColor: theme.fn.darken("#EAEAEA", 0.05),
        border: 0,
      }),
    },
    root2: {
      height: rem(42),
      "&:not([data-disabled])": theme.fn.hover({
        color: "#C92A2A",
      }),
    },
    root3: {
      height: rem(42),
      "&:not([data-disabled])": theme.fn.hover({
        color: "blue",
      }),
    },
  }))

  const { classes } = useStyles()

  const areaInfoList = [
    { name: "板橋", top: "465px", left: largeScreen ? "750px" : "650px", area: "北西部" },
    { name: "練馬", top: "505px", left: "610px", area: "北西部" },
    { name: "北区", top: "485px", left: "850px", area: "北西部" },
    { name: "中野", top: "615px", left: "700px", area: "北西部" },
    { name: "杉並", top: "665px", left: "620px", area: "北西部" },
    { name: "世田谷", top: "805px", left: "630px", area: "南西部" },
    { name: "目黒", top: "825px", left: "760px", area: "南西部" },
    { name: "品川", top: "875px", left: "840px", area: "南西部" },
    { name: "大田", top: "985px", left: "820px", area: "南西部" },
    { name: "足立", top: "455px", left: "990px", area: "東部" },
    { name: "葛飾", top: "525px", left: "1100px", area: "東部" },
    { name: "江戸川", top: "665px", left: "1160px", area: "東部" },
    { name: "荒川", top: "555px", left: "960px", area: "東部" },
    { name: "台東", top: "605px", left: "960px", area: "東部" },
    { name: "墨田", top: "635px", left: "1020px", area: "東部" },
    { name: "江東", top: "725px", left: "1030px", area: "東部" },
    { name: "豊島", top: "565px", left: "800px", area: "副都心" },
    { name: "文京", top: "595px", left: "875px", area: "副都心" },
    { name: "新宿", top: "675px", left: "800px", area: "副都心" },
    { name: "中央", top: "735px", left: "940px", area: "都心" },
    { name: "港区", top: "795px", left: "865px", area: "都心" },
    { name: "渋谷", top: "735px", left: "750px", area: "副都心" },
    { name: "千代田", top: "685px", left: "890px", area: "都心" },
  ]
  const area23InfoList = [
    { name: "都心", left: "860px", top: "720px" },
    { name: "副都心", left: "785px", top: "610px" },
    { name: "北西部", left: "600px", top: "540px" },
    { name: "南西部", left: "680px", top: "860px" },
    { name: "東部", left: "1120px", top: "570px" },
  ]

  const stationInfoList = [
    { name: "新宿駅", region: "副都心" },
    { name: "新橋駅", region: "都心" },
    { name: "池袋駅", region: "副都心" },
    { name: "上野駅", region: "東部" },
    { name: "渋谷駅", region: "副都心" },
    { name: "赤坂見附駅", region: "都心" },
    { name: "八王子駅", region: "SearchPageTokyo" },
    { name: "二子玉川駅", region: "北西部" },
    { name: "恵比寿駅", region: "副都心" },
    { name: "台場駅", region: "都心" },
    { name: "浜松町駅", region: "都心" },
    { name: "六本木駅", region: "都心" },
    { name: "銀座駅", region: "都心" },
    { name: "大手町駅", region: "都心" },
    { name: "立川駅", region: "SearchPageTokyo" },
    { name: "五反田駅", region: "南西部" },
    { name: "錦糸町駅", region: "" },
    { name: "京橋駅", region: "都心" },
    { name: "有楽町駅", region: "都心" },
    { name: "東京国際空港", region: "南西部" },
    { name: "三宅島空港", region: "SearchPageTokyo" },
    { name: "新島空港", region: "SearchPageTokyo" },
    { name: "神津島空港", region: "SearchPageTokyo" },
    { name: "大島空港", region: "SearchPageTokyo" },
    { name: "八丈島空港", region: "SearchPageTokyo" },
    { name: "調布飛行場", region: "SearchPageTokyo" },
  ]

  const popularInfoList = [
    { name: "東京タワー", region: "都心" },
    { name: "浅草寺", region: "東部" },
    { name: "東京ディズニーリゾート®︎", region: "東部" },
    { name: "東京ドーム", region: "都心" },
    { name: "国立競技場", region: "副都心" },
    { name: "神宮球場", region: "副都心" },
    { name: "東京スタジアム", region: "SearchPageTokyo" },
    { name: "東京国際フォーラム", region: "都心" },
    { name: "東京ビッグサイト", region: "都心" },
    { name: "日本武道館", region: "都心" },
    { name: "上野動物園", region: "東部" },
    { name: "お台場", region: "都心" },
    { name: "奥多摩湖", region: "SearchPageTokyo" },
    { name: "国営昭和記念公園", region: "SearchPageTokyo" },
  ]

  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区" },
  ].map((breadcrumb, index) =>
    breadcrumb.href ? (
      <Anchor href={breadcrumb.href} key={index}>
        {breadcrumb.name}
      </Anchor>
    ) : (
      <Text fw={700} key={index}>
        {breadcrumb.name}
      </Text>
    )
  )

  return (
    <>
      <Breadcrumbs separator='>' mt='xs'>
        {breadcrumbs}
      </Breadcrumbs>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={1}>東京23区</Title>
      </Box>
      <Grid>
        <Grid.Col span='auto'>
          <Container>
            <Box
              sx={{
                background: "76AE25",
                border: "1px solid #76AE25",
                borderRadius: "5px",
              }}
            >
              <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25" }}>
                地域名から探す
              </Title>
              <Container>
                <>
                  {area23InfoList.map((area23Info, index) => (
                    <div key={index}>
                      <Anchor
                        className={classes.root3}
                        variant='default'
                        component='a'
                        onClick={() => router.push("/" + area23Info.name)}
                      >
                        {area23Info.name}
                      </Anchor>
                    </div>
                  ))}
                </>
              </Container>
            </Box>

            <Space h='xl' />

            <Box
              sx={{
                background: "76AE25",
                border: "1px solid #76AE25",
                borderRadius: "5px",
              }}
            >
              <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25" }}>
                主要駅・主要空港周辺から探す
              </Title>

              <Container>
                <SimpleGrid cols={2} verticalSpacing='xs'>
                  {stationInfoList.map((stationInfo, index) => (
                    <div key={index}>
                      <Anchor
                        className={classes.root3}
                        variant='default'
                        component='a'
                        onClick={() => router.push("/" + stationInfo.region)}
                      >
                        {stationInfo.name}
                      </Anchor>
                    </div>
                  ))}
                </SimpleGrid>
              </Container>
            </Box>
            <Space h='xl' />
            <Box
              sx={{
                background: "76AE25",
                border: "1px solid #76AE25",
                borderRadius: "5px",
              }}
            >
              <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25" }}>
                人気スポットから探す
              </Title>
              <Container>
                <SimpleGrid cols={2} verticalSpacing='xs'>
                  {popularInfoList.map((popularInfo, index) => (
                    <div key={index}>
                      <Anchor
                        className={classes.root3}
                        variant='default'
                        component='a'
                        onClick={() => router.push("/" + popularInfo.region)}
                      >
                        {popularInfo.name}
                      </Anchor>
                    </div>
                  ))}
                </SimpleGrid>
              </Container>
            </Box>
          </Container>
        </Grid.Col>
        <Grid.Col span={6}>
          <Box
            sx={{
              background: "76AE25",
              border: "1px solid #76AE25",
              borderRadius: "5px",
            }}
          >
            <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25" }}>
              地図から探す
            </Title>
            <Image width={834} height={824} alt={"mapoftokyo"} src={mapoftokyo} />
          </Box>
        </Grid.Col>
        <Grid.Col span='auto'></Grid.Col>
      </Grid>

      {areaInfoList.map((areaInfo, index) => (
        <Button
          key={index}
          className={classes.root}
          variant='default'
          component='a'
          radius='5px'
          style={{ position: "absolute", width: "79px", height: "26px", left: areaInfo.left, top: areaInfo.top }}
          onClick={() => router.push("/" + areaInfo.area)}
        >
          <Text weight={700}>{areaInfo.name}</Text>
        </Button>
      ))}

      {area23InfoList.map((area23Info, index) => (
        <Text
          key={index}
          className={classes.root2}
          variant='default'
          component='a'
          weight={700}
          size={"45px"}
          style={{ position: "absolute", left: area23Info.left, top: area23Info.top }}
          onClick={() => router.push("/" + area23Info.name)}
        >
          {area23Info.name}
        </Text>
      ))}
    </>
  )
}
