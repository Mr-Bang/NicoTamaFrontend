import { Hotel } from "@/types/hotel"
import { Anchor, Breadcrumbs, Text } from "@mantine/core"

type Props = {
  hotel: Hotel
}

export default function HotelBreadcrumb(props: Props) {
  const { hotel } = props
  const breadcrumbs = [
    { name: "楽天トラベルトップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: hotel.region, href: "/" + hotel.region },
    { name: hotel.name },
  ].map((breadcrumb, index) =>
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
    <Breadcrumbs separator='>' mt='xs'>
      {breadcrumbs}
    </Breadcrumbs>
  )
}
