import { useRouter } from "next/router"
import Image from "next/image"
import {
  Anchor,
  Box,
  Breadcrumbs,
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
  createStyles,
} from "@mantine/core"
import Adv5 from "../public/advertizements5.svg"
import Map from "../public/mapsyutoken.png"
import PRbox from "../public/PRbox.svg"
import PRbox2 from "../public/PRbox2.svg"
import PRbox3 from "../public/PRbox3.svg"
import PRbox4 from "../public/PRbox4.svg"
import PRbox5 from "../public/PRbox5.svg"
import PRbox6 from "../public/PRbox6.svg"
import PRbox7 from "../public/PRbox7.svg"
import PRbox8 from "../public/PRbox8.svg"

import PR from "../public/PR.svg"
import PR2 from "../public/PR2.svg"

export default function A() {
  const router = useRouter()

  const useStyles = createStyles((theme) => ({
    root: {
      "&:not([data-disabled])": theme.fn.hover({
        backgroundColor: theme.fn.darken("#EAEAEA", 0.05),
        border: 0,
      }),
    },
  }))

  const { classes } = useStyles()

  const breadcrumbs = [{ name: "楽天トラベルプラストップ", href: "/" }, { name: "首都圏" }].map((breadcrumb, index) =>
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
    <div>
      <Breadcrumbs separator='>' mt='xs'>
        {breadcrumbs}
      </Breadcrumbs>
      <Box
        sx={(theme) => ({
          textAlign: "left",
          padding: theme.spacing.xl,
        })}
      >
        <Title order={1}>首都圏</Title>
      </Box>
      <Grid grow>
        <Grid.Col span={"auto"}>
          <Container>
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
                  <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25" }}>
                    首都圏 キーワードから探す
                  </Title>
                  <Container>
                    <Radio.Group name='whichtravel' withAsterisk>
                      <Group mt='xs'>
                        <Radio value='domestic' label='国内旅行' />
                        <Radio value='oversea' label='海外旅行' />
                      </Group>
                    </Radio.Group>
                  </Container>
                </Box>
                <Space h='xs' />
                <Box
                  sx={{
                    background: "76AE25",
                    border: "1px solid #76AE25",
                    borderRadius: "5px",
                    height: "666.59px",
                    width: "654px",
                  }}
                >
                  <Title size='20px' style={{ color: "white", backgroundColor: "#76AE25" }}>
                    首都圏 日付と地図からから探す
                  </Title>
                  <Container>
                    <Radio.Group name='typeoftravel' withAsterisk>
                      <Group mt='xs'>
                        <Radio value='kokunai' label='国内旅行' />
                        <Radio value='higaeri' label='日帰り・デイユース' />
                        <Radio value='ana' label='ANA航空券+宿泊' />
                        <Radio value='jal' label='JAL航空券+宿泊' />
                      </Group>
                      <Group>
                        <Radio value='bus' label='高速バス予約' />
                        <Radio value='car' label='レンタカー予約' />{" "}
                      </Group>
                    </Radio.Group>

                    <Space h='xs' />
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
                            label='日付未定'
                            radius='md'
                            size='xs'
                            sx={{ borderRadius: "5px", width: "80px" }}
                          />
                        </Container>
                        <Flex direction={"column"}>
                          <Text size='12px' style={{ color: "#437617", textAlign: "center" }}>
                            チェックイン
                          </Text>
                          <Input size='xs' placeholder='2023/05/31' sx={{ width: "90px" }} />
                        </Flex>
                        <Flex ml={"xs"} direction={"column"}>
                          <Text size='12px' style={{ color: "#437617", textAlign: "center" }}>
                            チェックアウト
                          </Text>
                          <Input size='xs' placeholder='2023/05/31' sx={{ width: "90px" }} />
                        </Flex>
                        <Container>
                          <Center>
                            <Text size='12px' style={{ color: "#437617" }}>
                              １部屋ご利用人数
                            </Text>
                          </Center>
                          <Flex align={"center"}>
                            <Text size='12px'>大人</Text>
                            <NumberInput defaultValue={0} placeholder='' size='xs' sx={{ width: "60px" }} required />
                            <Text ml={"xs"} size='12px'>
                              子供
                            </Text>
                            <NumberInput defaultValue={0} placeholder='' size='xs' sx={{ width: "60px" }} required />
                          </Flex>
                        </Container>
                        <Container>
                          <Center>
                            <Text size='10px' style={{ color: "#437617" }}>
                              ご利用部屋数
                            </Text>
                          </Center>
                          <Input size='xs' sx={{ width: "60px" }} />
                        </Container>
                      </Flex>
                    </Box>
                    <Space h='xl' />

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
                <Space h='xl' />
                <Flex>
                  <Image alt={"PR2"} src={PR2} />
                  <Space w='md' />
                  <Image alt={"PR"} src={PR} />
                </Flex>
              </Container>

              <Container>
                <Box style={{ width: "930px" }}>
                  <Text
                    size='20px'
                    weight='700'
                    sx={{ color: "white", background: "#CC6633", borderRadius: "3px", height: "29.84px" }}
                  >
                    首都圏 おすすめ特集
                  </Text>
                </Box>
                <Space h='xs' />
                <Flex>
                  <Image width={170} height={192.5} alt={"PRbox"} src={PRbox} /> <Space w='xs' />
                  <Image width={170} height={192.5} alt={"PRbox2"} src={PRbox2} /> <Space w='xs' />
                  <Image width={170} height={192.5} alt={"PRbox3"} src={PRbox3} /> <Space w='xs' />
                  <Image width={170} height={192.5} alt={"PRbox4"} src={PRbox4} /> <Space w='xs' />
                </Flex>
                <Space h='xs' />
                <Box style={{ width: "930px" }}>
                  <Text
                    size='20px'
                    weight='700'
                    sx={{ color: "white", background: "#CC6633", borderRadius: "3px", height: "29.84px" }}
                  >
                    首都圏の遊び・体験
                  </Text>
                </Box>
                <Space h='xs' />
                <Flex>
                  <Button
                    variant='light'
                    color='gray'
                    className={classes.root}
                    component='a'
                    sx={{
                      border: "1px solid #CCCCCC",
                      borderRadius: "4px",
                      height: "50px",
                      width: "170px",
                    }}
                  >
                    <Text weight={700} color='dark'>
                      埼玉の遊び・体験
                    </Text>
                  </Button>
                  <Space w='xs' />
                  <Button
                    variant='light'
                    color='gray'
                    className={classes.root}
                    component='a'
                    sx={{
                      border: "1px solid #CCCCCC",
                      borderRadius: "4px",
                      height: "50px",
                      width: "170px",
                    }}
                  >
                    <Text weight={700} color='dark'>
                      千葉の遊び・体験
                    </Text>
                  </Button>{" "}
                  <Space w='xs' />
                  <Button
                    variant='light'
                    color='gray'
                    className={classes.root}
                    component='a'
                    sx={{
                      border: "1px solid #CCCCCC",
                      borderRadius: "4px",
                      height: "50px",
                      width: "170px",
                    }}
                  >
                    <Text weight={700} color='dark'>
                      東京の遊び・体験
                    </Text>
                  </Button>{" "}
                  <Space w='xs' />
                  <Button
                    variant='light'
                    color='gray'
                    className={classes.root}
                    component='a'
                    sx={{
                      border: "1px solid #CCCCCC",
                      borderRadius: "4px",
                      height: "50px",
                      width: "170px",
                    }}
                  >
                    <Text weight={700} color='dark'>
                      神奈川の遊び・体験
                    </Text>
                  </Button>{" "}
                  <Space w='xs' />
                </Flex>
                <Space h='xs' />

                <Box style={{ width: "930px" }}>
                  <Text
                    size='20px'
                    weight='700'
                    sx={{ color: "white", background: "#CC6633", borderRadius: "3px", height: "29.84px" }}
                  >
                    首都圏 注目観光スポット
                  </Text>
                </Box>
                <Space h='xs' />
                <Flex>
                  <Image width={170} height={192.5} alt={"PRbox5"} src={PRbox5} /> <Space w='xs' />
                  <Image width={170} height={192.5} alt={"PRbox6"} src={PRbox6} /> <Space w='xs' />
                  <Image width={170} height={192.5} alt={"PRbox7"} src={PRbox7} /> <Space w='xs' />
                  <Image width={170} height={192.5} alt={"PRbox8"} src={PRbox8} /> <Space w='xs' />
                </Flex>
              </Container>

              <Image alt={"Adv5"} src={Adv5} />
            </Flex>
          </Container>
        </Grid.Col>
        <Grid.Col span={"auto"}>
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
        color='brack'
        radius='5px'
        compact
        style={{ position: "absolute", width: "74px", height: "26px", left: "320px", top: "725px" }}
        onClick={() => router.push("/SearchPageTokyo")}
      >
        東京都
      </Button>
      <Button
        color='brack'
        radius='5px'
        compact
        style={{ position: "absolute", width: "74px", height: "26px", left: "298px", top: "642px" }}
      >
        埼玉県
      </Button>
      <Button
        color='brack'
        radius='5px'
        compact
        style={{ position: "absolute", width: "74px", height: "26px", left: "505px", top: "770px" }}
      >
        千葉県
      </Button>
      <Button
        color='brack'
        radius='5px'
        compact
        style={{ position: "absolute", width: "84px", height: "26px", left: "288px", top: "803px" }}
      >
        神奈川県
      </Button>
    </div>
  )
}
