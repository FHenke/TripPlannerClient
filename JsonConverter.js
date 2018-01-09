var JsonConverter = {

    convertConnectionDates: function(connection, level){
        //if duration exists parse it from String to Date
        if(typeof connection.duration !== 'undefined') {
            connection.duration = this.convertDuration(connection.duration);
        }
        //if departureTime exists parse it from String to Date
        if(typeof connection.departureDate !== 'undefined') {
            connection.departureDate = this.convertDate(connection.departureDate);
        }
        //if arrivalDate exists parse it from String to Date
        if(typeof connection.arrivalDate !== 'undefined') {
            connection.arrivalDate = this.convertDate(connection.arrivalDate);
        }

        if(connection.subConnections.length > 0 && level < document.forms['form1'].elements['level'].value && (connection.action == "add" || connection.action == "un")) {

            for(k in connection.subConnections){
                connection.subConnections[k] = this.convertConnectionDates(connection.subConnections[k], level+1);
            }

        }

        return connection;
    },

    convertDuration: function(duration){
        return new Date(duration.iMillis);
    },

    convertDate: function(date){
        var newDate = new Date();
        newDate.setUTCFullYear(date.year, date.month, date.dayOfMonth);
        newDate.setUTCHours(date.hourOfDay, date.minute, date.second);
        return newDate;
    }

}