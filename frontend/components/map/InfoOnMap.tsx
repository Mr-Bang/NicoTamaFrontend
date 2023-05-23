import { InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api"
import { GoogleMap } from "@react-google-maps/api"
import { ActivityList } from "@/types/activityList"
import { faHotel } from "@fortawesome/free-solid-svg-icons"
import { SimpleMapStyle } from "@/components/map/SimpleMapStyle"

export default function infomap(props) {
  ;<InfoWindowF position={{ lat: Number(activity.latitude), lng: Number(activity.longitude) }}>
    <div>aaaaaaaaa</div>
  </InfoWindowF>
}
