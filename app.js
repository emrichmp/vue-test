const app = Vue.createApp({
    //must create function and then return data properties inside that function
    data() {
        return {
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            age: 50
        }
    },
    methods: {
        changeTitle(title) {
            //console.log('clicked')
            //this.title = "Divergent"
            this.title = title
        }
    }
})

app.mount('#app')