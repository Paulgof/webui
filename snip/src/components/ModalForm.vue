<template>
    <div id="backstage">
        <div id="modal_wrapper">
            <div id="modal">
                <span id="bClose" class="px-3">×</span>
                <form method="POST" action="#" id="modalForm" class="d-flex flex-column p-3 mt-4">
                    <label>
                        <input type="text" name="fio" placeholder="ФИО" class="w-100 custom-input" />
                    </label>
                    <label>
                        <input type="text" name="phone" pattern='^\+?\d{0,13}' placeholder="Телефон" class="w-100 my-2 custom-input" />
                    </label>
                    <label>
                        <select id="reg" name="region" class="w-100 custom-input">
                            <option value="0" selected>Регион</option>
                            <option value="1">Волгородская область</option>
                            <option value="2">Ставропольский Край</option>
                            <option value="3">Краснодарский Край</option>
                            <option value="4">Республика Татарстан</option>
                            <option value="5">Ростовская область</option>
                        </select>
                    </label>
                    <label>
                        <textarea name="message" class="custom-input mt-2 w-100" placeholder="Сообщение"></textarea>
                    </label>
                    <div class="justify-content-center">
                        <input type="button" id="bPost" class="px-5 mx-auto d-block" value="отправить"/>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ModalForm"
    }
</script>

<style scoped>
    #backstage {
        position: fixed;
        width: 100%;
        height: 100vh;
        overflow: scroll;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 2;
        display: none;
    }

    #modal_wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    #modal {
        width: 95vw;
        height: 400px;
        position: absolute;
        background-color: white;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    #bPost {
        color: white;
        background-color: #24aa17;
        padding: 6px;
        border: 0;
        height: 40px;
        font-size: 14px;
        font-weight: 900;
    }

    #bClose {
        position: absolute;
        font-size: 26px;
        cursor: pointer;
        top: 0;
        right: 0;
    }

    .custom-input {
        padding: 6px;
        background-color: #f0f0f0;
        border: 0;
        height: 40px;
        font-size: 14px;
        font-weight: 900;
    }

    textarea {
        height: 130px;
        max-height: 130px;
        min-height: 130px;

    }

    select {
        -moz-appearance:none;
        -webkit-appearance:none;
        appearance: none;
        background: url(https://icons-for-free.com/iconfiles/png/512/keyboard+arrow+down+24px-131985225788660182.png) no-repeat right #ddd;
        background-size: 30px;
    }

    @media screen and (min-width: 992px) and (min-device-width: 992px) {
        #modal {
            width: 600px;
        }
    }
</style>