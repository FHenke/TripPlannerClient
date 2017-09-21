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
    <div id ="demo10"></div>

    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry"></script>
    <script src="GeneratePolyline.js"></script>
    <script src="Colors.js"></script>
    <script src="ConnectionTextOutput.js"></script>
    <script src="JsonConverter.js"></script>
    <script src="ExampleRequestObjects.js"></script>
    <script src="Bounds.js"></script>

    <script>
        var map;
        var mapDrawingInProgress = false;

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

                        //brings the Dates from the JSON in a date js object
                        connectionArray[i] = JsonConverter.convertConnectionDates(connectionArray[i]);

                        //Text output of Connection
                        conText += ConnectionTextOutput.getText(connectionArray[i]);

                        //use polyline as first choise for path calculation if available, otherwise use origin and destination coordinates
                        var latLngArray;
                        if(connectionArray[i].polyline){
                            //Generates An Array with Lat and Lng from the polyline and parses the lat lnt objects in a readable format for Google Maps Path afterwards
                            this.latLngArray = GeneratePolyline.coordinateArray.makePathReadable(google.maps.geometry.encoding.decodePath(connectionArray[i].polyline));
                        }else{
                            this.latLngArray = GeneratePolyline.coordinateArray.fromOriginDestination(connectionArray[i].origin, connectionArray[i].destination);
                        }

                        var flightPath1 = new google.maps.Polyline({
                            path: this.latLngArray,
                            geodesic: true,
                            strokeColor: Colors.nextColor(),
                            strokeOpacity: 1.0,
                            strokeWeight: 4,
                        });
                        //sets the coordinates to the bounds to adjust the map center and zoom afterwards
                        bounds = Bounds.setBounds(this.latLngArray, bounds);

                        map.fitBounds(bounds);
                        flightPath1.setMap(map);
                    }
                    document.getElementById("demo").innerHTML = conText;
                    document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;
                }
            };

            xmlhttp.open("POST", "ConnectionAPI.php", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send("request=" + JSON.stringify(ExampleRequestObjects.getRequestObject()));
      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxV8w1QJyiHDrNwwqDOpZHQT9FMChINH0&callback=initMap">
    </script>
  </body>
</html>