Vue.createApp({
    data() {
        return {
            products_1: [{
                    title: '草莓蛋糕',
                    img: '../images/product-a.jpg',
                    price: 380,
                    amountShow: 0,
                },
                {
                    title: '草莓布朗尼',
                    img: '../images/product-b.jpg',
                    price: 60,
                    amountShow: 0,
                },
                {
                    title: '巧克力甜甜圈',
                    img: '../images/product-c.jpg',
                    price: 40,
                    amountShow: 0,
                },
            ],
            products_2: [{
                    title: '芝麻麵包',
                    img: '../images/product-d.jpg',
                    price: 70,
                    amountShow: 0,
                },
                {
                    title: '堅果吐司',
                    img: '../images/product-e.jpg',
                    price: 150,
                    amountShow: 0,
                },
                {
                    title: '手做麵包',
                    img: '../images/product-f.jpg',
                    price: 50,
                    amountShow: 0,
                },
            ]
        }
    },
    methods: {
        minus(product) {
            product.amountShow--
            product.amountShow = (product.amountShow < 1) ? 0 : product.amountShow
        },
        plus(product) {
            product.amountShow++
            product.amountShow = (product.amountShow < 1) ? 0 : product.amountShow
        },
    },
    computed: {
        sub() {
            return this.products_1.map(data => data.price * data.amountShow)
        },
        total() {
            return this.sub.reduce((a, b) => a + b)
        },
    }
}).mount("#app")