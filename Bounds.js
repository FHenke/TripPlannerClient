var Bounds = {

    //bounds: new google.maps.LatLngBounds(),

    setBounds: function(latLngArray, bounds){
        for(a in latLngArray) {
            //bounds.extend({lat: latLngArray[a].lat, lng: latLngArray[a].lng});
            bounds.extend(latLngArray[a]);
        }
        return bounds;
    }

}