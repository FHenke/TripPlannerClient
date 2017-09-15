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
        var mapDrawingInProgress = false;


        function sleep(milliseconds) {
            var start = new Date().getTime();
            while(true) {
                if ((new Date().getTime() - start) > milliseconds){
                    break;
                }
            }
        }

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

      /**/  var colorMethode = {
            totalNumber: 0,
            colorArray: ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400"],
            nextColor: function(){
                this.totalNumber++;
                return this.colorArray[(this.totalNumber - 1) % this.colorArray.length];
            },

            currentColor: function(){
                return this.colorArray[this.totalNumber % this.colorArray.length];
            }
        }



       /**/ function getRequestObject(){

             var testRequestObject = {
                 origin: {
                     city: "Paris",
                     country: "France",
                     id: "PARI",
                     iata: "CDG"
                 },
                 destination: {
                     city: "Frankfurt",
                     country: "Germany",
                     id: "FRA",
                     iata: "FRA"
                 },
                 departureDateString: "2017 10 22 07 22",
                 isDeparture: true,
                 transportation: "All",
                 avoid: null,
                 language: "de",
                 //GoogleMapsDistance
                 //GoogleMapsDirection
                 //GoogleMapsOnly
                 //methode: "SkyscannerCacheOnly"
                 //(DatabaseOnly)
                 //methode: "GoogleMapsDistance"
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



            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var conText = "";
                    connectionArray = JSON.parse(this.responseText, dateTimeReviver);
                    for (i in connectionArray){

                        //if duration exists parse it from String to Date
                        if(typeof connectionArray[i].duration !== 'undefined') {
                            connectionArray[i].duration = new Date(connectionArray[i].duration.iMillis);
                        }


                        /* Print Connection Informations */
                        conText += connectionArray[i].origin.city + " - " + connectionArray[i].destination.city + "<br>";
                        if(connectionArray[i].distance){
                            conText += "--> " + (connectionArray[i].distance / 1000) +" km<br>";
                        }
                        if(connectionArray[i].duration){
                            conText += "--> " + connectionArray[i].duration.getUTCHours() + ":" + connectionArray[i].duration.getUTCMinutes() + " h<br>";
                        }
                        if(connectionArray[i].price){
                            conText += "--> " + connectionArray[i].price + " Euro <br>";
                        }



                        document.getElementById("demo10").innerHTML = "<br><br>" + this.responseText;

                        var flightPath1 = new google.maps.Polyline({
                            path: [
                                {lat: connectionArray[i].origin.latitude, lng: connectionArray[i].origin.longitude},
                                {lat: connectionArray[i].destination.latitude, lng: connectionArray[i].destination.longitude}
                            ],
                            geodesic: true,
                            strokeColor: colorMethode.nextColor(),
                            strokeOpacity: 0.8,
                            strokeWeight: 4,
                        });

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