var TimeZone = {

    getUTC: function (localTime, location) {
        var timeZoneInfo = this.getTimeZoneInfo(localTime, location);
        //rawOffset = time difference to utc, dstOffset = day light saving time difference
        //calculates the current utc time by subtract the time difference to utc and to day light saving time
        var utcTime = localTime - timeZoneInfo.dstOffset - timeZoneInfo.rawOffset;
        return utcTime;
    },

    getLocal: function (utcTime, location) {
        var timeZoneInfo = this.getTimeZoneInfo(utcTime, location);
        //rawOffset = time difference to utc, dstOffset = day light saving time difference
        //calculates the current utc time by add the time difference to utc and to day light saving time
        var localTime = utcTime + timeZoneInfo.dstOffset + timeZoneInfo.rawOffset;
        return localTime;
    },

    //Gets information about the TimeZone of the given location at the given date
    getTimeZoneInfo: function(date, location){
        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "https://maps.googleapis.com/maps/api/timezone/json?location=" + location.lat + "," + location.lng +"&timestamp=" + date + "&key=AIzaSyCfBLegejThMTrjkQn3b3R9IErezqTx9UI", false);
        xhttp.send();

        if (xhttp.status == 200) {
            return JSON.parse(xhttp.responseText);
        }
    }
}