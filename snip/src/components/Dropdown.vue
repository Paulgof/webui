<template>
    <div class="wrap">
    <div class="droper px-lg-4 py-2 py-lg-3 mr-3 dropbtn" :class="border" @click="change()">
        <img src="../assets/img/menu-icon.png" alt="menu" />
        <span class="smaller text-uppercase ml-1 d-none d-lg-inline"> Продукция</span>
    </div>
    <ul id="droper_c" class="drop_content closed list-unstyled">
        <li href="" class="m-3">Капельное орошение</li>
        <li href="" class="m-3">Упаковка для овощных культур</li>
        <li href="" class="m-3">Упаковка для кормовых культур</li>
        <li href="" class="m-3 " :style="m_v">Услуги</li>
        <li href="" class="m-3 " :style="m_v">Реализованные проекты</li>
        <li href="" class="m-3 " :style="m_v">Статьи</li>
        <li href="" class="m-3 " :style="m_v">Клиенты</li>
        <li href="" class="m-3 " :style="m_v">О комании</li>
        <li href="" class="m-3" :style="m_v">Контакты</li>

    </ul>
    </div>
</template>

<script>
    import anime from "animejs/lib/anime.es.js";
    export default {
        name: "Dropdown",
        data() {
            return {
                isDropSeen: false,

            }
        },
        methods: {
            isMobile() {
                return window.innerWidth <= 420;
            },
            change() {
                var drop = document.getElementsByClassName("drop_content").item(this.isMobile() ? 0 : 1);
                if (this.isDropSeen) {
                    if (this.isMobile()) {
                        anime({
                            targets: drop,
                            height: "0px",
                            borderRadius: ['0%', '50%'],
                            duration: 1000
                        });
                    } else {
                        drop.classList.toggle("closed");
                        drop.classList.toggle("opened");
                    }
                    this.isDropSeen = false;
                } else {
                    if (this.isMobile()) {
                        this.isDropSeen = true;
                        anime({
                            targets: drop,
                            height: "320px",
                            borderRadius: ['50%', '0%'],
                            duration: 1000
                        });
                        drop.classList.remove("closed");
                    } else {
                        drop.classList.toggle("opened");
                        drop.classList.toggle("closed");
                    }
                }
                //this.isDropSeen = !this.isDropSeen;
            }
        },
        props: [
            'border',
            'm_v'
        ],

    }
</script>

<style scoped>

    .wrap {
        font-family: 'Open Sans', sans-serif;
    }

    .dropbtn:hover {
        background-color: #ccc;
        cursor: pointer;
    }

    .droper {
        position: relative;
        display: inline-block;
    }

    .closed {
        height: 0 !important;
    }

    .opened {
        height: 320px !important;
    }


    .drop_content {

        position: absolute;
        left: 0;
        top: 75px;
        overflow: hidden;
        background-color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        font-weight: 200;
        font-size: 73%;
        text-transform: uppercase;
        min-width: 100%;
    }



    img {
        width: 15px;
    }

    droper {
        cursor: pointer;
    }


    @media screen and (min-width: 992px) and (min-device-width: 992px) {

        .drop_content {
            min-width: 300px;
            transition: height 1s ease;
            top: unset;
            left: unset;
        }


        .opened {
            height: 120px !important;
        }

    }


</style>