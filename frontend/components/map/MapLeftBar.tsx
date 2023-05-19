import { Box, Button, Flex, Input, MantineTheme, NumberInput, Radio, Text, Title, rem } from "@mantine/core"

export default function MapLeftBar() {
  return (
    <Box
      sx={(theme: MantineTheme) => ({
        height: "100vh",
        width: 1300,
        border: `${rem(2)} solid #73AB23`,
        borderRadius: theme.radius.md,
        boxShadow: theme.shadows.md,
      })}
    >
      <Title order={3} style={{ backgroundColor: "#73AB23", color: "white", textAlign: "center" }}>
        日程から探す
      </Title>
      <Box px={12} py={4}>
        <Radio p={2} label='宿泊プラン' />
        <Radio p={2} label='ANA 航空券+宿泊' />
        <Radio p={2} label='JAL 航空券+宿泊' />
        <Radio p={2} label='日帰り・デイユース' />
        <Radio p={2} label='部屋タイプ' />

        <Input.Wrapper label='チェックイン' maw={320} my={"sm"}>
          <Input placeholder='2023/05/11' radius='md' />
        </Input.Wrapper>
        <Input.Wrapper label='チェックアウト' maw={320} my={"sm"}>
          <Input placeholder='2023/05/11' radius='md' />
        </Input.Wrapper>
        <Text>ご利用部屋数</Text>
        <Flex align={"center"}>
          <NumberInput maw={60} defaultValue={1} placeholder='1' />
          <Text ml={"xs"}>部屋</Text>
        </Flex>
        <Text mt={"xs"}>ご利用人数</Text>
        <Flex align={"center"}>
          <Text mr='xs'>1部屋目: </Text>
          <NumberInput maw={60} defaultValue={1} placeholder='1' />
          <Text ml={"xs"}>人</Text>
        </Flex>

        <Text mt={"md"}>ご利用料金</Text>
        <Flex align={"center"}>
          <Text mr='xs'>下限 </Text>
          <NumberInput maw={200} defaultValue={1} step={1000} placeholder='1' />
        </Flex>
        <Flex align={"center"}>
          <Text mr='xs'>上限 </Text>
          <NumberInput maw={200} defaultValue={1} step={1000} placeholder='1' />
        </Flex>
        <Text mt={"md"}>*1部屋あたり消費税込み</Text>
        <Flex justify={"flex-end"} mt={"md"}>
          <Button color={"red"}>検索</Button>
        </Flex>
      </Box>
    </Box>
  )
}
