var Bounds = {

    setBounds: function(latLngArray, bounds){
        for(a in latLngArray) {
            bounds.extend(latLngArray[a]);
        }
        return bounds;
    }

}