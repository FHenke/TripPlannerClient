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
    <div id ="demo10"></div>
    <script>
        var map;


        function sleep(milliseconds) {
            var start = new Date().getTime();
            while(true) {
                if ((new Date().getTime() - start) > milliseconds){
                    break;
                }
            }
        }

        var colorMethode = {
            totalNumber: 0,
            colorArray: ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400"],
            nextColor: function(){
                this.totalNumber++;
                return this.colorArray[(this.totalNumber - 1) % this.colorArray.length];
            }
        }

        /*function getColor(){
            //totalNumber++;
            //(totalNumber - 1) % colorArray.length
            //document.getElementById("demo10").innerHTML = colorArray[0];
            return "#C0392B";
        }*/

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
            map.addListener('mousemove', addPolyline);
        }

        function addPolyline(){
            var connectionArray;
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var conText = "";
                    connectionArray = JSON.parse(this.responseText);
                    for (i in connectionArray){
                        conText += connectionArray[i].origin.city + " - " + connectionArray[i].destination.city + "<br>";


                        var flightPath1 = new google.maps.Polyline({
                            path: [
                                {lat: connectionArray[i].origin.latitude, lng: connectionArray[i].origin.longitude},
                                {lat: connectionArray[i].destination.latitude, lng: connectionArray[i].destination.longitude}
                            ],
                            geodesic: true,
                            strokeColor: colorMethode.nextColor(),
                            strokeOpacity: 1.0,
                            strokeWeight: 2,
                        });

                        flightPath1.setMap(map);

                    }
                    document.getElementById("demo").innerHTML = conText;
                }
            };
            xmlhttp.open("GET", "json.php", true);
            xmlhttp.send();


         // sleep(15000);
/*
          var flightPath = new google.maps.Polyline({
              path: [
                  {lat: -18.142, lng: 178.431},
                  {lat: -27.467, lng: 153.027}
              ],
              geodesic: true,
              strokeColor: '#0000FF',
              strokeOpacity: 1.0,
              strokeWeight: 2,
              map: map
          });
*/
         /* var marker = new google.maps.Marker({
              position: {lat: -20.363, lng: 151.044},
              map: map
          });*/
      }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxV8w1QJyiHDrNwwqDOpZHQT9FMChINH0&callback=initMap">
        addPolyline();

    </script>
  </body>
</html>