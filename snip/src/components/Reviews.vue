<template>
    <div id="wrapper" class="pb-5">
        <div class="col-lg-10 mx-auto py-3 py-lg-5">
            <h2>
                Отзывы наших клиентов
            </h2>
        </div>
        <div class="col-lg-10 mx-auto justify-content-center pt-3 px-2 px-lg-0">
            <div id="gallery">
                <div class="slick-item">
                    <div class="header">
                        <img src="../assets/img/client1.jpg" alt="logo"/>
                        <span>ПСССПК «ЦКП» «Покровские овощи»</span>
                    </div>
                    <div class="review">
                        Благодарим ЗАО «Новый век агротехнологий» за взаимовыгодное сотрудничество
                    </div>
                </div>
                <div class="slick-item">
                    <div class="header">
                        <img src="../assets/img/06.gif" alt="logo"/>
                        <span>ЗАО "Бирюли"</span>
                    </div>
                    <div class="review">
                        Компания ЗАО "Бирюли" выражает Вам свою благодарность компании ЗАО
                        Новый век агротехнологий" за качественную и своевременную
                    </div>
                </div>
                <div class="slick-item">
                    <div class="header">
                        <span>ООО "Агротех"</span>
                    </div>
                    <div class="review">
                        Компания ЗАО «Новый век агротехнологий» уже давно является нашим партнером
                        по поставке упаковочных материалов для овощей
                    </div>
                </div>
                <div class="slick-item">
                    <div class="header">
                        <img src="../assets/img/client1.jpg" alt="logo"/>
                        <span>ПСССПК «ЦКП» «Покровские овощи»</span>
                    </div>
                    <div class="review">
                        Благодарим ЗАО «Новый век агротехнологий» за взаимовыгодное сотрудничество
                    </div>
                </div>
                <div class="slick-item">
                    <div class="header">
                        <img src="../assets/img/06.gif" alt="logo"/>
                        <span>ЗАО "Бирюли"</span>
                    </div>
                    <div class="review">
                        Компания ЗАО "Бирюли" выражает Вам свою благодарность компании ЗАО
                        Новый век агротехнологий" за качественную и своевременную
                    </div>
                </div>
                <div class="slick-item">
                    <div class="header">
                        <span>ООО "Агротех"</span>
                    </div>
                    <div class="review">
                        Компания ЗАО «Новый век агротехнологий» уже давно является нашим партнером
                        по поставке упаковочных материалов для овощей
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "Reviews",
        components: {
        },
        data() {
            return {

            }
        },
        methods: {

        }


    }
</script>

<style scoped>

    #wrapper {
        background-image: url('../assets/img/gulag.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 60px;
    }

    .header {
        display: flex;
        margin: 20px;
    }

    .header span {
        margin-left: 15px;
        font-weight: 900;
        color: black;
        font-size: 16px;
    }

    .review {
        padding: 0 20px;
        font-size: 14px;
        color: #5a6268;
        position: absolute;
        bottom: 0;
        height: 50%;
    }

    .slick-item img {
        width: 100px;
    }

    h2 {
        font-weight: 900;
        color: black;
        margin-top: 50px;
        font-size: 28px;
        line-height: 1.1;
        box-sizing: border-box;
    }

    .slick-item {
        padding: 10px;
        margin: 10px;
        background-color: white;
        position: relative;
        height: 220px;
    }



</style>