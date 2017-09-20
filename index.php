<!DOCTYPE html>
<html>
  <head>
    <style>
       #map {
        height: 640px;
        width: 100%;
       }
    </style>
  </head>
  <body>

    <div id="map"></div>
    <div id ="demo"></div>
    <div id ="demo2"></div>
    <div id ="demo3"></div>
    <div id ="demo4"></div>
    <div id ="demo5"></div>
    <div id ="demo10"></div>


    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry"></script>
    <script src="GeneratePolyline.js"></script>
    <script src="Colors.js"></script>


    <script>
        var map;
        var mapDrawingInProgress = false;

        dateTimeReviver = function (key, value) {
            var a;
            if (typeof value === 'string') {
                a = /\/Date\((\d*)\)\//.exec(value);
                if (a) {
                    return new Date(+a[1]);
                }
            }
            return value;
        }


        function getRequestObject(){

             var testRequestObject = {
                 origin: {
                     city: "Paris",
                     country: "France",
                     id: "PARI",
                     iata: "CDG"
                     //iata: "YVR"
                 },
                 /*origin: {
                     city: "Hannover",
                     country: "Germany",
                     id: "Hann",
                     //iata: "CDG"
                 },*/
                 destination: {
                     city: "Frankfurt",
                     country: "Germany",
                     id: "FRA",
                     iata: "FRA"
                 },
                 departureDateString: "2017 09 18 12 22",
                 isDeparture: true,
                 //transportation: "CarOnly",
                 transportation: "BusOnly",
                 //transportation: "WalkingOnly",
                 //transportation: "BicyclingOnly",
                 avoid: null,
                 language: "de",
                 //GoogleMapsDistance
                 //GoogleMapsDirection
                 //GoogleMapsOnly
                 //methode: "SkyscannerCacheOnly"
                 //(DatabaseOnly)
                 // methode: "GoogleMapsDistance"
                 methode: "GoogleMapsDirection"
             }


             return testRequestObject;

        }

        function initMap() {
            // var uluru = {lat: -25.363, lng: 131.044};
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 8,
                center: {lat: 51.536631, lng: 9.926776}
            });
            /*var marker = new google.maps.Marker({
              position: {{lat: -25.363, lng: 131.044}},
              map: map
            });*/
            map.addListener('mousemove', mapDrawing);
        }

        //Makes sure that the event handler startes only ones
        function mapDrawing(){
           if(mapDrawingInProgress == false){
               mapDrawingInProgress = true;
               addPolyline();
           }
        }

        function addPolyline(){
            var connectionArray;
            var xmlhttp = new XMLHttpRequest();
            var bounds = new google.maps.LatLngBounds();

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var conText = "";
                    connectionArray = JSON.parse(this.responseText, dateTimeReviver);
                    for (i in connectionArray){

                        //if duration exists parse it from String to Date
                        if(typeof connectionArray[i].duration !== 'undefined') {
                            connectionArray[i].duration = new Date(connectionArray[i].duration.iMillis);
                        }
                        //if departureTime exists parse it from String to Date
                        if(typeof connectionArray[i].departureDate !== 'undefined') {
                            var date = new Date();
                            date.setUTCFullYear(connectionArray[i].departureDate.year, connectionArray[i].departureDate.month, connectionArray[i].departureDate.dayOfMonth);
                            date.setUTCHours(connectionArray[i].departureDate.hourOfDay, connectionArray[i].departureDate.minute, connectionArray[i].departureDate.second);
                            connectionArray[i].departureDate = date;
                        }
                        //if arrivalDate exists parse it from String to Date
                        if(typeof connectionArray[i].arrivalDate !== 'undefined') {
                            var date = new Date();
                            date.setUTCFullYear(connectionArray[i].arrivalDate.year, connectionArray[i].arrivalDate.month, connectionArray[i].arrivalDate.dayOfMonth);
                            date.setUTCHours(connectionArray[i].arrivalDate.hourOfDay, connectionArray[i].arrivalDate.minute, connectionArray[i].arrivalDate.second);
                            connectionArray[i].arrivalDate = date;
                        }



                        /* Print Connection Informations */
                        if(connectionArray[i].origin.city && connectionArray[i].destination.city){
                            conText += connectionArray[i].origin.city + " - " + connectionArray[i].destination.city + "<br>";
                        }
                        if(connectionArray[i].departureDate || connectionArray[i].arrivalDate) {
                            if (connectionArray[i].departureDate) {
                                conText += "(" + connectionArray[i].departureDate.toUTCString() + ")";
                            }
                            if(connectionArray[i].arrivalDate){
                                conText += " - (" + connectionArray[i].arrivalDate.toUTCString() + ")";
                            }
                            conText += "<br>";
                        }
                        if(connectionArray[i].distance){
                            conText += "--> " + (connectionArray[i].distance / 1000) + " km<br>";
                        }
                        if(connectionArray[i].duration){
                            conText += "--> " + connectionArray[i].duration.getUTCHours() + ":" + connectionArray[i].duration.getUTCMinutes() + " h<br>";
                        }
                        if(connectionArray[i].price){
                            conText += "--> " + connectionArray[i].price + " Euro <br>";
                        }



                        document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;
/*
                        var pathpath = [
                            {lat: connectionArray[i].origin.latitude, lng: connectionArray[i].origin.longitude},
                            {lat: connectionArray[i].destination.latitude, lng: connectionArray[i].destination.longitude}
                        ];

                        var polyline1 = connectionArray[i].polyline;
                        var latLongArray = google.maps.geometry.encoding.decodePath(polyline1);
                        for (j in latLongArray){
                            latLongArray[j] = {
                                lat: latLongArray[j].lat(),
                                lng: latLongArray[j].lng()
                            }
                        }
*/
                        //use polyline as first choise for path calculation if available, otherwise use origin and destination coordinates
                        var latLngArray;
                        if(connectionArray[i].polyline){
                            //Generates An Array with Lat and Lng from the polyline and parses the lat lnt objects in a readable format for Google Maps Path afterwards
                            this.latLngArray = GeneratePolyline.coordinateArray.makePathReadable(google.maps.geometry.encoding.decodePath(connectionArray[i].polyline));
                        }else{
                            this.latLngArray = GeneratePolyline.coordinateArray.fromOriginDestination(connectionArray[i].origin, connectionArray[i].destination);
                        }


                        //document.getElementById("demo2").innerHTML = "<br><br>" + this.latlngArray;


                        var flightPath1 = new google.maps.Polyline({
                            /*path: [
                                {lat: connectionArray[i].origin.latitude, lng: connectionArray[i].origin.longitude},
                                {lat: connectionArray[i].destination.latitude, lng: connectionArray[i].destination.longitude}
                            ],*/
                            path: this.latLngArray,
                            geodesic: true,
                            strokeColor: Colors.nextColor(),
                            strokeOpacity: 0.8,
                            strokeWeight: 4,
                        });

                        //sets the coordinates to the bounds to adjust the map center and zoom afterwards
                        bounds.extend({lat: connectionArray[i].origin.latitude, lng: connectionArray[i].origin.longitude});
                        bounds.extend({lat: connectionArray[i].destination.latitude, lng: connectionArray[i].destination.longitude});

                        map.fitBounds(bounds);
                        flightPath1.setMap(map);

                    }
                    document.getElementById("demo").innerHTML = conText;
                }
            };
            //xmlhttp.open("GET", "json.php", true);

            xmlhttp.open("POST", "ConnectionAPI.php", true);
            //xmlhttp.setRequestHeader("Content-Type", "application/json");
            //xmlhttp.send(JSON.stringify({name:"John Rambo", time:"2pm"}));

            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send("request=" + JSON.stringify(getRequestObject()));
            //xmlhttp.send();


      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxV8w1QJyiHDrNwwqDOpZHQT9FMChINH0&callback=initMap">
        addPolyline();

    </script>
  </body>
</html>