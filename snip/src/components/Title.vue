<template>
    <div id="video-wrapper">
        <div id="wrapper" class="mx-auto text-center col-lg-6">
            <h2 id="title">
                Новый век агротехнологий
            </h2>
            <p id="subtitle" class="mt-4">
                Мы создаём и внедряем инновационные технологии интеллектуального орошения,
                повышающие эффективность сельского хозяйства и качество агрокультур
            </p>
        </div>
        <video autoplay loop preload="auto" muted>
            <source src="../assets/img/video.mp4" type="video/mp4" />
        </video>
    </div>

</template>

<script>
    export default {
        name: "Title"
    }
</script>

<style scoped>
    #video-wrapper {
        position: relative;
        overflow: hidden;

    }
    video {
        min-width: 100%;
    }

    #wrapper {
        color: white;
        position: absolute;
        width: 100vw;
        transform: translateY(50vh);
    /*
        top: -500px;
        margin-bottom: -500px;
        padding-bottom: -500px;

     */

    }

    #title {
        font-size: 32px;
        font-weight: bold;
    }

    #subtitle {

    }

    @media screen and (min-width: 900px) and (min-device-width: 900px) {

        #wrapper {
            color: white;
            position: absolute;
            width: 100vw;
            transform: translateX(50%) translateY(50vh);
            /*
                top: -500px;
                margin-bottom: -500px;
                padding-bottom: -500px;

             */

        }

    }

</style>