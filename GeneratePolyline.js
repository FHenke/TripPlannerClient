var GeneratePolyline = {
    coordinateArray: {
       makePathReadable: function (latLngArray) {
            //Generates An Array with Lat and Lng from the polyline
            //parses the lat lnt objects in a readable format for Google Maps Path
            for (j in latLngArray) {
                latLngArray[j] = {
                    lat: latLngArray[j].lat(),
                    lng: latLngArray[j].lng()
                }
            }
            return latLngArray;
        },
        fromOriginDestination: function (origin, destination) {
            var latLngArray = [
                {lat: origin.latitude, lng: origin.longitude},
                {lat: destination.latitude, lng: destination.longitude}
            ]
            return latLngArray;
        }
    }
}