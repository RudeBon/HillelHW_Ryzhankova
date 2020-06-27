const vue = new Vue(
    {
        el: '#app',
        data: {
            changeHeight(){
                this.column.height = this.input.value + " px";
            },  
            diagrams : [
                {color : "red", name : "first", value: 110},
                {color : "blue", name : "second", value: 130},
                {color : "green", name : "third", value: 150},
                {color : "yellow", name : "fourth", value: 170},
                {color : "aqua", name : "fifth", value: 190},
                {color : "pink", name : "sixth", value: 210},
                {color : "orange", name : "seventh", value: 230},
            ],    
        }
    }
);

