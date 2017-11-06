var CheckInput = {
    checkRequest: function(){
            if(document.forms['form1'].elements['origin'].value == ""){
                return "origin";
            }
            if(document.forms['form1'].elements['destination'].value == ""){
                return "destination";
            }
            if(document.forms['form1'].elements['date'].value == ""){
                return "date";
            }
            if(originAutoComplete.getPlace() == null){
                return "originAuto";
            }
            if(destinationAutoComplete.getPlace() == null){
                return "destinationAuto";
            }

            return "OK";
    },

    getErrorMessage: function(errorCode){
        if(errorCode == "origin"){
            return "Pleas fill in a origin before continuing";
        }
        if(errorCode == "originAuto"){
            return "Pleas choose a origin from the auto suggests before continuing";
        }
        if(errorCode == "destination"){
            return "Pleas fill in a desination before continuing";
        }
        if(errorCode == "destinationAuto"){
            return "Pleas choose a destination from the auto suggests before continuing";
        }
        if(errorCode == "date"){
            return "Pleas fill in a date before continuing";
        }
    }



}