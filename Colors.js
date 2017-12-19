var Colors = {
    totalNumber: 0,
    colorArray: ["#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF", "#008080", "#0000FF", "#000080", "#FF00FF", "#800080", "#F39C12"],

    nextColor: function() {
        this.totalNumber++;
        return this.colorArray[(this.totalNumber - 1) % this.colorArray.length];
    },

    getGrey: function() {
        return '#929393';
    },

    currentColor: function(){
        return this.colorArray[this.totalNumber % this.colorArray.length];
    }
}