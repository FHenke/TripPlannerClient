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



        function initMap() {
            // var uluru = {lat: -25.363, lng: 131.044};
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: {lat: -25.363, lng: 131.044}
            });
            /*var marker = new google.maps.Marker({
              position: {{lat: -25.363, lng: 131.044}},
              map: map
            });*/
            map.addListener('mousemove', addPolyline);
        }

        function addPolyline(){
          var flightPath1 = new google.maps.Polyline({
              path: [
                  {lat: 37.772, lng: -122.214},
                  {lat: 21.291, lng: -157.821}
              ],
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 2,
          });

            flightPath1.setMap(map);
         // sleep(15000);

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