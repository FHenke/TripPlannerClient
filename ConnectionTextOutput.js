var ConnectionTextOutput = {
    getText: function (connection) {
        /* Print Connection Informations */
        var connectionString = "";
        if(connection.origin.city && connection.destination.city){
            connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
        }else{
            connectionString += connection.origin.name + " - " + connection.destination.name + "<br>";
        }
        if(connection.departureDate || connection.arrivalDate) {
            if (connection.departureDate) {
                connectionString += "(" + connection.departureDate.toUTCString() + ")";
            }
            if(connection.arrivalDate){
                connectionString += " - (" + connection.arrivalDate.toUTCString() + ")";
            }
            connectionString += "<br>";
        }
        if(connection.distance){
            connectionString += "--> " + (connection.distance / 1000) + " km<br>";
        }
        if(connection.duration){
            if(connection.duration.getUTCDate() > 0){
                connectionString += "--> " + connection.duration.getUTCDate() + " days " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
            }else {
                connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
            }
        }
        if(connection.price){
            connectionString += "--> " + connection.price + " Euro <br>";
        }
        
        return connectionString;
    }
}