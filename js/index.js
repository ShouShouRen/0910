Vue.createApp({
    data() {
        return {
            products: [],
            carts: []
        }
    },
    methods: {
        addToCart(id) {
            let item = this.products.find(data => data.id === id);
            console.log(item);
            this.carts.push(item);
        },
        clearCart() {
            if (confirm('確認清空？')) {
                this.carts.length = 0;
            }
        },
        removeCart(idx) {
            if (confirm('確認移除？')) {
                this.carts.splice(idx, 1);
            }
        }
    },
    computed: {
        total() {
            if (this.carts.length > 0) {
                return this.carts.map(data => data.price).reduce((a, b) => a + b);
            }
        }
    },
    created() {
        let url = './js/products.json';
        fetch(url).then(res => res.json()).then(data => {
            this.products = data;
        })
    },
}).mount("#app")