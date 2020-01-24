<template>
    <div id="wrapper" class="pb-5">
        <h2 class="py-5 col-lg-10 mx-auto pl-4">Архив новостей</h2>
        <div class="d-flex flex-column flex-lg-row col-lg-10 mx-auto">
            <div class="newsCard m-lg-2 my-2 px-3 px-lg-2 pt-3" v-for="item in items" v-bind:key="item.id">
                <div class="date">
                    <span class="day clr-green">{{ dayDoubled(item.date.day) }}</span>
                    <span class="month ml-1 text-muted">{{ item.date.month }}</span>
                </div>
                <div class="card_title mb-2">
                    {{ item.title }}
                </div>
                <div class="card_text text-muted">
                    {{ item.text }}
                </div>
                <span class="card_button px-3 py-2">
                    подробнее
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News",
        methods: {
            dayDoubled(day) {
                return (day > 9 ? day: "0" + day);
            }
        },
        data() {
            return {
                items: [
                    {
                        id: 1,
                        date: {
                            day: 6,
                            month: "сентября"
                        },
                        title: "Компания ЗАО «Новый век агротехнологий» впервые примет участие в " +
                            "«Дне поля Ставропольского края 2019»",
                        text: "С 19 по 20 сентября 2019 года на территории выставочного комплекса " +
                            "АПК Ставропольского края, пройдет «День поля Ставропольского края 2019»."
                    },
                    {
                        id: 2,
                        date: {
                            day: 26,
                            month: "августа"
                        },
                        title: "Средние оптовые цены на белокочанную капусту в России в 2019 году, данные " +
                            "на 2 августа 2019 г.",
                        text: "Специалисты Экспертно-аналитического центра агробизнеса \"АБ-Центр\" www.ab-centre.ru " +
                            "подготовили очередное еженедельное исследование рынка картофеля и овощей (см."
                    },
                    {
                        id: 3,
                        date: {
                            day: 12,
                            month: "августа"
                        },
                        title: "Средние оптовые цены на помидоры в России в 2019 году, данные на 2 августа",
                        text: "Специалисты Экспертно-аналитического центра агробизнеса \"АБ-Центр\" www.ab-centre.ru " +
                            "подготовили очередное еженедельное исследование рынка картофеля и овощей (см."
                    },
                    {
                        id: 4,
                        date: {
                            day: 1,
                            month: "августа"
                        },
                        title: "Компания ЗАО «Новый век агротехнологий» примет участие в выставке «БелогородАгро-2019»",
                        text: "Приглашаем Вас посетить стенд нашей компании № 39"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    h2 {
        color: black;
        font-weight: bold;
    }

    #wrapper {
        background-image: url("../assets/img/contry_fields.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 60px;
    }

    .newsCard {
        background-color: white;
        position: relative;
        min-height: 320px;
    }

    .day {
        font-size: 54px;
        font-weight: 900;
    }

    .card_title {
        color: black;
        font-weight: 600;
        font-size: 16px;
    }

    .card_text {
        font-size: 14px;
    }

    .card_button {
        position: absolute;
        bottom: 15px;
        left: 15px;
        background-color: lightgrey;
        color: grey;
        font-weight: bold;
        font-size: 14px;
    }



    @media screen and (min-width: 992px) and (min-device-width: 992px) {
        .newsCard {
            min-height: 420px;
            width: 100%;
        }

        .card_button {
            left: 10px;
        }

    }

</style>