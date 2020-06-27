Vue.component('diagrams', {
    data(){
        return{
            diagramsArr : [],
            writeLocalStorage(){
                localStorage.diagramsArr = JSON.stringify(this.diagramsArr);
            }
        }
    },
    created () {
        if (localStorage.diagramsArr) {
            this.diagramsArr = JSON.parse(localStorage.diagramsArr);
            console.log(this.diagramsArr); 
        } else {
            this.diagramsArr = [
                {color : "red", name : "first", value : "100"},
                {color : "blue", name : "second", value : "100"},
                {color : "green", name : "third", value : "100"},
                {color : "yellow", name : "fourth", value : "100"},
                {color : "aqua", name : "fifth", value : "100"},
                {color : "pink", name : "sixth", value : "100"},
                {color : "orange", name : "seventh", value : "100"},
            ];
            this.writeLocalStorage()
        }
    },
    methods: {
        sortBtn(arr){
            arr.sort(function(a, b){
                return a.value-b.value
            });
            console.log(this.diagramsArr);   
            this.writeLocalStorage();
        },        
        onChangeValue(value, name){                                                     
            let columnIndex = this.diagramsArr.findIndex(item => item.name == name);
            this.diagramsArr[columnIndex].value = value;
            console.log(this.diagramsArr);            
            this.writeLocalStorage()
        },
    },
    template: `
        <div class="diagrams">
            <ul>
                <column 
                    v-for="column in diagramsArr" 
                    v-bind:name="column.name"
                    v-bind:color="column.color"
                    v-bind:value="column.value"
                    @changedValue="onChangeValue"
                ></column>   
            </ul> 
            <button @click="sortBtn(diagramsArr)">Sort diagrams</button>        
        </div>
        `
});

Vue.component('column', {
    props: ['name', 'color', 'value'],
    data(){
        return{ 
            keyName : this.name + "Value"
        }
    },
    methods:{
        onChange(value, name){
            this.$emit('changedValue', value, name)
        }
    },
    template: ` 
        <li class="column">   
            <input type="range" @change="onChange(value, name)" v-model="value" min="100" max="300"></input></br>
            {{name}}</br>
            <div :style="{background:color, height:value + 'px', width:20}"></div>   
        </li> 
    `
});

const vue = new Vue({
        el: '#app',
        data: {
                        
        },
    }
);