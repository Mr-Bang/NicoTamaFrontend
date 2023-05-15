import { MantineProvider, Button, ButtonStylesParams, Group, Text, rem } from '@mantine/core';

function Page() {
  return (
    <MantineProvider
      theme={{
        components: {
          Button: {
            // Subscribe to theme and component params
            styles: (theme, params: ButtonStylesParams, { variant }) => ({
              root: {
                height: '2.625rem',
                padding: '0 1.875rem',
                backgroundColor:
                  variant === 'filled'
                    ? theme.colors[params.color || theme.primaryColor][9]
                    : undefined,
              },
            }),
          },
        },
      }}
    >
      <Text fz="xl" fw={700} ta="left">住友不動産ホテル ヴィラフォンテーヌグランド東京田町</Text>
      <Group position="center">
        <Button
	  variant="default"
	  component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://travel.rakuten.co.jp/HOTEL/80762/80762.html"
          styles={(theme) => ({
            root: {
              height: rem(42),
              paddingLeft: rem(20),
              paddingRight: rem(20),
              '&:not([data-disabled])': theme.fn.hover({
                backgroundColor: theme.fn.darken('#EAEAEA', 0.05),
		border: 0,
              }),
            },

            leftIcon: {
              marginRight: theme.spacing.md,
            },
          })}>施設紹介</Button>
        <Button variant="default">プラン一覧</Button>
        <Button variant="default">部屋一覧</Button>
        <Button variant="default">写真・動画(76)</Button>
        <Button variant="default">地図・アクセス</Button>
        <Button variant="default">お客様の声(567)</Button>
        <Button variant="default">クーポン一覧</Button>
      </Group>
    </MantineProvider>
  );
}

export default Page;
