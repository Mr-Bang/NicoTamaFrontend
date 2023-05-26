import { Hotel } from "@/types/hotel"
import { Anchor, Breadcrumbs, Text } from "@mantine/core"
import { Area, areaDetail } from "@/types/area"

type Props = {
  hotel: Hotel
}

export default function HotelBreadcrumb(props: Props) {
  const { hotel } = props
  const breadcrumbs = [
    { name: "楽天トラベルプラストップ", href: "/" },
    { name: "首都圏", href: "/SearchPageMetropolitan" },
    { name: "東京23区", href: "/SearchPageTokyo" },
    { name: areaDetail[hotel.region as Area], href: "/" + hotel.region },
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
