<!DOCTYPE html>
<html>
  <head>

      <?php
        include "header/Stylesheets.php";
      ?>



  </head>
  </head>
  <body>

  <div class="all">
      <?php
        include "body/MenuBar.php";
      ?>




    <div class="map" id="map"></div>

      <div id="ConectionTextOutputBackround" class="ConectionTextOutputBackround">
          <div class="InnerConectionTextOutput menuText">
                <div id ="demo"></div>
          </div>
      </div>

    <div id ="demo1"></div>
    <div id ="demo2"></div>
    <div id ="demo10"></div>
  </div>

    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry"></script>
    <script src="GeneratePolyline.js"></script>
    <script src="Colors.js"></script>
    <script src="ConnectionTextOutput.js"></script>
    <script src="JsonConverter.js"></script>
    <script src="ExampleRequestObjects.js"></script>
    <script src="Bounds.js"></script>
    <script src="TimeZone.js"></script>
    <script src="CheckInput.js"></script>

    <script>
        var map;
        var zoom = 3;
        var center = {lat: 0, lng: 0};
        var connectionArray;
        var infowindow;
        var originAutoComplete;
        var destinationAutoComplete;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoom,
                center: center
            });

            originAutoComplete = new google.maps.places.Autocomplete(document.getElementById('enterOrigin'));
            destinationAutoComplete = new google.maps.places.Autocomplete(document.getElementById('enterDestination'));

            infowindow = new google.maps.InfoWindow();
        }

        function addPolyline(){
            if(CheckInput.checkRequest() == "OK") {
                var xmlhttp = new XMLHttpRequest();
                var bounds = new google.maps.LatLngBounds();
                var requestObject = ExampleRequestObjects.getRequestObject(document.forms['form1'].elements['example'].value);

                removeAllLines();

                //document.getElementById("demo1").innerHTML = "." + document.forms['form1'].elements['returnDate'].value + ".";

                xmlhttp.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        var conText = "";
                        connectionArray = JSON.parse(this.responseText);
                        for (i in connectionArray) {

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
                                        if (connectionArray[j].type == 4 || connectionArray[j].type == 8 || connectionArray[j].type == 9) {
                                            infowindow.setContent(connectionArray[j].summary);
                                        }
                                        if (connectionArray[j].type == 6 || connectionArray[j].type == 8 || connectionArray[j].type == 9) {
                                            infowindow.setContent("Public Transport");
                                        }
                                        /*if (connectionArray[j].type == 4 || connectionArray[j].type == 8 || connectionArray[j].type == 9) {
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
                        //happens if no results were found
                        if (conText == "") {
                            conText = "<div class='connectionTextBox'> No results available </div>";
                        }
                        document.getElementById("demo").innerHTML = conText;
                        /**/
                        document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;

                    }
                    //document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;
                };


                xmlhttp.open("POST", "ConnectionAPI.php", true);
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                xmlhttp.send("request=" + JSON.stringify(requestObject));
            } else{

                alert(CheckInput.getErrorMessage(CheckInput.checkRequest()));
            }
      }

        /*function _(el){
            return document.getElementById(el);
        }

        function progressHandler(event){
            _("status").innerHTML = event.target.responseText;
        }*/

      function removeAllLines(){
          for (i in connectionArray){
              connectionArray[i].pathOnMap.setMap(null);
          }
        }
    </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxV8w1QJyiHDrNwwqDOpZHQT9FMChINH0&libraries=places&callback=initMap" async defer></script>





  <?php
    include "body/DateTimePicker.php";
  ?>

  </body>
</html>