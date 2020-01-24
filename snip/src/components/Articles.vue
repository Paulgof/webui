<template>
    <div class="col-lg-10 mx-auto my-5 py-5">
        <div id="article-cards" class="d-flex flex-column flex-lg-row justify-content-lg-between">
            <div class="article-card p-2" id="title">
                <h2>Статьи</h2>
                <p class="mt-5">Здесь будут представлены публикации для сельхозорганизаций и фермерских хозяйств</p>
                <span class="green-underline clr-green">ВСЕ СТАТЬИ</span>
            </div>
            <div v-for="article in articlesList" v-bind:key="article.id" class="article-card" v-bind:style="{ backgroundImage: 'url(' + getPath(article.background) + ')', }">
                <div>
                    <div>
                        <h6 class="a-title">{{ article.title }}</h6>
                        <p class="a-text">{{ article.text }}</p>
                    </div>
                    <div class="a-info d-flex">
                        <span class="w-25"><img src="../assets/img/eye.png" alt="eye"/> {{ article.views }}</span>
                        <span class="flex-fill text-center">{{ article.date }}</span>
                        <span class="w-25">
                            <img src="../assets/img/like.png" alt="like"/>{{ article.likes }}
                            <img src="../assets/img/dislike.png" alt="dislike"/>{{ article.dislikes }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Articles",
        methods: {
            getPath(src) {
                return require('../assets/img/' + src);
            }
        },
        data() {
            return {
                articlesList: [
                    {
                        id: 1,
                        title: "Ленты для капельного орошения: виды, особенности, правила выбора",
                        text: "Капельный полив имеет массу преимуществ: обеспе...",
                        views: 15,
                        date: "03.09.2019",
                        likes: 0,
                        dislikes: 0,
                        background: "file1.jpg"
                    },
                    {
                        id: 2,
                        title: "Организация орошения в питомниках",
                        text: "Технология полива культурных растений в питомни...",
                        views: 12,
                        date: "13.08.2019",
                        likes: 1,
                        dislikes: 0,
                        background: "file2.jpg"
                    },
                    {
                        id: 3,
                        title: "Методика расчета систем капельного орошения",
                        text: "Эффективность функционирования системы капельно...",
                        views: 21,
                        date: "13.08.2019",
                        likes: 1,
                        dislikes: 0,
                        background: "file3.jpg"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

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

    span > img {
        width: 20px;
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