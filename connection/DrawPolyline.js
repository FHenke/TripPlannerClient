function drawPolyline(connection, level){

    if(connection.subConnections.length > 0 && level < document.forms['form1'].elements['level'].value){
        //document.getElementById("demo2").innerHTML = connection.subConnections[0].polyline;
        for(k in connection.subConnections){
            if(!PolylineMap.has(connection.subConnections[k].id) && connection.subConnections[k].action == "add"){
                PolylineMap.set(connection.subConnections[k].id, connection.subConnections[k]);
                //idString = idString + " ; " + connection.subConnections[k].id + "->" + connection.subConnections[k].action;
            }
            connection.subConnections[k] = drawPolyline(connection.subConnections[k], level+1);
        }
        return connection;
    }else {
        //sleepFor(2000);
        if(connection.action == "add") {
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
                infowindow.setContent(ConnectionTextOutput.getTransport(connection.type) + "<br>via " + connection.summary + "<br>" + connection.id);
                infowindow.setPosition(event.latLng);
                infowindow.open(map);
            });

            map.fitBounds(bounds);

            if (PolylineMap.has(connection.id)) {
                if (PolylineMap.get(connection.id).pathOnMap) {
                    removeLine(connection.id);
                }
            }

            connection.pathOnMap.setMap(map);
            PolylineMap.set(connection.id, connection);

            return connection;
        }
        if(connection.action == "remove"){
            if(document.forms['form1'].elements['view'].value == 1){
                removeLine(connection.id);
            }else{
                setLineGrey(connection.id);
            }
        }
    }

}

function removeLine(id) {
    if (PolylineMap.has(id)) {
        if (PolylineMap.get(id).pathOnMap) {
            PolylineMap.get(id).pathOnMap.setMap(null);
        }

        if (PolylineMap.get(id).subConnections) {
            if (PolylineMap.get(id).subConnections.length > 0) {
                for (con in PolylineMap.get(id).subConnections) {
                    removeLine(PolylineMap.get(id).subConnections[con].id);
                }
            }
        }
    }
}

function setLineGrey(id) {
    if (PolylineMap.has(id)) {
        if (PolylineMap.get(id).pathOnMap) {
            PolylineMap.get(id).pathOnMap.strokeColor = Colors.getGrey();

            //Map has to set null and to set to map afterwards again, otherwise it wount work this function is called by the request of a second connection
            PolylineMap.get(id).pathOnMap.setMap(null);
            PolylineMap.get(id).pathOnMap.setMap(map);
        }

        if (PolylineMap.get(id).subConnections) {
            if (PolylineMap.get(id).subConnections.length > 0) {
                for (con in PolylineMap.get(id).subConnections) {
                    setLineGrey(PolylineMap.get(id).subConnections[con].id);
                }
            }
        }
    }
}


function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}
