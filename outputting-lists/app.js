const app = Vue.createApp({
    //must create function and then return data properties inside that function
    data() {
        return {
            showBooks: true,
            books: [
                { title: "The Bible", author: "god" },
                { title: "Green Eggs and Ham", author: "Dr. Suess" },
                { title: "People you meet on vacation", author: "Emily Henry" }
            ]
        }
    },
    methods: {
        toggleShowBooks () {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')