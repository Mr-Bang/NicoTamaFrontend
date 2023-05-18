import { useRouter } from "next/router"
import Image from "next/image"
import { Box, Title, Grid, Container, Space, Text, SimpleGrid, Button, createStyles, rem, Anchor } from "@mantine/core"
import mapoftokyo from "../public/mapoftokyo.svg"

export default function Home() {
  const router = useRouter()

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

  function onClickAreaButton(area: string) {
    router.push("/" + area)
  }

  const areaInfoList = [
    { name: "板橋", top: "411px", left: "753px", area: "北西部" },
    { name: "練馬", top: "450px", left: "620px", area: "北西部" },
    { name: "北区", top: "430px", left: "850px", area: "北西部" },
    { name: "中野", top: "560px", left: "710px", area: "北西部" },
    { name: "杉並", top: "610px", left: "630px", area: "北西部" },
    { name: "世田谷", top: "750px", left: "640px", area: "南西部" },
    { name: "目黒", top: "770px", left: "770px", area: "南西部" },
    { name: "品川", top: "820px", left: "850px", area: "南西部" },
    { name: "大田", top: "930px", left: "830px", area: "南西部" },
    { name: "足立", top: "400px", left: "1000px", area: "東部" },
    { name: "葛飾", top: "470px", left: "1110px", area: "東部" },
    { name: "江戸川", top: "610px", left: "1170px", area: "東部" },
    { name: "荒川", top: "500px", left: "970px", area: "東部" },
    { name: "台東", top: "550px", left: "970px", area: "東部" },
    { name: "墨田", top: "580px", left: "1030px", area: "東部" },
    { name: "江東", top: "670px", left: "1040px", area: "東部" },
    { name: "豊島", top: "510px", left: "810px", area: "副都心" },
    { name: "文京", top: "540px", left: "885px", area: "副都心" },
    { name: "新宿", top: "615px", left: "810px", area: "副都心" },
    { name: "中央", top: "670px", left: "950px", area: "都心" },
    { name: "港区", top: "730px", left: "875px", area: "都心" },
    { name: "渋谷", top: "670px", left: "760px", area: "副都心" },
    { name: "千代田", top: "630px", left: "900px", area: "都心" },
  ]
  const area23InfoList = [
    { name: "都心", left: "860px", top: "660px" },
    { name: "副都心", left: "790px", top: "550px" },
    { name: "北西部", left: "600px", top: "480px" },
    { name: "南西部", left: "680px", top: "800px" },
    { name: "東部", left: "1120px", top: "510px" },
  ]

  const stationInfoList = [
    { name: "新宿駅" },
    { name: "新橋駅" },
    { name: "池袋駅" },
    { name: "上野駅" },
    { name: "渋谷駅" },
    { name: "赤坂見附駅" },
    { name: "八王子駅" },
    { name: "恵比寿駅" },
    { name: "台場駅" },
    { name: "浜松町駅" },
    { name: "六本木駅" },
    { name: "銀座駅" },
    { name: "大手町駅" },
    { name: "立川駅" },
    { name: "五反田駅" },
    { name: "錦糸町駅" },
    { name: "京橋駅" },
    { name: "有楽町駅" },
    { name: "東京国際空港" },
    { name: "三宅島空港" },
    { name: "新島空港" },
    { name: "神津島空港" },
    { name: "大島空港" },
    { name: "八丈島空港" },
    { name: "調布飛行場" },
  ]

  const popularInfoList = [
    { name: "東京タワー" },
    { name: "浅草寺" },
    { name: "東京ディズニーリゾート®︎" },
    { name: "東京ドーム" },
    { name: "国立競技場" },
    { name: "神宮球場" },
    { name: "東京スタジアム" },
    { name: "東京国際フォーラム" },
    { name: "東京ビッグサイト" },
    { name: "日本武道館" },
    { name: "上野動物園" },
    { name: "お台場" },
    { name: "奥多摩湖" },
    { name: "国営昭和記念公園" },
  ]

  return (
    <div>
      <Text></Text>
      <Title>東京２３区</Title>
      <Space h={"xl"} />
      <Grid>
        <Grid.Col span="auto">
          <Container>
            <Box
              sx={{
                background: "76AE25",
                border: "1px solid #76AE25",
                borderRadius: "5px",
              }}
            >
              <Title size="20px" style={{ color: "white", backgroundColor: "#76AE25" }}>
                地域名から探す
              </Title>
              <Container>
                <div>
                  {area23InfoList.map((area23Info, index) => (
                    <div>
                      <Anchor
                        key={index}
                        className={classes.root3}
                        variant="default"
                        component="a"
                        onClick={() => router.push("/" + area23Info.name)}
                      >
                        {area23Info.name}
                      </Anchor>
                    </div>
                  ))}
                </div>
              </Container>
            </Box>

            <Space h="xl" />

            <Box
              sx={{
                background: "76AE25",
                border: "1px solid #76AE25",
                borderRadius: "5px",
              }}
            >
              <Title size="20px" style={{ color: "white", backgroundColor: "#76AE25" }}>
                主要駅・主要空港周辺から探す
              </Title>

              <Container>
                <SimpleGrid cols={2} verticalSpacing="xs">
                  {stationInfoList.map((stationInfo, index) => (
                    <div>
                      <Anchor
                        key={index}
                        className={classes.root3}
                        variant="default"
                        component="a"
                        onClick={() => router.push("/" + stationInfo.name)}
                      >
                        {stationInfo.name}
                      </Anchor>
                    </div>
                  ))}
                </SimpleGrid>
              </Container>
            </Box>
            <Space h="xl" />
            <Box
              sx={{
                background: "76AE25",
                border: "1px solid #76AE25",
                borderRadius: "5px",
              }}
            >
              <Title size="20px" style={{ color: "white", backgroundColor: "#76AE25" }}>
                人気スポットから探す
              </Title>
              <Container>
                <SimpleGrid cols={2} verticalSpacing="xs">
                  {popularInfoList.map((popularInfo, index) => (
                    <div>
                      <Anchor
                        key={index}
                        className={classes.root3}
                        variant="default"
                        component="a"
                        onClick={() => router.push("/" + popularInfo.name)}
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
            <Title size="20px" style={{ color: "white", backgroundColor: "#76AE25" }}>
              地図から探す
            </Title>
            <Image width={834} height={824} alt={"mapoftokyo"} src={mapoftokyo} />
          </Box>
        </Grid.Col>
        <Grid.Col span="auto"></Grid.Col>
      </Grid>

      {areaInfoList.map((areaInfo, index) => (
        <Button
          key={index}
          className={classes.root}
          variant="default"
          component="a"
          radius="5px"
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
          variant="default"
          component="a"
          weight={700}
          size={"45px"}
          style={{ position: "absolute", left: area23Info.left, top: area23Info.top }}
          onClick={() => router.push("/" + area23Info.name)}
        >
          {area23Info.name}
        </Text>
      ))}
    </div>
  )
}
