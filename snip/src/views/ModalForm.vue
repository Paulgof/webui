<template>
    <div v-if="getModalVisible" id="backstage">

        <div v-if="successShow" id="success_message" class="alert alert-success" role="alert">
            <strong>Успех!</strong> Ваши данные успешно отправлены!
        </div>
        <div v-if="errorShow" id="error_message" class="alert alert-danger" role="alert">
            <strong>Ошибка!</strong> Пожалуйста, отправьте данные ещё раз.
        </div>

        <div id="modal_wrapper">
            <div id="modal" v-bind:style="{top: getModalTop, transform: getModalTransform, opacity: getModalOpacity}">
                <span @click="hideMe" id="bClose" class="px-3">×</span>
                <form method="POST" action="#" id="modalForm" class="d-flex flex-column p-3 mt-4">
                    <label>
                        <input @change="saveState('fio', fio)" v-model="fio" type="text" name="fio"
                               placeholder="ФИО" class="w-100 custom-input" :class="{'bg-danger': fioErr}"/>
                    </label>
                    <label>
                        <input @change="saveState('phone', phone)" v-model="phone" type="text" name="phone"
                               pattern='^\+?\d{0,13}' placeholder="Телефон" class="w-100 my-2 custom-input"
                               :class="{'bg-danger': phoneErr}" />
                    </label>
                    <label>
                        <select @change="saveState('region', region)" v-model="region" id="reg" name="region"
                                class="w-100 custom-input">
                            <option disabled value="">Регион</option>
                            <option value="1">Волгородская область</option>
                            <option value="2">Ставропольский Край</option>
                            <option value="3">Краснодарский Край</option>
                            <option value="4">Республика Татарстан</option>
                            <option value="5">Ростовская область</option>
                        </select>
                    </label>
                    <label>
                        <textarea @change="saveState('message', message)" v-model="message" name="message"
                                  class="custom-input mt-2 w-100" placeholder="Сообщение"> </textarea>
                    </label>
                    <div class="justify-content-center">
                        <input @click="sendPost" :disabled="getSendingStatus" :class="{'greyButton': getSendingStatus}"
                               type="button" id="bPost" class="px-5 mx-auto d-block" value="отправить"/>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "ModalForm",
        data() {
            return {

                fio: "",
                phone: "",
                region: "",
                message: "",
                fioErr: false,
                phoneErr: false,
                successShow: false,
                errorShow: false

            }
        },
        mounted() {
            ['fio', 'phone', 'region', 'message'].forEach(key => {
                let v = localStorage.getItem(key);
                if (v !== null) {
                    this.$data[key] = v;
                }
            });
        },
        computed: mapGetters(['getModalVisible', 'getModalTop', 'getModalTransform', 'getModalOpacity',
            'getSendingStatus']),
        methods: {
            hideMe() {
                this.$store.dispatch('hideModal', this.$router)
            },
            saveState(name, value) {
                localStorage.setItem(name, value);
            },
            sendPost() {

                if (this.$data.fio === "")  {
                    this.$data.fioErr = true;
                }
                if (this.$data.phone === "") {
                    this.$data.phoneErr = true;
                }
                if (this.$data.fioErr || this.$data.phoneErr) {
                    setTimeout(() => {
                        this.$data.fioErr = false;
                        this.$data.phoneErr = false
                    }, 1000);
                    return
                }

                this.$store.dispatch('fetchWork', new FormData(document.getElementById('modalForm')))
                .then((status) => {
                    if (status) {
                        localStorage.clear();
                        this.$data.fio = "";
                        this.$data.phone = "";
                        this.$data.region = "";
                        this.$data.message = "";
                        this.$data.successShow = true;
                        setTimeout(() => {
                            this.$data.successShow = false;
                        }, 3000)
                    }
                    else {
                        this.$data.errorShow = true;
                        setTimeout(() => {
                            this.$data.errorShow = false;
                        }, 3000)
                    }
                });
            }
        }
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
        top: -50%;
        transform: translate(-50%, -50%) scale(1);
    }

    #bPost {
        color: white;
        background-color: #24aa17;
        padding: 6px;
        border: 0;
        height: 40px;
        font-size: 14px;
        font-weight: 900;
        transition: background-color 0.7s;
    }

    #bClose {
        position: absolute;
        font-size: 26px;
        cursor: pointer;
        top: 0;
        right: 0;
    }

    #success_message, #error_message {
        position: fixed;
        width: 100%;
        z-index: 1000;
    }

    .custom-input {
        padding: 6px;
        background-color: #f0f0f0;
        border: 0;
        height: 40px;
        font-size: 14px;
        font-weight: 900;
    }

    .greyButton {
        background-color: #ccc !important;
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