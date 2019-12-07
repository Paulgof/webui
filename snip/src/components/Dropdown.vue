<template>
    <div class="wrap">
    <div class="droper px-lg-4 py-2 py-lg-3 mr-3 dropbtn" :class="border" @click="isDropSeen = !isDropSeen">
        <img src="../assets/img/menu-icon.png" alt="menu" />
        <span class="smaller text-uppercase ml-1 d-none d-lg-inline"> Продукция</span>
    </div>
    <ul id="droper_c" class="drop_content list-unstyled p-4" v-if="isDropSeen">
        <li href="" class="">Капельное орошение</li>
        <li href="" class="my-3">Упаковка для овощных культур</li>
        <li href="" class="my-3">Упаковка для кормовых культур</li>
        <li href="" class="my-3 " :style="m_v">Услуги</li>
        <li href="" class="my-3 " :style="m_v">Реализованные проекты</li>
        <li href="" class="my-3 " :style="m_v">Статьи</li>
        <li href="" class="my-3 " :style="m_v">Клиенты</li>
        <li href="" class="my-3 " :style="m_v">О комании</li>
        <li href="" class="" :style="m_v">Контакты</li>

    </ul>
    </div>
</template>

<script>
    export default {
        name: "Dropdown",
        data() {
            return {
                isDropSeen: false,

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


    .drop_content {

        position: absolute;
        left: 0;
        top: 75px;
        background-color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        font-weight: 200;
        font-size: 73%;
        text-transform: uppercase;
        transition: all 2s ease;
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
           top: unset;
           left: unset;
       }

    }


</style>