<template>
    <div class="col-lg-10 mx-auto my-5 py-5">
        <div id="article-cards" class="d-flex flex-column flex-lg-row justify-content-lg-between">
            <div class="article-card p-2" id="title">
                <h2>Статьи</h2>
                <p class="mt-5">Здесь будут представлены публикации для сельхозорганизаций и фермерских хозяйств</p>
                <span class="green-underline clr-green">ВСЕ СТАТЬИ</span>
            </div>
            <div class="article-card" id="first">
                <div>
                    <div>
                        <h6 class="a-title">Ленты для капельного орошения: виды, особенности, правила выбора</h6>
                        <p class="a-text">Капельный полив имеет массу преимуществ: обеспе...</p>
                    </div>
                    <div class="a-info d-flex justify-content-between">
                        <span>15</span>
                        <span>03.09.2019</span>
                        <span>0 0</span>
                    </div>
                </div>
            </div>
            <div class="article-card" id="second">
                <div>
                    <div>
                        <h6 class="a-title">Организация орошения в питомниках</h6>
                        <p class="a-text">Технология полива культурных растений в питомни...</p>
                    </div>
                    <div class="a-info d-flex justify-content-between">
                        <span>12</span>
                        <span>13.08.2019</span>
                        <span>1 0</span>
                    </div>
                </div>

            </div>
            <div class="article-card" id="third">
                <div>
                    <div>
                        <h6 class="a-title">Методика расчета систем капельного орошения</h6>
                        <p class="a-text">Эффективность функционирования системы капельно...</p>
                    </div>
                    <div class="a-info d-flex justify-content-between">
                        <span>21</span>
                        <span>13.08.2019</span>
                        <span>1 0</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Articles"
    }
</script>

<style scoped>

    #first {
        background-image: url('../assets/img/file1.jpg');
    }

    #second {
        background-image: url('../assets/img/file2.jpg');
    }

    #third {
        background-image: url('../assets/img/file3.jpg');
    }

    .article-card {
        width: 260px;
        height: 260px;
        margin: 10px auto;
        position: relative;
    }

    .a-title {
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
    }

    .a-info{
        font-size: 14px;
        position: absolute;
        width: 92%;
        bottom: 5px;
    }

    .a-text {
        font-size: 12px;
    }


    .article-card>div {
        position: absolute;
        bottom: 0;
        padding-top: 40px;
        padding-left: 10px;
        padding-right: 10px;
        height: 70%;
        width: 100%;
        color: white;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 30%);
    }

    h2 {
        font-weight: 900;
        color: black;
        font-size: 28px;
        line-height: 1.1;
        box-sizing: border-box;
    }

    #title p {
        font-size: 14px;
        color: #5a6268;
    }

    #title span {
        font-size: 14px;
        font-weight: 900;
    }

</style>