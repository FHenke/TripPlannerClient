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
                //var pathOnMap = new google.maps.Polyline({
                path: this.latLngArray,
                geodesic: true,
                strokeColor: Colors.nextColor(),
                strokeOpacity: 1.0,
                strokeWeight: 4
            });
            //sets the coordinates to the bounds to adjust the map center and zoom afterwards
            bounds = Bounds.setBounds(this.latLngArray, bounds);

            connection.pathOnMap.addListener('mouseover', function (event) {
                //pathOnMap.addListener('mouseover', function (event) {
                infowindow.setContent(ConnectionTextOutput.getTransport(connection.type) + "<br>via " + connection.summary + " - " + connection.id);
                infowindow.setPosition(event.latLng);
                infowindow.open(map);
            });

            map.fitBounds(bounds);


            //if(PolylineMap.has(connection.id)) {
            if (PolylineMap.has(connection.id)) {
                if (PolylineMap.get(connection.id).pathOnMap) {
                    removeLine(connection.id);
                    //idString = idString + " ; " + connection.origin.name + " - " + connection.destination.name;
                    //idString = idString + " ; " + connection.id;
                }
            }
        /**/
            //pathOnMap.setMap(map);
            connection.pathOnMap.setMap(map);

            PolylineMap.set(connection.id, connection);
            //PolylineMap.set(connection.id, pathOnMap);
            //idString = idString + " ; " + connection.id;

            return connection;
        }
        if(connection.action == "remove"){
            removeLine(connection.id)
            //idString2 = idString2 + " - " + connection.id;
        }
    }

}

function removeLine(id) {
    //idString2 = idString2 + " - " + id;
    if (PolylineMap.has(id)) {
        //idString2 = idString2 + " --> " + PolylineMap.get(id).action;
        if (PolylineMap.get(id).pathOnMap) {
            PolylineMap.get(id).pathOnMap.setMap(null);

        }

        if (PolylineMap.get(id).subConnections) {
            //idString2 = idString2 + " --> " + id;
            if (PolylineMap.get(id).subConnections.length > 0) {
                //idString2 = idString2 + " --> " + id;
                for (con in PolylineMap.get(id).subConnections) {
                    removeLine(PolylineMap.get(id).subConnections[con].id);
                }/**/
            }
        }
    }/**/
    //PolylineMap.get(id).setMap(null);





    /*for(c in con){
        if(c.id == id || id == -1){
            if(c.pathOnMap) {
                c.pathOnMap.setMap(null);
            }
            if(c.subConnections.length > 0){
                removeLine(c.subConnections, -1);
            }
        }
        /*if(c.subConnections.length > 0){
            removeLine(c.subConnections, id);
        }
    }*/
}