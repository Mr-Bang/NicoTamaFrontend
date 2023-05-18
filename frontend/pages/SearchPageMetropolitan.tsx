import { useRouter } from "next/router"
import Image from "next/image"
import {
  Box,
  Input,
  Title,
  Grid,
  Center,
  Container,
  Space,
  Radio,
  Group,
  NumberInput,
  Flex,
  Text,
  Button,
  Checkbox,
} from "@mantine/core"
import Adv5 from "../public/advertizements5.svg"
import Map from "../public/mapsyutoken.png"
import spBox from "../public/spBox.svg"

export default function A() {
  const router = useRouter()

  return (
    <div>
      <Grid grow>
        <Grid.Col span={"auto"}>
          {/*Box1-1*/}
          <Container>
            <Title>首都圏 旅行</Title>
            <Flex>
              <Container>
                <Box
                  sx={{
                    background: "76AE25",
                    border: "1px solid #76AE25",
                    borderRadius: "5px",
                    height: "74px",
                    width: "654px",
                  }}
                >
                  <Title size="20px" style={{ color: "white", backgroundColor: "#76AE25" }}>
                    首都圏 キーワードから探す
                  </Title>
                  <Container>
                    <Radio.Group name="whichtravel" withAsterisk>
                      <Group mt="xs">
                        <Radio value="domestic" label="国内旅行" />
                        <Radio value="oversea" label="海外旅行" />
                      </Group>
                    </Radio.Group>
                  </Container>
                </Box>
                <Space h="xs" />
                <Box
                  sx={{
                    background: "76AE25",
                    border: "1px solid #76AE25",
                    borderRadius: "5px",
                    height: "666.59px",
                    width: "654px",
                  }}
                >
                  <Title size="20px" style={{ color: "white", backgroundColor: "#76AE25" }}>
                    首都圏 日付と地図からから探す
                  </Title>
                  <Container>
                    <Radio.Group name="typeoftravel" withAsterisk>
                      <Group mt="xs">
                        <Radio value="kokunai" label="国内旅行" />
                        <Radio value="higaeri" label="日帰り・デイユース" />
                        <Radio value="ana" label="ANA航空券+宿泊" />
                        <Radio value="jal" label="JAL航空券+宿泊" />
                      </Group>
                      <Group>
                        <Radio value="bus" label="高速バス予約" />
                        <Radio value="car" label="レンタカー予約" />{" "}
                      </Group>
                    </Radio.Group>

                    <Space h="xs" />
                    <Box
                      sx={{
                        background: "#EBF2D8",
                        border: "1px solid #7DB230",
                        borderRadius: "5px",
                        height: "59.72px",
                      }}
                    >
                      <Flex align={"center"}>
                        <Container>
                          <Checkbox
                            mt={"xs"}
                            label="日付未定"
                            radius="md"
                            size="xs"
                            sx={{ borderRadius: "5px", width: "80px" }}
                          />
                        </Container>
                        <Flex direction={"column"}>
                          <Text size="12px" style={{ color: "#437617", textAlign: "center" }}>
                            チェックイン
                          </Text>
                          <Input size="xs" placeholder="2023/05/31" sx={{ width: "90px" }} />
                        </Flex>
                        <Flex ml={"xs"} direction={"column"}>
                          <Text size="12px" style={{ color: "#437617", textAlign: "center" }}>
                            チェックアウト
                          </Text>
                          <Input size="xs" placeholder="2023/05/31" sx={{ width: "90px" }} />
                        </Flex>
                        <Container>
                          <Center>
                            <Text size="12px" style={{ color: "#437617" }}>
                              １部屋ご利用人数
                            </Text>
                          </Center>
                          <Flex align={"center"}>
                            <Text size="12px">大人</Text>
                            <NumberInput defaultValue={18} placeholder="" size="xs" sx={{ width: "60px" }} required />
                            <Text ml={"xs"} size="12px">
                              子供
                            </Text>
                            <NumberInput defaultValue={18} placeholder="" size="xs" sx={{ width: "60px" }} required />
                          </Flex>
                        </Container>
                        <Container>
                          <Center>
                            <Text size="10px" style={{ color: "#437617" }}>
                              ご利用部屋数
                            </Text>
                          </Center>
                          <Input size="xs" sx={{ width: "60px" }} />
                        </Container>
                      </Flex>
                    </Box>
                    <Space h="xl" />

                    <Container>
                      <Flex>
                        <Container>
                          <text>埼玉県</text>
                          <Space />
                          <text>千葉県</text>
                          <Space />
                          <text>東京都</text>
                          <Space />
                          <text>神奈川県</text>
                        </Container>
                        <div>
                          <Image width={480} height={480} alt={"Map"} src={Map} />
                        </div>
                      </Flex>
                    </Container>
                  </Container>
                </Box>
              </Container>

              <Container>
                <Title
                  size="20px"
                  sx={{ color: "white", background: "#CC6633", borderRadius: "3px", height: "29.84px" }}
                >
                  首都圏 おすすめ特集
                </Title>
                <Flex>
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                </Flex>
                <Title
                  size="20px"
                  sx={{ color: "white", background: "#CC6633", borderRadius: "3px", height: "29.84px" }}
                >
                  首都圏の遊び・体験
                </Title>
                <Flex>
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                </Flex>
                <Title
                  size="20px"
                  sx={{ color: "white", background: "#CC6633", borderRadius: "3px", height: "29.84px" }}
                >
                  首都圏 注目観光スポット
                </Title>
                <Flex>
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                  <Image width={170} height={192.5} alt={"spBox"} src={spBox} />
                </Flex>
              </Container>
              <Image alt={"Adv5"} src={Adv5} />
            </Flex>
          </Container>
        </Grid.Col>
        <Grid.Col span={"auto"}>
          {/*Box1-2*/}
          <Box
            sx={{
              background: "#EBF2D8",
              border: "border: 1px solid #7DB230",

              borderRadius: "5px",
            }}
          ></Box>
        </Grid.Col>
      </Grid>

      <Button
        color="brack"
        radius="5px"
        compact
        style={{ position: "absolute", width: "74px", height: "26px", left: "320px", top: "650px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        東京都
      </Button>
      <Button
        color="brack"
        radius="5px"
        compact
        style={{ position: "absolute", width: "74px", height: "26px", left: "298px", top: "567px" }}
      >
        埼玉県
      </Button>
      <Button
        color="brack"
        radius="5px"
        compact
        style={{ position: "absolute", width: "74px", height: "26px", left: "505px", top: "696px" }}
      >
        千葉県
      </Button>
      <Button
        color="brack"
        radius="5px"
        compact
        style={{ position: "absolute", width: "84px", height: "26px", left: "288px", top: "728px" }}
      >
        神奈川県
      </Button>
    </div>
  )
}
