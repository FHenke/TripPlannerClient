function drawPolyline(connection, level){

    if(connection.subConnections.length > 0 && level < document.forms['form1'].elements['level'].value){
        //document.getElementById("demo2").innerHTML = connection.subConnections[0].polyline;
        for(k in connection.subConnections){
            connection.subConnections[k] = drawPolyline(connection.subConnections[k], level+1);
        }
        return connection;
    }else {/**/

    //if(connection.subConnections[0].subConnections.subConnections)
    //    document.getElementById("demo2").innerHTML = "true";
    //if(!connection.subConnections[0].subConnections.subConnections)
        document.getElementById("demo3").innerHTML = "false";

        //use polyline as first choise for path calculation if available, otherwise use origin and destination coordinates
        var latLngArray;
        if (connection.polyline) {
            //Generates An Array with Lat and Lng from the polyline and parses the lat lnt objects in a readable format for Google Maps Path afterwards
            this.latLngArray = GeneratePolyline.coordinateArray.makePathReadable(google.maps.geometry.encoding.decodePath(connection.polyline));
        } else {
            this.latLngArray = GeneratePolyline.coordinateArray.fromOriginDestination(connection.origin, connection.destination);
        }


        connection.pathOnMap = new google.maps.Polyline({
            path: this.latLngArray,
            geodesic: true,
            strokeColor: Colors.nextColor(),
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        //sets the coordinates to the bounds to adjust the map center and zoom afterwards
        bounds = Bounds.setBounds(this.latLngArray, bounds);

        connection.pathOnMap.addListener('mouseover', function (event) {
            infowindow.setContent(ConnectionTextOutput.getTransport(connection.type) + "<br>via " + connection.summary);
            infowindow.setPosition(event.latLng);
            infowindow.open(map);
        });

        map.fitBounds(bounds);
        connection.pathOnMap.setMap(map);

        return connection;
    }

}