var TimeZone = {

    //localtime has to be a JS Date object and location has to be a LatLng object
    //returns a JS Date object
    getUTC: function (localTime, location) {
        var timeZoneInfo = this.getTimeZoneInfo((localTime.getTime() / 1000), location);
        //rawOffset = time difference to utc, dstOffset = day light saving time difference
        //calculates the current utc time by subtract the time difference to utc and to day light saving time
        var utcTime = new Date(((localTime.getTime() / 1000) - timeZoneInfo.dstOffset - timeZoneInfo.rawOffset) * 1000);
        return utcTime;
    },

    //localtime has to be a JS date object and location has to be a LatLng object
    getLocal: function (utcTime, location) {
        var timeZoneInfo = this.getTimeZoneInfo(utcTime, location);
        //rawOffset = time difference to utc, dstOffset = day light saving time difference
        //calculates the current utc time by add the time difference to utc and to day light saving time
        var localTime = new Date(((utcTime.getTime() / 1000) + timeZoneInfo.dstOffset + timeZoneInfo.rawOffset) * 1000);
        return localTime;
    },

    //DateString is the date from the input field
    getUTCFromText: function(dateString, location) {
        var localTime = new Date(0);
        //document.getElementById("demo1").innerHTML = "." + dateString + ".";
        if (dateString != "") {
            //document.getElementById("demo2").innerHTML = "." + "test" + ".";
            var splitString = dateString.split(/\/|:| /);
            localTime.setUTCFullYear(splitString[0], (splitString[1] - 1), splitString[2]);
            localTime.setUTCHours(splitString[3], splitString[4], 0, 0);
            var utcTime = this.getUTC(localTime, location);
        }
        return utcTime.getTime();
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