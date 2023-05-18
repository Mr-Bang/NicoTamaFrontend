import { useRouter } from "next/router"
import Image from "next/image"
import { Box, Title, Grid, Container, Space, Text, SimpleGrid, Button, createStyles, rem } from "@mantine/core"
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
        color: "red",
      }),
    },
  }))
  const { classes } = useStyles()

  return (
    <div>
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
                人気スポットから探す
              </Title>
              <Container>
                <div>都心</div>
                <div>副都心</div>
                <div>東部</div>
                <div>北西部</div>
                <div>南西部</div>
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
                  <div>新宿駅</div>
                  <div>東京駅</div>
                  <div>品川駅</div>
                  <div>新橋駅</div>
                  <div>池袋駅</div>
                  <div>上野駅</div>
                  <div>渋谷駅</div>
                  <div>赤坂見附駅</div>
                  <div>八王子駅</div>
                  <div>恵比寿駅</div>
                  <div>台場駅</div>
                  <div>浜松町駅</div>
                  <div>六本木駅</div>
                  <div>銀座駅</div>
                  <div>大手町駅</div>
                  <div>立川駅</div>
                  <div>五反田駅</div>
                  <div>錦糸町駅</div>
                  <div>京橋駅</div>
                  <div>有楽町駅</div>
                  <div>東京国際空港</div>
                  <div>三宅島空港</div>
                  <div>新島空港</div>
                  <div>神津島空港</div>
                  <div>大島空港</div>
                  <div>八丈島空港</div>
                  <div>調布飛行場</div>
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
                  <div>東京タワー</div>
                  <div>浅草寺</div>
                  <div>東京ディズニーリゾート®︎</div>
                  <div>東京ドーム</div>
                  <div>国立競技場</div>
                  <div>神宮球場</div>
                  <div>東京スタジアム</div>
                  <div>東京国際フォーラム</div>
                  <div>東京ビッグサイト</div>
                  <div>日本武道館</div>
                  <div>上野動物園</div>
                  <div>お台場</div>
                  <div>奥多摩湖</div>
                  <div>国営昭和記念公園</div>
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

      <Button className={classes.root} variant="default" component="a">
        プラン一覧
      </Button>

      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        style={{ position: "absolute", width: "65px", height: "26px", left: "753px", top: "411px" }}
      >
        <Text fw={500}>板橋</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "620px", top: "450px" }}
      >
        <Text fw={500}>練馬</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "850px", top: "430px" }}
      >
        <Text fw={500}>北区</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "710px", top: "560px" }}
      >
        <Text fw={500}>中野</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "630px", top: "610px" }}
      >
        <Text fw={500}>杉並</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "640px", top: "750px" }}
      >
        <Text fw={500}>世田谷</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "770px", top: "770px" }}
      >
        <Text fw={500}>目黒</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "850px", top: "820px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        <Text fw={500}>品川</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "830px", top: "930px" }}
      >
        <Text fw={500}>大田</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "1000px", top: "400px" }}
      >
        <Text fw={500}>足立</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "1110px", top: "470px" }}
      >
        <Text fw={500}>葛飾</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "1170px", top: "610px" }}
      >
        <Text fw={500}>江戸川</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "970px", top: "500px" }}
      >
        <Text fw={500}>荒川</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "970px", top: "550px" }}
      >
        <Text fw={500}>台東</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "1030px", top: "580px" }}
      >
        <Text fw={500}>墨田</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "1040px", top: "670px" }}
      >
        <Text fw={500}>江東</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "810px", top: "510px" }}
      >
        <Text fw={500}>豊島</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "885px", top: "540px" }}
      >
        <Text fw={500}>文京</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "810px", top: "615px" }}
      >
        <Text fw={500}>新宿</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "900px", top: "630px" }}
      >
        <Text fw={500}>千代田</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "950px", top: "670px" }}
      >
        <Text fw={500}>中央</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "875px", top: "730px" }}
      >
        <Text fw={500}>港区</Text>
      </Button>
      <Button
        className={classes.root}
        variant="default"
        component="a"
        radius="5px"
        compact
        style={{ position: "absolute", width: "65px", height: "26px", left: "760px", top: "670px" }}
      >
        <Text fw={500}>渋谷</Text>
      </Button>

      <Text
        className={classes.root2}
        variant="default"
        component="a"
        weight={700}
        size={"45px"}
        style={{ position: "absolute", left: "860px", top: "660px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        都心
      </Text>
      <Text
        className={classes.root2}
        variant="default"
        component="a"
        weight={700}
        size={"45px"}
        style={{ position: "absolute", left: "790px", top: "550px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        副都心
      </Text>
      <Text
        className={classes.root2}
        variant="default"
        component="a"
        weight={700}
        size={"50px"}
        style={{ position: "absolute", left: "600px", top: "480px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        北西部
      </Text>
      <Text
        className={classes.root2}
        variant="default"
        component="a"
        weight={700}
        size={"50px"}
        style={{ position: "absolute", left: "680px", top: "800px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        南西部
      </Text>

      <Text
        className={classes.root2}
        variant="default"
        component="a"
        weight={700}
        size={"50px"}
        style={{ position: "absolute", left: "1120px", top: "510px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        東部
      </Text>
    </div>
  )
}
