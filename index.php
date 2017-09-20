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
    <div id ="demo1"></div>
    <div id ="demo2"></div>
    <div id ="demo3"></div>
    <div id ="demo4"></div>
    <div id ="demo5"></div>
    <div id ="demo10"></div>


    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry"></script>
    <script src="GeneratePolyline.js"></script>
    <script src="Colors.js"></script>
    <script src="ConnectionTextOutput.js"></script>


    <script>
        var map;
        var mapDrawingInProgress = false;

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
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 8,
                center: {lat: 51.536631, lng: 9.926776}
            });
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
                    connectionArray = JSON.parse(this.responseText);
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

                        //Text output of Connection
                        conText += ConnectionTextOutput.getText(connectionArray[i]);

/*
*/
                        //use polyline as first choise for path calculation if available, otherwise use origin and destination coordinates
                        var latLngArray;
                        if(connectionArray[i].polyline){
                            //Generates An Array with Lat and Lng from the polyline and parses the lat lnt objects in a readable format for Google Maps Path afterwards
                            this.latLngArray = GeneratePolyline.coordinateArray.makePathReadable(google.maps.geometry.encoding.decodePath(connectionArray[i].polyline));
                        }else{
                            this.latLngArray = GeneratePolyline.coordinateArray.fromOriginDestination(connectionArray[i].origin, connectionArray[i].destination);
                        }


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
                    document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;

                }
            };

            xmlhttp.open("POST", "ConnectionAPI.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send("request=" + JSON.stringify(getRequestObject()));


      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxV8w1QJyiHDrNwwqDOpZHQT9FMChINH0&callback=initMap">
        addPolyline();

    </script>
  </body>
</html>