var ExampleRequestObjects = {

    requestObject: function(){

        var request = {
            origin: {
                name: document.forms['form1'].elements['origin'].value,
                latitude: originAutoComplete.getPlace().geometry.location.lat(),
                longitude: originAutoComplete.getPlace().geometry.location.lng()
            },
            destination: {
                name: document.forms['form1'].elements['destination'].value,
                latitude: destinationAutoComplete.getPlace().geometry.location.lat(),
                longitude: destinationAutoComplete.getPlace().geometry.location.lng()
            },
            departureDateEpochTime: TimeZone.getUTCFromText(document.forms['form1'].elements['date'].value, {lat: originAutoComplete.getPlace().geometry.location.lat(), lng: originAutoComplete.getPlace().geometry.location.lng()}),
            //returnDateEpochTime: TimeZone.getUTCFromText(document.forms['form1'].elements['returnDate'].value, {lat: departureAutoComplete.getPlace().geometry.location.lat(), lng: departureAutoComplete.getPlace().geometry.location.lng()}),
            isDeparture: checkIfDepartureTime(document.forms['form1'].elements['departure_arrival'].value),
            showAlternatives: true,
            transportation: [document.forms['form1'].elements['car'].checked,
                document.forms['form1'].elements['public_transport'].checked,
                document.forms['form1'].elements['bicycle'].checked,
                document.forms['form1'].elements['walk'].checked,
                document.forms['form1'].elements['airplane'].checked
            ],
            avoid: null,
            language: "de",
            methode: document.forms['form1'].elements['method'].value
        }

        function checkIfDepartureTime(input){
            if(input == "setDepartureTime"){
                return true;
            }
            return false;
        }

        return request;
    },

    testRequestObject1: {
        origin: {
            city: "Paris",
            country: "France",
            id: "PARI",
            iata: "CDG"
            //iata: "YVR"
        },
        /*origin: {
            city: "Hannover",
            country: "Germany",
            id: "Hann",
            //iata: "CDG"
        },*/
        destination: {
            city: "Frankfurt",
            country: "Germany",
            id: "FRA",
            iata: "FRA"
        },
        departureDateEpochTime: "2017 09 18 12 22",
        isDeparture: true,
        showAlternatives: true,
        transportation: "CarOnly",
        //transportation: "BusOnly",
        //transportation: "WalkingOnly",
        //transportation: "BicyclingOnly",
        avoid: null,
        language: "de",
        //methode: "SkyscannerCacheOnly"
        //(DatabaseOnly)
        //methode: "GoogleMapsDistance"
         methode: "GoogleMapsDirection"
    },

    getRequestObject: function(example){
        switch(example){
            case "noEx":
                return this.requestObject();
                break;
            case "ex1":
                return this.testRequestObject1;
                break;
            case "ex2":
                return this.testRequestObject2;
                break;
            case "ex3":
                return this.testRequestObject3;
                break;
            case "ex4":
                return this.testRequestObject4;
                break;
            case "ex5":
                return this.testRequestObject5;
                break;
            case "ex6":
                return this.testRequestObject6;
                break;
            case "ex7":
                return this.testRequestObject7;
                break;
            case "ex8":
                return this.testRequestObject8;
                break;
        }
    }
}

function RequestObject(){
    this.origin.city = "Paris";
    this.origin.country = "France";
    this.destination.city = "Hannover";
    this.destination.country = "Germany";
    this.departureDateEpochTime = "2017 09 18 12 22";
    this.isDeparture = true;
    this.showAlternatives = true;
    this.transportation = "CarOnly";
    this.avoid = null;
    this.language = "de";
    this.methode = "GoogleMapsDirection";
}