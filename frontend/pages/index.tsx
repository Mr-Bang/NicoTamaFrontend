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
  createStyles,
  Stack,
  ScrollArea,
} from "@mantine/core"
import Map from "../public/searchmap.jpg"
import Adv from "../public/advertizements.png"
import Adv2 from "../public/advertisements2.svg"
import Adv3 from "../public/advertisements3.svg"
import Adv4 from "../public/advertisements4.svg"
import Adv5 from "../public/advertisements5.svg"

import Register from "../public/register.jpg"
import { useEffect, useState } from "react"
import { useMediaQuery } from "@mantine/hooks"

export default function Home() {
  const router = useRouter()

  const [searchWord, setSeachWord] = useState<string>()

  const largeScreen = useMediaQuery("(min-width: 1600px)")

  const useStyles = createStyles((theme) => ({
    root: {
      "&:not([data-disabled])": theme.fn.hover({
        backgroundColor: theme.fn.darken("#98fb98", 0.05),
        border: 0,
      }),
    },
  }))

  const { classes } = useStyles()

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

  function onClickSearch() {
    if (!searchWord) return
    router.push("/" + searchWord)
  }

  return (
    <div>
      <Flex>
        {/* left bar */}
        <Stack>
          <Box
            sx={{
              background: "76AE25",
              border: "1px solid #76AE25",
              borderRadius: "5px",
              width: largeScreen ? "320px" : "310px",
              height: 130,
            }}
          >
            <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25", textAlign: "center" }}>
              キーワードから探す
            </Title>
            <Container>
              <Radio.Group name='favoriteFramework' withAsterisk>
                <Group mt='xs'>
                  <Radio value='react' label='国内宿泊' />
                  <Radio value='svelte' label='駅名' />
                  <Radio value='ng' label='海外ホテル' />
                </Group>
              </Radio.Group>
              <Space h='md' />
              <Flex>
                <TextInput
                  label=''
                  radius='md'
                  size='xs'
                  value={searchWord}
                  onChange={(e) => setSeachWord(e.target.value)}
                />
                <Space w='xl' />
                <Button
                  size='xs'
                  color={"red"}
                  style={{ border: "1px solid #CCCCCC", borderRadius: "4px", width: "90px" }}
                  onClick={() => onClickSearch()}
                >
                  検索
                </Button>
              </Flex>
            </Container>
            <Space h='xs' />
          </Box>

          <Box
            sx={{
              background: "76AE25",
              border: "1px solid #76AE25",
              borderRadius: "5px",
              width: largeScreen ? "320px" : "310px",
              height: "661px",
              left: "0px",
              top: "122px",
            }}
          >
            <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25", textAlign: "center" }}>
              日付から探す
            </Title>
            <Box>
              <Container>
                <Radio.Group name='favoriteFramework' withAsterisk>
                  <Group mt='xs'>
                    <Radio value='react' label='国内旅行' />
                    <Space w='xl' />
                    <Radio value='svelte' label='日帰り/デイユース' />
                  </Group>
                  <Group mt='xs'>
                    <Radio value='ng' label='ANA航空券+宿泊' />
                    <Radio value='vue' label='JAL航空券+宿泊' />
                  </Group>
                  <Group mt='xs'>
                    <Radio value='vue' label='高速バス予約' />
                    <Space w='xs' />
                    <Radio value='vue' label='レンタカー予約' />
                  </Group>
                </Radio.Group>
              </Container>
            </Box>
            <Space h='xs' />
            <Container>
              <Text>チェックイン</Text>
              <Input placeholder='2023/05/11' size='xs' />
            </Container>
            <Space h='xs' />
            <Container>
              <Text>チェックアウト</Text>
              <Input placeholder='2023/05/11' size='xs' />
            </Container>
            <Space h='xs' />

            <Container>
              <Flex align={"center"}>
                <text>ご利用部屋数</text>
                <Space w='xs' />
                <NumberInput
                  defaultValue={18}
                  placeholder=''
                  label=''
                  // size="xs"
                  sx={{ width: "100px" }}
                />
              </Flex>
              <Space h='xs' />

              <text>1部屋ご利用人数</text>
              <Flex>
                <Container>
                  <Flex align={"center"}>
                    <text>大人</text>
                    <Space w='xs' />
                    <NumberInput
                      defaultValue={1}
                      placeholder=''
                      label=''
                      // size="xs"
                      sx={{ width: "70px" }}
                    />
                  </Flex>
                </Container>
                <Container>
                  <Flex align={"center"}>
                    <text>子供</text>
                    <Space w='xs' />
                    <NumberInput
                      defaultValue={1}
                      placeholder=''
                      label=''
                      // size="xs"
                      sx={{ width: "70px" }}
                    />
                  </Flex>
                </Container>
              </Flex>
              <Space h='xs' />

              <Flex align={"center"}>
                <text>宿泊地</text>
                <Space w='xs' />
                <MultiSelect
                  data={data}
                  label=''
                  placeholder=''
                  // size="xs"
                  sx={{ width: "150px" }}
                />
              </Flex>
              <Space h='xs' />

              <text>合計料金（１泊）</text>
              <Flex align={"center"}>
                <text>下限</text>
                <Space w='xs' />
                <MultiSelect
                  data={data_cost}
                  label=''
                  placeholder=''
                  // size="xs"
                  sx={{ width: "80px" }}
                />
                <Space w='xs' />
                <text>〜上限</text>
                <Space w='xs' />
                <MultiSelect
                  data={data_cost}
                  label=''
                  placeholder=''
                  // size="xs"
                  sx={{ width: "100px" }}
                />
              </Flex>
              <Space h='xs' />

              <Text mt={"md"}>*1部屋あたり消費税込み</Text>
              <Flex justify={"flex-end"} mt={"md"}>
                <Button color={"red"} style={{ border: "1px solid #CCCCCC", borderRadius: "4px", width: "90px" }}>
                  検索
                </Button>
              </Flex>
            </Container>
          </Box>
        </Stack>
        {largeScreen && <Space w={"xl"} />}
        {/*  center */}
        <Stack>
          <Container>
            <Center>
              <Box sx={{ background: "#76AE25", height: "30px", width: "1200px", borderRadius: "4px" }}>
                <Title size='20px' style={{ color: "#FFFFFF", textAlign: "center" }}>
                  地図から探す
                </Title>
              </Box>
            </Center>
          </Container>
          <Space h={"lg"} />
          <Container>
            <Image alt={"map"} src={Map} style={{ objectFit: "contain" }} />
            <Button
              color='dark'
              radius='xl'
              size='xs'
              compact
              style={{ top: "22%", right: "35%" }}
              onClick={() => router.push("/SearchPageMetropolitan")}
            >
              首都圏
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "30%", right: "19%" }}>
              北海道
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ right: "37%" }}>
              東北
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "35%", left: "42%" }}>
              北陸
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "36%", left: "49%" }}>
              北関東
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "20%", left: "37%" }}>
              伊豆・箱根
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "40%", left: "30%" }}>
              甲信越
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "26%", left: "18%" }}>
              東海
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "28%", left: "5%" }}>
              近畿
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "35%", right: "11%" }}>
              山陽・山陰
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "24%", right: "17%" }}>
              四国
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "24%", right: "33%" }}>
              九州
            </Button>
            <Button color='dark' radius='xl' size='xs' compact style={{ bottom: "8%", right: "45%" }}>
              沖縄
            </Button>
          </Container>
          <Container>
            <SimpleGrid cols={4} spacing='xs'>
              <div>
                <Button
                  className={classes.root}
                  variant='light'
                  color='gray'
                  sx={{
                    border: "1px solid #CCCCCC",
                    borderRadius: "4px",
                    height: "50px",
                    width: "200px",
                  }}
                >
                  <Text weight={700} color='dark'>
                    出張
                  </Text>
                </Button>
              </div>
              <div>
                <Button
                  className={classes.root}
                  variant='light'
                  color='gray'
                  sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}
                >
                  <Text weight={700} color='dark'>
                    駅・空港
                  </Text>
                </Button>
              </div>
              <div>
                <Button
                  className={classes.root}
                  variant='light'
                  color='gray'
                  sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}
                >
                  <Text weight={700} color='dark'>
                    温泉
                  </Text>
                </Button>
              </div>
              <div>
                <Button
                  className={classes.root}
                  variant='light'
                  color='gray'
                  sx={{ border: "1px solid #CCCCCC", borderRadius: "4px", height: "50px", width: "200px" }}
                >
                  <Text weight={700} color={"dark"}>
                    高級宿
                  </Text>
                </Button>
              </div>
            </SimpleGrid>
          </Container>
          <Box sx={{ border: "1px solid #CCCCCC", borderRadius: "4px" }}>
            <Flex>
              <Container>
                <Title size='20px' style={{ color: "#457F0F" }}>
                  目的から宿を探す
                </Title>
                <text>東京ディズニーリゾート</text>
                <Space />
                <text>ペットと泊まれる宿</text>
                <Space />
                <text>24時からの予約</text>
              </Container>
              <Container>
                <Title size='20px' style={{ color: "#457F0F" }}>
                  カテゴリから宿を探す
                </Title>
                <Group>
                  <text>空港近くの宿</text>
                  <Space />
                  <text>民宿・ペンション</text>
                </Group>
                <Group>
                  <text>ホテルチェーン</text>
                  <text>人に優しい宿</text>
                </Group>
                <Group>
                  <text>家族旅行</text>
                  <Space />
                  <Space />
                  <Space />
                  <text>日帰り・デイユース</text>
                </Group>
              </Container>
              <Container>
                <Title size='20px' style={{ color: "#457F0F" }}>
                  地名・名称から宿を探す
                </Title>
                <text>駅・空港名一覧</text>
                <Space />
                <text>観光スポット名一覧</text>
                <Space />
              </Container>
              <Container>
                <Title size='20px' style={{ color: "#457F0F" }}>
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
        </Stack>
        {largeScreen && <Space w={"xl"} />}

        <Image alt={"Register"} src={Register} />
        {largeScreen && (
          <>
            <Space w={"xl"} />
            <ScrollArea h={"90vh"}>
              <Image alt={"Adv"} src={Adv} />
            </ScrollArea>
            <Space w={"lg"} />
          </>
        )}
      </Flex>
      <Image alt={"Adv2"} src={Adv2} style={{ width: "1712px" }} />
      <Image alt={"Adv3"} src={Adv3} />

      <Image alt={"Adv4"} src={Adv4} />

      <Image alt={"Adv5"} src={Adv5} />
    </div>
  )
}
