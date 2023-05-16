import ActivityList from "@/components/map/ActivityList"
import MapLeftBar from "@/components/map/MapLeftBar"
import { Box, Flex, SimpleGrid } from "@mantine/core"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import { useEffect } from "react"

const containerStyle = {
  width: "100%",
  height: "100vh",
}

const center = {
  lat: 35.69575,
  lng: 139.77521,
}

const googleMapsApiKey: string = process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string

export default function Map() {
  return (
    <Flex>
      <MapLeftBar />
      <Box sx={{ width: 100 }} />
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}></GoogleMap>
      </LoadScript>
      <Box sx={{ width: 100 }} />
      <ActivityList />
    </Flex>
  )
}
