<template>
    <div class="card-wrapper d-flex flex-lg-row flex-column mt-lg-4 mb-lg-4 justify-content-lg-center">
        <div class="prod-card mx-3 border shadow my-2" v-for="item in items" v-bind:key="item.id">
            <img :src="getPath(item.img1)" class="m-4" alt="img"/>
            <img class="rnd" :src="getPath(item.img2)" alt="img"/>
            <p class="card-text bold_underlined mb-lg-4 pl-4">{{ item.text }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cards",
        methods: {
            getPath(str) {
                return require('../assets/img/' + str)
            }
        },
        data() {
            return {
                items: [
                    {
                        id: 1,
                        img1: 'kap.png',
                        img2: 'field.jpg',
                        text: 'Капельное орошение'
                    },
                    {
                        id: 2,
                        img1: 'a.png',
                        img2: 'comb.jpg',
                        text: 'Сетка сеносвязальная'
                    },
                    {
                        id: 3,
                        img1: 'ov.png',
                        img2: 'catush.jpg',
                        text: 'Упаковка для овощных культур'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .card-wrapper {
    }

    .rnd {
        border-radius: 0 0 0 100%;
        top: 0;
        right: 0;

        position: relative;
        float: right;
    }

    .prod-card {
        background-color: white;
        box-sizing: border-box;
        overflow: hidden;
        flex-basis: 250px;
    }

    .card-text {
        padding-top: 40px;
        padding-bottom: 10px;
    }

    @media screen and (min-width: 992px) and (min-device-width: 992px) {

        .prod-card {
            flex-basis: 340px;
        }

    }

</style>