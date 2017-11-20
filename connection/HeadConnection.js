function HeadConnection(i, connectionArray){

    //brings the Dates from the JSON in a date js object
    connectionArray[i] = JsonConverter.convertConnectionDates(connectionArray[i]);

        //Text output of Connection
        conText += ConnectionTextOutput.getText(connectionArray[i]);

        //use polyline as first choise for path calculation if available, otherwise use origin and destination coordinates
        var latLngArray;
        if (connectionArray[i].polyline) {
            //Generates An Array with Lat and Lng from the polyline and parses the lat lnt objects in a readable format for Google Maps Path afterwards
            this.latLngArray = GeneratePolyline.coordinateArray.makePathReadable(google.maps.geometry.encoding.decodePath(connectionArray[i].polyline));
        } else {
            this.latLngArray = GeneratePolyline.coordinateArray.fromOriginDestination(connectionArray[i].origin, connectionArray[i].destination);
        }


        connectionArray[i].pathOnMap = new google.maps.Polyline({
            path: this.latLngArray,
            //icons: [carOnLine],
            geodesic: true,
            strokeColor: Colors.nextColor(),
            strokeOpacity: 1.0,
            strokeWeight: 4
        });
        //sets the coordinates to the bounds to adjust the map center and zoom afterwards
        bounds = Bounds.setBounds(this.latLngArray, bounds);

        connectionArray[i].pathOnMap.addListener('mouseover', function (event) {
            for (j in connectionArray) {
                if (google.maps.geometry.poly.isLocationOnEdge(event.latLng, connectionArray[j].pathOnMap, 0.005)) {
                    infowindow.setContent(ConnectionTextOutput.getTransport(connectionArray[j].type) + "<br>via " + connectionArray[j].summary);
                    /*if (connectionArray[j].type == 4 || connectionArray[j].type == 8 || connectionArray[j].type == 9) {
                        infowindow.setContent(connectionArray[j].summary);
                    }
                    if (connectionArray[j].type == 6 || connectionArray[j].type == 8 || connectionArray[j].type == 9) {
                        infowindow.setContent("Public Transport");
                    }
                    if (connectionArray[j].type == 4 || connectionArray[j].type == 8 || connectionArray[j].type == 9) {
                        infowindow.setContent(connectionArray[j].summary);
                    }*/
                infowindow.setPosition(event.latLng);
                infowindow.open(map);
            }
        }

    });

    map.fitBounds(bounds);
    connectionArray[i].pathOnMap.setMap(map);



}