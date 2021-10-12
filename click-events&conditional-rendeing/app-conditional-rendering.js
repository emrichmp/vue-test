const app = Vue.createApp({
    //must create function and then return data properties inside that function
    data() {
        return {
            showBooks: true,
            title: 'The Hunger Games',
            author: 'Suzanne Collins',
            age: 50
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')