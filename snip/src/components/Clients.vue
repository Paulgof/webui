<template>
    <div id="clients" class="col-lg-10 mx-auto">
        <h2>
            Нам доверяют
        </h2>
        <div class="logos d-flex flex-wrap justify-content-center">
            <div><img src="../assets/img/client1.jpg" alt="client1" /></div>
            <div><img src="../assets/img/06.gif" alt="client2" /></div>
            <div><img src="../assets/img/client3.png" alt="client3" /></div>
            <div><img src="../assets/img/client4.jpg" alt="client4" /></div>
            <div><img src="../assets/img/bogomaz-logo.png" alt="client5" /></div>
            <div><img src="../assets/img/clinet6.png" alt="client6" /></div>
            <div><img src="../assets/img/a.jpg" alt="client7" /></div>
            <div><img src="../assets/img/_001.png" alt="client8" /></div>
            <div><img id="latkin" src="../assets/img/latkin-logo.jpg" alt="client9" /></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Clients"
    }
</script>

<style scoped>


    .logos div {
        flex-grow: 1;
        width: 50%;
        margin: auto;
    }

    .logos>div>img {
        display: block;
        width: 80%;
    }

    #latkin {
        margin: 20px auto;
        width: 60%;

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


        .logos div {
            width: 25%;
        }

        .logos>div>img {
            width: 80%;
        }

        #latkin {
            width: 40%;
        }

    }

</style>