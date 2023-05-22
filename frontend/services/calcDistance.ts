export const calcDistance = async ({ origin, destinations }) => {
  let distanceList: {
    text: string
    value: number
    durationText: string
  }[] = []

  let service = new google.maps.DistanceMatrixService()
  await service.getDistanceMatrix(
    {
      origins: origin,
      destinations: destinations,
      travelMode: "WALKING",
    },
    callback
  )

  function callback(response, status) {
    if (status == "OK") {
      let origins = response.originAddresses
      let destinations = response.destinationAddresses

      for (let i = 0; i < origins.length; i++) {
        let results = response.rows[i].elements
        for (let j = 0; j < results.length; j++) {
          let element = results[j]
          distanceList.push({
            text: element.distance.text,
            value: element.distance.value,
            durationText: element.duration.text,
          })
        }
      }
    }
  }
  return { distanceList }
}
