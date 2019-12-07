<template>
    <div class="d-none d-lg-block">
        <header class="d-flex justify-content-center flex-row mx-auto py-4">
            <div class="mb-3" id="header_title">
                <img src="../assets/img/logo.jpg" alt="logo" />
                <span class="clr-green mx-lg-3">Новый век агрготехнологий</span>
            </div>
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
            <div class="ml-5 d-none d-lg-block">
                <div class="px-4 some">Мы в соц. сетях</div>
            </div>
        </header>

    </div>
</template>

<script>

    export default {
        name: "Header",
        components: {

        }
    }
</script>

<style scoped>

    .some {
        font-size: 16px;
        color: #5a6268;
    }

    p {
        margin: 0;
    }

    p img {
        width: 12px;
    }

    header {
        background-color: #f5f6f8;
    }



    #header_title {
    }

</style>