var ConnectionTextOutput = {
   /* getText: function (connection) {
        /* Print connection Informations
        var connectionString = "<div class='connectionTextBox'>";

        //Origin an destination
        if(connection.origin.city && connection.destination.city){
            connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
        }else{
            connectionString += connection.origin.name + " - " + connection.destination.name + "<br>";
        }

        //departure and arrival date
        if(connection.departureDate || connection.arrivalDate) {
            if (connection.departureDate) {
                connectionString += "(" + TimeZone.getLocal(connection.departureDate, {lat: connection.origin.latitude, lng: connection.origin.longitude}).toUTCString() + ")";
            }
            if(connection.arrivalDate){
                connectionString += " - (" + TimeZone.getLocal(connection.arrivalDate, {lat: connection.origin.latitude, lng: connection.origin.longitude}).toUTCString() + ")";
            }
            connectionString += "<br>";
        }

        //summary
        if(connection.summary){
            connectionString += "(" + connection.summary + ")<br>";
        }

        //transportation
        if(connection.type != 0){
            connectionString += "--> Transport: " + this.getTransport(connection.type) + "<br>";
        }

        //distance
        if(connection.distance){
            connectionString += "--> " + (connection.distance / 1000) + " km<br>";
        }

        //duration
        if(connection.duration){
            if(connection.duration.getUTCDate() > 1){
                connectionString += "--> " + (connection.duration.getUTCDate() - 1) + " days " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
            }else {
                connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
            }
        }

        //price
        if(connection.price){
            connectionString += "--> " + connection.price + " Euro <br>";
        }

        connectionString += "</div>"
        
        return connectionString;
    },*/

   // Method supports remove actions, this action type is no longer supported
    /*getRecursiveText: function(connection, level){

        if(connection.subConnections.length > 0 && level < document.forms['form1'].elements['level'].value && (connection.action == "add")){
                   //document.getElementById("demo2").innerHTML = connection.subConnections[0].polyline;
                   var connectionString = "<div class='connectionTextBox connectionTextBox" + level + "'>";
                   //connectionString += connection.id + "-->" + connecon.subConnections;

                   //Origin an destination
                   if(connection.origin.city && connection.destination.city){
                       connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
                   }else{
                       connectionString += connection.origin.name + " - " + connection.destination.name + "<br>";
                   }

                   //departure and arrival date
                   if(connection.departureDate || connection.arrivalDate) {
                       if (connection.departureDate && connection.origin) {
                           connectionString += "(" + TimeZone.getLocal(connection.departureDate, {lat: connection.origin.latitude, lng: connection.origin.longitude}).toUTCString() + ")";
                       }
                       if(connection.arrivalDate){
                           connectionString += " - (" + TimeZone.getLocal(connection.arrivalDate, {lat: connection.origin.latitude, lng: connection.origin.longitude}).toUTCString() + ")";
                       }
                       connectionString += "<br>";
                   }

                   //summary
                   if(connection.summary){
                       connectionString += "(" + connection.summary + ")<br>";
                   }

                   //duration
                   if(connection.duration){
                       if(connection.duration.getUTCDate() > 1){
                           connectionString += "--> " + (connection.duration.getUTCDate() - 1) + " days " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
                       }else {
                           connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
                       }
                   }

                   //price
                   if(connection.price){
                       connectionString += "--> " + connection.price + " Euro <br>";
                   }


                   var subConnectionString = "";
                   //Recursive call of sub connections
                   for(k in connection.subConnections){
                       if(connection.subConnections[k])
                           subConnectionString += this.getRecursiveText(connection.subConnections[k], level+1);
                   }

            //If all sub connections are removed from the map, this connection shouldn't be displayed in the Textoutput, therefor it returns an empty String
            if(subConnectionString == ""){
                return "";
            }else{
                connectionString += subConnectionString + "</div>";
            }

            return connectionString;
        }else{
            if(connection.action == "remove") {
                // If the connection was removed from the map return an empty string
                if (connection.pathOnMap.getMap() == null && document.forms['form1'].elements['view'].value == 1) {
                    return "";
                }
            } else {
                var connectionString = "<div class='connectionTextBox'>";

                //Origin an destination
                if (connection.origin.city && connection.destination.city) {
                    connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
                } else {
                    connectionString += connection.origin.name + " - " + connection.destination.name + "<br>";
                }

                //departure and arrival date
                if (connection.departureDate || connection.arrivalDate) {
                    if (connection.departureDate) {
                        connectionString += "(" + TimeZone.getLocal(connection.departureDate, {
                            lat: connection.origin.latitude,
                            lng: connection.origin.longitude
                        }).toUTCString() + ")";
                    }
                    if (connection.arrivalDate) {
                        connectionString += " - (" + TimeZone.getLocal(connection.arrivalDate, {
                            lat: connection.origin.latitude,
                            lng: connection.origin.longitude
                        }).toUTCString() + ")";
                    }
                    connectionString += "<br>";
                }

                //summary
                if (connection.summary) {
                    connectionString += "(" + connection.summary + ")<br>";
                }

                //transportation
                if (connection.type != 0) {
                    connectionString += "--> Transport: " + this.getTransport(connection.type) + "<br>";
                }

                //distance
                if (connection.distance) {
                    connectionString += "--> " + (connection.distance / 1000) + " km<br>";
                }

                //duration
                if (connection.duration) {
                    if (connection.duration.getUTCDate() > 1) {
                        connectionString += "--> " + (connection.duration.getUTCDate() - 1) + " days " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
                    } else {
                        connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
                    }
                }

                //price
                if (connection.price) {
                    connectionString += "--> " + connection.price + " Euro <br>";
                }

                connectionString += "</div>"

                return connectionString;
            }
        }
    },*/


    getRecursiveText: function(connection, level){

        if(level <= document.forms['form1'].elements['level'].value && (connection.action == "add")){
            //document.getElementById("demo2").innerHTML = connection.subConnections[0].polyline;
            var connectionString = "<div class='connectionTextBox connectionTextBox" + level + "'>";
            //connectionString += connection.id + "-->" + connecon.subConnections;

            //Origin an destination
            if(connection.origin.city && connection.destination.city){
                connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
            }else{
                if(connection.origin.name && connection.destination.name)
                    connectionString += connection.origin.name + " - " + connection.destination.name + "<br>";
            }

            //departure and arrival date
            if(connection.departureDate || connection.arrivalDate) {
                if (connection.departureDate && connection.origin) {
                    connectionString += "(" + TimeZone.getLocal(connection.departureDate, {lat: connection.origin.latitude, lng: connection.origin.longitude}).toUTCString() + ")";
                }
                if(connection.arrivalDate){
                    connectionString += " - (" + TimeZone.getLocal(connection.arrivalDate, {lat: connection.origin.latitude, lng: connection.origin.longitude}).toUTCString() + ")";
                }
                connectionString += "<br>";
            }

            //summary
            if(connection.htmlInstructions){
                connectionString += connection.htmlInstructions + "<br>";
            }else {
                if (connection.summary) {
                    connectionString += "(" + connection.summary + ")<br>";
                }
            }

            if(connection.distance && connection.distance < 2147483647){
                if(connection.distance < 1000){
                    connectionString += "--> " + connection.distance + " m<br>";
                }else {
                    connectionString += "--> " + (connection.distance / 1000) + " km<br>";
                }
            }

            //duration
            if(connection.duration){
                if(connection.duration.getUTCDate() > 1){
                    connectionString += "--> " + (connection.duration.getUTCDate() - 1) + " days " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
                }else {
                    connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
                }
            }

            //price
            if(connection.price){
                connectionString += "--> " + connection.price + " Euro <br>";
            }



            var subConnectionString = "";
            //Recursive call of sub connections
            if(connection.subConnections.length > 0) {
                for (k in connection.subConnections) {
                    if (connection.subConnections[k])
                        subConnectionString += this.getRecursiveText(connection.subConnections[k], level + 1);
                }
            }
            connectionString += subConnectionString + "</div>";

            return connectionString;
        }else{
            return "";
        }
    },

    getTransport: function(transportNumber){
        switch(transportNumber){
            case 1:
                return "Plane";
                break;
            case 6:
                return "Public Transport";
                break;
            case 4:
                return "Car";
                break;
            case 8:
                return "Walking";
                break;
            case 9:
                return "Bicycle";
                break;
        }
    }
}