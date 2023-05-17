import MapLeftBar from '@/components/map/MapLeftBar';
import { Box, Breadcrumbs, Anchor, Grid, SimpleGrid, Image, Text, Title } from '@mantine/core';

const regions = [
  { name: '楽天トラベルトップ', href: '/' },
  { name: '首都圏', href: '/' },
  { name: '東京23区', href: '/' },
  { name: '世田谷・目黒・品川・大田' },
].map((region, index) => (
  region.href ? 
    <Anchor href={region.href} key={index}>
      {region.name}
    </Anchor>
  : <Text key={index}>
      {region.name}
    </Text>
));

const hotels = [
  { name: 'sequence MIYASHITA PARK', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/179182/origin/2ccbcfaa5812b54f3a0d75ff9a5516fb51aa269d.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 8000},
  { name: 'all day place shibuya', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/183706/origin/2968993b95d5a9f88c7c7a41d1f55b592efa7c38.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 11000},
  { name: 'アクトホテル渋谷', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/172650/origin/34fa11566f0e454604825b31297cdab2d3f1a409.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 4600},
  { name: 'sequence MIYASHITA PARK', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/179182/origin/2ccbcfaa5812b54f3a0d75ff9a5516fb51aa269d.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 8000},
  { name: 'all day place shibuya', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/183706/origin/2968993b95d5a9f88c7c7a41d1f55b592efa7c38.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 11000},
  { name: 'アクトホテル渋谷', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/172650/origin/34fa11566f0e454604825b31297cdab2d3f1a409.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 4600},
  { name: 'sequence MIYASHITA PARK', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/179182/origin/2ccbcfaa5812b54f3a0d75ff9a5516fb51aa269d.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 8000},
  { name: 'all day place shibuya', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/183706/origin/2968993b95d5a9f88c7c7a41d1f55b592efa7c38.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 11000},
  { name: 'アクトホテル渋谷', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/172650/origin/34fa11566f0e454604825b31297cdab2d3f1a409.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 4600},
  { name: 'sequence MIYASHITA PARK', href: '/', image: 'https://trvimg.r10s.jp/share/image_up/179182/origin/2ccbcfaa5812b54f3a0d75ff9a5516fb51aa269d.47.9.26.3.jpg?fit=inside|900:507&interpolation=lanczos-none', price: 8000},
].map((hotel, index) => (
  <Box maw={340} mx="auto" key={index} component="a" href={hotel.href}>
      <Image
        radius="md"
        src={hotel.image}
        alt={hotel.name}
      />
      <Text ta="center" fw={700} fz="lg">{hotel.name}</Text>
      <Text ta="center" fz="md">¥ {hotel.price.toLocaleString()} ~</Text>
    </Box>
));

function Nansei() {
  return (
    <>
      <Breadcrumbs separator=">" mt="xs">{regions}</Breadcrumbs>
      <Box
        sx={(theme) => ({
        textAlign: 'left',
        padding: theme.spacing.xl,
      })}
      >
        <Title order={2}>世田谷・目黒・品川・大田</Title>
      </Box>
      <Grid>
	<Grid.Col span="auto">
          <MapLeftBar />
	</Grid.Col>
	<Grid.Col span={6}>
	  <SimpleGrid cols={3}>
	    {hotels}
	  </SimpleGrid>
	</Grid.Col>
	<Grid.Col span="auto">
	  <Box sx={{width: 600}}></Box>
	</Grid.Col>
      </Grid>
    </>
  );
}

export default Nansei
