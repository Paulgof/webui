<template>
    <div class="col-lg-10 mx-auto my-3">
        <div id="title">
            <h2>
                Реализованные проекты систем капельного орошения
            </h2>
        </div>
        <div id="all_projects">
            <span class="clr-green green-underline text-uppercase ">
                Все проекты
            </span>
        </div>
        <br class="clearBoth">
        <div id="done_cards" class="d-flex flex-column flex-lg-row justify-content-between">
            <div class="card_wrapper" v-for="done_card in done_cards" :key="done_card.id">
                <DoneCard
                        :background=done_card.background
                        :title=done_card.title
                        :watches=done_card.watches
                        :date=done_card.post_date
                        :likes=done_card.likes
                        :dislikes=done_card.dislikes
                        class="my-3 mx-auto"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import DoneCard from "./DoneCard";
    export default {
        name: "DoneProjects",
        components: {DoneCard},
        data() {
            return {
                done_cards: [
                    {
                        id: 1,
                        title: 'капельный полив салата в цфо',
                        watches: 14,
                        post_date: '06.09.2019',
                        likes: 0,
                        dislikes: 0,
                        background: 'image1.jpg'
                    },
                    {
                        id: 2,
                        title: 'капельный полив малины в цфо',
                        watches: 50,
                        post_date: '31.05.2019',
                        likes: 0,
                        dislikes: 0,
                        background: 'berry.jpg'
                    },
                    {
                        id: 3,
                        title: 'капельный полив моркови в казахстане',
                        watches: 44,
                        post_date: '30.04.2019',
                        likes: 0,
                        dislikes: 0,
                        background: 'carrot.jpg'
                    },
                    {
                        id: 4,
                        title: 'капельный полив овощей в пфо',
                        watches: 34,
                        post_date: '26.04.2019',
                        likes: 0,
                        dislikes: 0,
                        background: 'cabbage.jpg'
                    }
                ]
            }
        }
    }
</script>

<style scoped>



    #all_projects {
        float: right;
        font-size: 90%;
        font-weight: bold;
    }

    h2 {
        font-weight: 900;
        color: black;
        font-size: 28px;
        line-height: 1.1;
        box-sizing: border-box;
    }



    @media screen and (min-width: 992px) and (min-device-width: 992px) {

        #title {
            width: 50%;
        }

    }

</style>