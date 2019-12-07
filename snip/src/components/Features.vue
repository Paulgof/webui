<template>
    <div class="col-lg-10 mx-auto">
        <h2>
            Преимущества компании "Новый век агротехнологий"
        </h2>
        <div class="d-flex flex-column mt-5 content flex-lg-row">
            <div class="d-flex ">
                <div class="mr-3"><img src="../assets/img/1.png" alt="calendar" class="float-left" /></div>
                <div>
                    <h5>Более 20 лет на рынке</h5>
                    <p>Многолетний опыт производства и поставки начиная с 1998 года</p>
                </div>

            </div>
            <div class="d-flex my-4 my-lg-0 mx-lg-3">
                <div class="mr-3"><img src="../assets/img/4.png" alt="fabric" /></div>
                <div><h5>Ведущий отечественный производитель</h5>
                <p>Крупнейший отечественный производитель систем капельного орошения <span class="font-weight-bold">NEO-DRIP</span></p></div>
            </div>
            <div class="d-flex">
                <div class="mr-3"><img src="../assets/img/6.png" alt="gears" /></div>
                <div>
                <h5>Полный сервис</h5>
                <p>Мы предоставляем полный сервис по обслуживанию систем капельного орошения</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Features"
    }
</script>

<style scoped>

    h5 {
        font-size: 16px;
        font-weight: bold;
    }

    p {
        color: #5a6268;
        font-size: 14px;

    }

    h2 {
        font-weight: 900;
        color: black;
        margin-top: 100px;
        font-size: 28px;
        line-height: 1.1;
        box-sizing: border-box;
    }

    @media screen and (min-width: 992px) and (min-device-width: 992px) {

        h2 {
            width: 40%;
        }

        .content {
            margin: 80px 0;
        }

    }
</style>