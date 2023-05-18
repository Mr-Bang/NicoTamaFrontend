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
  TextInput,
  Radio,
  Group,
  NumberInput,
  MultiSelect,
  Flex,
  Text,
  SimpleGrid,
  Button,
} from "@mantine/core"
import Map from "../public/searchmap.jpg"
import Adv from "../public/advertizements.png"
import Register from "../public/register.jpg"
import { useState } from "react"

export default function Home() {
  const router = useRouter()

  const [searchWord, setSeachWord] = useState<string>()

  const data = [
    { value: "東京都", label: "東京都" },
    { value: "神奈川県", label: "神奈川県" },
    { value: "埼玉県", label: "埼玉県" },
    { value: "千葉県", label: "千葉県" },
  ]

  const data_cost = [
    { value: "1,000円", label: "1,000円" },
    { value: "2,000円", label: "2,000円" },
    { value: "3,000円", label: "3,000円" },
    { value: "4,000円", label: "4,000円" },
    { value: "5,000円", label: "5,000円" },
    { value: "6,000円", label: "6,000円" },
    { value: "7,000円", label: "7,000円" },
    { value: "8,000円", label: "8,000円" },
    { value: "9,000円", label: "9,000円" },
    { value: "10,000円", label: "10,000円" },
    { value: "11,000円", label: "11,000円" },
    { value: "12,000円", label: "12,000円" },
    { value: "13,000円", label: "13,000円" },
    { value: "14,000円", label: "14,000円" },
    { value: "15,000円", label: "15,000円" },
  ]

  return (
    <div>
      <Grid>
        <Grid.Col span="auto">
          <Center>
            <Box
              sx={{
                background: "#E0E0E0",
                border: "1px solid #CCCCCC",
                borderRadius: "4px",
                height: "102px",
                width: "320px",
              }}
            >
              <Title size="20px">キーワードから探す</Title>
              <Radio.Group name="favoriteFramework" withAsterisk>
                <Group mt="xs">
                  <Radio value="react" label="国内宿泊" />
                  <Radio value="svelte" label="駅名" />
                  <Radio value="ng" label="海外ホテル" />
                </Group>
              </Radio.Group>
              <Space h="xs" />
              <Flex>
                <TextInput
                  label=""
                  radius="md"
                  size="xs"
                  value={searchWord}
                  onChange={(e) => setSeachWord(e.target.value)}
                />
                <Space w="xs" />
                <Button
                  size="xs"
                  style={{ border: "1px solid #CCCCCC", borderRadius: "4px", width: "90px" }}
                  onClick={() => router.push("/" + searchWord)}
                >
                  検索
                </Button>
              </Flex>
            </Box>
          </Center>

          <Space h="lg" />

          <Center>
            <Box
              sx={{
                background: "#E0E0E0",
                border: "1px solid #CCCCCC",
                borderRadius: "4px",
                width: "320px",
                height: "661px",
                left: "0px",
                top: "122px",
              }}
            >
              <Title size="20px">日付から探す</Title>
              <Box>
                <Container>
                  <Radio.Group name="favoriteFramework" withAsterisk>
                    <Group mt="xs">
                      <Radio value="react" label="国内旅行" />
                      <Radio value="svelte" label="日帰り・デイユース" />
                      <Radio value="ng" label="ANA航空券+宿泊" />
                      <Radio value="vue" label="JAL航空券+宿泊" />
                      <Radio value="vue" label="高速バス予約" />
                      <Radio value="vue" label="レンタカー予約" />
                    </Group>
                  </Radio.Group>
                </Container>
              </Box>
              <Space h="xs" />
              <Container>
                <Flex>
                  <Text>チェックイン</Text>
                  <Input />
                </Flex>
              </Container>
              <Space h="xs" />
              <Container>
                <Flex>
                  <Text>チェックアウト</Text>
                  <Input />
                </Flex>
              </Container>
              <Space h="xs" />

              <Container>
                <Flex>
                  <text>ご利用部屋数</text>
                  <NumberInput
                    defaultValue={18}
                    placeholder=""
                    label=""
                    // size="xs"
                    sx={{ width: "100px" }}
                  />
                </Flex>
                <Space h="xs" />

                <Flex>
                  <text>1部屋ご利用人数</text>
                  <Flex>
                    <text>大人</text>
                    <NumberInput
                      defaultValue={1}
                      placeholder=""
                      label=""
                      // size="xs"
                      sx={{ width: "70px" }}
                    />
                  </Flex>
                  <Flex>
                    <text>子供</text>
                    <NumberInput
                      defaultValue={1}
                      placeholder=""
                      label=""
                      // size="xs"
                      sx={{ width: "70px" }}
                    />
                  </Flex>
                </Flex>
                <Space h="xs" />

                <Flex>
                  <text>宿泊地</text>
                  <MultiSelect
                    data={data}
                    label=""
                    placeholder=""
                    // size="xs"
                    sx={{ width: "150px" }}
                  />
                </Flex>
                <Space h="xs" />

                <text>合計料金（１泊）</text>
                <Flex>
                  <text>下限</text>
                  <MultiSelect
                    data={data_cost}
                    label=""
                    placeholder=""
                    // size="xs"
                    sx={{ width: "100px" }}
                  />
                  <text>〜上限</text>
                  <MultiSelect
                    data={data_cost}
                    label=""
                    placeholder=""
                    // size="xs"
                    sx={{ width: "100px" }}
                  />
                </Flex>
                <Space h="xs" />
                <Button size="xs" style={{ border: "1px solid #CCCCCC", borderRadius: "4px", width: "90px" }}>
                  検索
                </Button>
              </Container>
            </Box>
          </Center>
        </Grid.Col>

        <Grid.Col span={7}>
          <Container>
            <Center>
              <Box sx={{ background: "#76AE25", height: "30px", width: "1200px" }}>
                <Title size="20px" style={{ color: "#FFFFFF" }}>
                  地図から探す
                </Title>
              </Box>
            </Center>
          </Container>

          <Space h="lg" />
          <Container>
            <Center>
              <Image alt={"map"} src={Map} />
            </Center>
          </Container>
          <Space h="lg" />
          <Container>
            <SimpleGrid cols={4} spacing="xs">
              <div>
                <Box sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}>
                  <Center>
                    <text>出張</text>
                  </Center>
                </Box>
              </div>
              <div>
                <Box sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}>
                  <Center>
                    <text>駅・空港</text>
                  </Center>
                </Box>
              </div>
              <div>
                <Box sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}>
                  <Center>
                    <text>温泉</text>
                  </Center>
                </Box>
              </div>
              <div>
                <Box sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}>
                  <Center>
                    <text>高級宿</text>
                  </Center>
                </Box>
              </div>
            </SimpleGrid>
          </Container>

          <Space h="xl" />

          <Center>
            <Box sx={{ border: "1px solid #CCCCCC", borderRadius: "4px" }}>
              <Flex>
                <Container>
                  <Title size="20px" style={{ color: "#457F0F" }}>
                    目的から宿を探す
                  </Title>
                  <text>東京ディズニーリゾート</text>
                  <Space />
                  <text>ペットと泊まれる宿</text>
                  <Space />
                  <text>24時からの予約</text>
                </Container>
                <Container>
                  <Title size="20px" style={{ color: "#457F0F" }}>
                    カテゴリから宿を探す
                  </Title>
                  <SimpleGrid cols={2} spacing="xs">
                    <div>空港近くの宿</div>
                    <div>民宿・ペンション</div>
                    <div>ホテルチェーン</div>
                    <div>人に優しい宿</div>
                    <div>家族旅行</div>
                    <div>日帰り・デイユース</div>
                  </SimpleGrid>
                </Container>
                <Container>
                  <Title size="20px" style={{ color: "#457F0F" }}>
                    地名・名称から宿を探す
                  </Title>
                  <text>駅・空港名一覧</text>
                  <Space />
                  <text>観光スポット名一覧</text>
                  <Space />
                </Container>
                <Container>
                  <Title size="20px" style={{ color: "#457F0F" }}>
                    イベントから宿を探す
                  </Title>
                  <text>夏祭り・花火大会</text>
                  <Space />
                  <text>クリスマスイブ</text>
                  <Space />
                  <text>コンサート・ライブ</text>
                </Container>
              </Flex>
            </Box>
          </Center>
        </Grid.Col>

        <Flex>
          <Image alt={"Register"} src={Register} />
          <Image alt={"Adv"} src={Adv} />
        </Flex>
      </Grid>

      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "1050px", top: "644px", height: "25px" }}
        onClick={() => router.push("/SearchPageMetropolitan")}
      >
        首都圏
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "1250px", top: "310px", height: "25px" }}
      >
        北海道
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "1220px", top: "515px", height: "25px" }}
      >
        東北
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "1000px", top: "545px", height: "25px" }}
      >
        北陸
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "1129px", top: "690px", height: "25px" }}
      >
        北関東
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "970px", top: "670px", height: "25px" }}
      >
        伊豆・箱根
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "920px", top: "620px", height: "25px" }}
      >
        甲信越
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "920px", top: "670px", height: "25px" }}
      >
        東海
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "870px", top: "600px", height: "25px" }}
      >
        近畿
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "740px", top: "615px", height: "25px" }}
      >
        山陽・山陰
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "770px", top: "730px", height: "25px" }}
      >
        四国
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "630px", top: "575px", height: "25px" }}
      >
        九州
      </Button>
      <Button
        color="dark"
        radius="xl"
        size="xs"
        compact
        style={{ position: "absolute", left: "560px", top: "760px", height: "25px" }}
      >
        沖縄
      </Button>
    </div>
  )
}
