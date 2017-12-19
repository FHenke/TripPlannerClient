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
    <div id ="demo3"></div>
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
    <script src="connection/HeadConnection.js"></script>
    <script src="connection/DrawPolyline.js"></script>

    <script>
        var map;
        var zoom = 3;
        var center = {lat: 0, lng: 0};
        var connectionArray;
        var infowindow;
        var originAutoComplete;
        var destinationAutoComplete;
        var bounds;
        var PolylineMap = new Map();
        var idString = "";
        var idString2 = "";
        var test;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: zoom,
                center: center
            });

            originAutoComplete = new google.maps.places.Autocomplete(document.getElementById('enterOrigin'));
            destinationAutoComplete = new google.maps.places.Autocomplete(document.getElementById('enterDestination'));

            test = 1;
            bounds = new google.maps.LatLngBounds();
            infowindow = new google.maps.InfoWindow();
        }

        function addPolyline(){
            idString = "";
            idString2 = "";
            removeAllLines();

            if(CheckInput.checkRequest() == "OK") {
                var xmlhttp = new XMLHttpRequest();
                var bounds = new google.maps.LatLngBounds();
                var requestObject = ExampleRequestObjects.getRequestObject(document.forms['form1'].elements['example'].value);



                //document.getElementById("demo1").innerHTML = "." + document.forms['form1'].elements['returnDate'].value + ".";


                    xmlhttp.onreadystatechange = function () {
                        if (this.readyState == 4 && this.status == 200) {
                            var conText = "";
                            connectionArray = JSON.parse(this.responseText);
                            for (i in connectionArray) {

                                //brings the Dates from the JSON in a date js object
                                connectionArray[i] = JsonConverter.convertConnectionDates(connectionArray[i], 1);

                                //Draw polylines on the map
                                connectionArray[i] = drawPolyline(connectionArray[i], 1);

                                //Text output of Connection
                                conText += ConnectionTextOutput.getRecursiveText(connectionArray[i], 1);


                            }
                            //happens if no results were found
                            if (conText == "") {
                                conText = "<div class='connectionTextBox'> No results available </div>";
                            }
                            document.getElementById("demo").innerHTML = conText;
                            /**/
                            document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;

                        }
                        document.getElementById("demo2").innerHTML = "<br><br>" + idString;
                        document.getElementById("demo3").innerHTML = "<br><br>" + idString2;
                    };


                    xmlhttp.open("POST", "ConnectionAPI.php", true);
                    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xmlhttp.send("request=" + JSON.stringify(requestObject));

                //document.getElementById("demo2").innerHTML = "<br><br>" + idString;
                //document.getElementById("demo3").innerHTML = "<br><br>" + idString2;
            } else{

                alert(CheckInput.getErrorMessage(CheckInput.checkRequest()));
            }

      }

      function removeAllLines(){
          PolylineMap.forEach(function(value, key) {
              if(value.pathOnMap) {
                  value.pathOnMap.setMap(null);
              }
              //value.setMap(null);
              //idString2 = idString2 + "-" + key;
          });
           //removeLine(connectionArray, -1);
          /*for (i in connectionArray){
              connectionArray[i].pathOnMap.setMap(null);
          }*/
        }
    </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDhieKypOeAVC9O1rD2y7SoSEgESt0S8ao&libraries=places&callback=initMap" async defer></script>





  <?php
    include "body/DateTimePicker.php";
  ?>

  </body>
</html>