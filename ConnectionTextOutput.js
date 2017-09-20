var ConnectionTextOutput = {
    getText: function (connection) {
        /* Print Connection Informations */
        var connectionString = "";
        if(connection.origin.city && connection.destination.city){
            connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
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
            connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
        }
        if(connection.price){
            connectionString += "--> " + connection.price + " Euro <br>";
        }
        
        return connectionString;
    }
}