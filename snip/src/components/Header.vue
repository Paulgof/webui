<template>
    <div>
    <header class="d-flex justify-content-center flex-row flex-wrap mx-auto pt-3">
        <Dropdown class="d-lg-none" v-bind:m_v="true" />
        <div class="mb-3" id="header_title">
            <img src="../assets/img/logo.jpg" alt="logo" />
            <span class="clr-green mx-lg-3">Новый век агрготехнологий</span>
        </div>
        <SearchBtn class="d-lg-none border-0" />
        <div id="features" class="text-muted small mx-4 d-none d-lg-block">
            <p><img src="../assets/img/galk.png" /> Капельное орошение</p>
            <p><img src="../assets/img/galk.png" /> Упаковка для кормовых культур</p>
            <p><img src="../assets/img/galk.png" /> Упаковка для овощных культур</p>
        </div>
        <div class="text-muted smaller mx-2 mb-3 d-none d-lg-block">
            <div class="mb-1">
                <span class="clr-green">8 800 555-86-88</span>
                <p>Звонок по России - бесплатный</p>
            </div>
            <div>
                <span class="clr-green">info@neo-agriservise.ru</span>
                <p>Пн.-Пт.: 8:30 - 17:00</p>
            </div>
        </div>
        <div @click="buttonListener"  id="click" class="ml-lg-5 my-1 px-2 text-center px-lg-0 my-lg-0">
            <div id="button" class="px-lg-4 px-5 py-2">заказать звонок</div>
        </div>
    </header>

    <div class="border-top border-bottom d-none d-lg-inline">
        <Navbar />
    </div>

    </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import SearchBtn from "@/components/SearchBtn";
    import Dropdown from "@/components/Dropdown";
    export default {
        name: "Header",
        components: {
            Dropdown,
            SearchBtn,
            Navbar
        },
        methods: {
            buttonListener() {
                this.$router.push('/modal');
                this.$store.dispatch('showModal');
            }
        }
    }
</script>

<style scoped>
    p {
        margin: 0;
    }

    p img {
        width: 12px;
    }

    header {
        background-color: #f5f6f8;
    }

    #button {
        background-color: #24aa17;
        color: white;
        cursor: pointer;
    }

    #click {
        width: 100%;
    }

    #header_title {
        font-size: 14px;
    }

    @media screen and (min-width: 992px) and (min-device-width: 992px) {

        #header_title {
            font-size: 16px;
        }

        #click {
            width: unset;
        }
    }

</style>