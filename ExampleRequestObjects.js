var ExampleRequestObjects = {

    testRequestObject: {
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
        departureDateString: "2017 09 18 12 22",
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

    getRequestObject: function(){
        return this.testRequestObject;
    }
}