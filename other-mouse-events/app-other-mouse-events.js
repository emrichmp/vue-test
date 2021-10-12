const app = Vue.createApp({
    //must create function and then return data properties inside that function
    data() {
        return {
            x: 0,
            y:0
        }
    },
    methods: {
        handleEvent(e, num) {
            console.log(e, e.type)
            //we can use the information in the event object like if u want the user to hold alt or ctrl
            if (num){
                console.log(num)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')