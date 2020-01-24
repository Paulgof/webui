<template>
    <div class="done_card" :style="{'background-image': 'url(' + require('../assets/img/' + background) + ')'}">
        <span class="title mx-2">
            {{ title }}
        </span>
        <div class="info d-flex px-2">
            <div class="w-25"><img src="../assets/img/eye.png" alt="eye"/> {{watches}}</div>
            <div class="flex-fill text-center">{{date}}</div>
            <div class="w-25">
                <img src="../assets/img/like.png" alt="like"/>{{likes}}
                <img src="../assets/img/dislike.png" alt="dislike"/>{{dislikes}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DoneCard",
        props: [
            'background',
            'title',
            'watches',
            'date',
            'likes',
            'dislikes'
        ],


    }
</script>

<style scoped>

    .done_card {
        width: 260px;
        height: 260px;
        color: white;
        font-weight: 900;
        font-size: 14px;
        position: relative;
        box-shadow: inset 0 -15px 50px 10px #000;

    }

    div > img {
        width: 20px;
    }

    .title {
        position: absolute;
        bottom: 25px;
        text-transform: uppercase;
    }

    .info {
        position: absolute;
        bottom: 5px;
        width: 100%;

    }




</style>