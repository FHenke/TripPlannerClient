var Colors = {
    totalNumber: 0,
    colorArray: ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400"],

    nextColor: function() {
        this.totalNumber++;
        return this.colorArray[(this.totalNumber - 1) % this.colorArray.length];
    },

    currentColor: function(){
        return this.colorArray[this.totalNumber % this.colorArray.length];
    }
}

/*
function Colors() {
    var totalNumber = 0;
    var colorArray = ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400"];

    function Colors(){
        this.totalNumber = 0;
        this.colorArray = ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400"];
    }

    function nextColor(){
        this.totalNumber++;
        return this.colorArray[(this.totalNumber - 1) % this.colorArray.length];
    }

    function currentColor(){
        return this.colorArray[this.totalNumber % this.colorArray.length];
    }
}

function Colors() {
    var totalNumber = 0;
    var colorArray = ["#C0392B", "#E74C3C", "#9B59B6", "#8E44AD", "#2980B9", "#3498DB", "#1ABC9C", "#16A085", "#27AE60", "#2ECC71", "#F1C40F", "#F39C12", "#E67E22", "#D35400"];
    var nextColor = function(){
        this.totalNumber++;
        return this.colorArray[(this.totalNumber - 1) % this.colorArray.length];
    }

    var currentColor = function(){
        return this.colorArray[this.totalNumber % this.colorArray.length];
    }
}*/