<template>
    <div class="done_card" :style="{'background-image': 'url(' + require('../assets/img/' + background) + ')'}">
        <span class="title mx-2">
            {{ title }}
        </span>
        <div class="info d-flex justify-content-between mx-2">
            <div>{{watches}}</div>
            <div>{{date}}</div>
            <div>{{likes}} {{dislikes}}</div>
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

    .title {
        position: absolute;
        bottom: 25px;
        text-transform: uppercase;
    }

    .info {
        position: absolute;
        bottom: 5px;
        width: 92%;
    }


</style>