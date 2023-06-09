import { createStyles, Title, Text, Button, Container, Group, rem, Header, Flex, Center } from "@mantine/core"
import { useRouter } from "next/router"

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(90),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(50),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}))

export default function SmallScreen() {
  const { classes } = useStyles()
  const router = useRouter()

  return (
    <Container className={classes.root}>
      <Flex align={"center"} justify={"center"} mt={"md"}>
        <Title color={"green"}>Rakuten Travel X </Title>
        <Title ml='sm'>からのお願い</Title>
      </Flex>

      <div className={classes.label}> This window size is too small</div>
      <Title className={classes.title}>大きなwindow画面で開いてください</Title>
      <Text color='dimmed' size='lg' align='center' className={classes.description}>
        This window size is too small. Please view this page on a larger screen.
      </Text>
      <Group position='center'>
        <Button variant='subtle' size='xl' onClick={() => router.push("/")}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}
