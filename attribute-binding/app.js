const app = Vue.createApp({
    //must create function and then return data properties inside that function
    data() {
        return {
            url: "http://google.com"
        }
    },
    methods: {
        
    }
})

app.mount('#app')