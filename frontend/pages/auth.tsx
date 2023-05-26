import { hashAuth } from "@/services/hashClient"
import { Center, Flex, PasswordInput, Space, Text, Title } from "@mantine/core"
import { useRouter } from "next/router"
import { KeyboardEvent, useEffect, useState } from "react"

export default function Auth() {
  const router = useRouter()
  const [password, setPassword] = useState<string>("")
  const [isCorrectPassword, setIsCorrectPassword] = useState<boolean>(false)

  async function onKeyDownPassword(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key != "Enter") return
    const passwordHash = await hashAuth(password)
    if (passwordHash == process.env.NEXT_PUBLIC_ACCESS_KEY) {
      sessionStorage.setItem("accessKey", passwordHash)
      setIsCorrectPassword(true)
    }
  }

  useEffect(() => {
    if (isCorrectPassword) {
      router.push("/")
    }
  }, [isCorrectPassword])

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Space h={80} />
      <Flex justify={"center"}>
        <Title color='green' align='center'>
          Travel +{" "}
        </Title>
        <Text color='dimmed' mt={"md"} ml={"md"}>
          created by nicotama
        </Text>
      </Flex>
      <Flex justify={"center"} align={"center"} mt={"xl"}>
        <PasswordInput
          w={600}
          size='lg'
          placeholder='key'
          label='accessKey'
          withAsterisk
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => onKeyDownPassword(e)}
          autoFocus={true}
        />
      </Flex>
    </div>
  )
}
