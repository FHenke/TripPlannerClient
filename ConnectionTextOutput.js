var ConnectionTextOutput = {
    getText: function (connection) {
        /* Print Connection Informations */
        var connectionString = "";

        //Origin an destination
        if(connection.origin.city && connection.destination.city){
            connectionString += connection.origin.city + " - " + connection.destination.city + "<br>";
        }else{
            connectionString += connection.origin.name + " - " + connection.destination.name + "<br>";
        }

        //departure and arrival date
        if(connection.departureDate || connection.arrivalDate) {
            if (connection.departureDate) {
                connectionString += "(" + connection.departureDate.toUTCString() + ")";
            }
            if(connection.arrivalDate){
                connectionString += " - (" + connection.arrivalDate.toUTCString() + ")";
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
            if(connection.duration.getUTCDate() > 0){
                connectionString += "--> " + connection.duration.getUTCDate() + " days " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
            }else {
                connectionString += "--> " + connection.duration.getUTCHours() + ":" + connection.duration.getUTCMinutes() + " h<br>";
            }
        }

        //price
        if(connection.price){
            connectionString += "--> " + connection.price + " Euro <br>";
        }
        
        return connectionString;
    },

    getTransport: function(transportNumber){
        switch(transportNumber){
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