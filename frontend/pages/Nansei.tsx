import { Breadcrumbs, Anchor, Text } from '@mantine/core';

const items = [
  { title: '楽天トラベルトップ', href: '/' },
  { title: '首都圏', href: '/' },
  { title: '東京23区', href: '/' },
  { title: '世田谷・目黒・品川・大田' },
].map((item, index) => (
  item.href ? 
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  : <Text key={index}>
      {item.title}
    </Text>
));

function Nansei() {
  return (
    <>
      <Breadcrumbs separator=">" mt="xs">{items}</Breadcrumbs>
    </>
  );
}

export default Nansei
