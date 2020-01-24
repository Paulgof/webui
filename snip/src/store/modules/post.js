export default {
    actions: {
        async showModal(ctx) {
            ctx.commit('setModalVisible', true);
            document.body.style.overflow = 'hidden';
            let startAnim = null;
            requestAnimationFrame(function showAnim(timestamp) {
                if (!startAnim) {
                    startAnim = timestamp;
                }
                let progress = timestamp - startAnim;

                ctx.commit('setModalTop',-50 + Math.min(progress / 5, 100) + "%");
                ctx.commit('setModalTransform',"translate(-50%, -50%) scale(" + Math.min(progress / 500, 1) + ")");

                // анимация длится полсекунды
                if (progress < 500) {
                    requestAnimationFrame(showAnim);
                }
            });
        },
        hideModal(ctx, router) {
            let startAnim = null;
            requestAnimationFrame(function hideAnim(timestamp) {
                if (!startAnim) {
                    startAnim = timestamp;
                }
                let progress = timestamp - startAnim;
                ctx.commit('setModalOpacity', 100 - progress / 5 + "%");
                // анимация длится полсекунды
                if (progress < 500) {
                    requestAnimationFrame(hideAnim);
                }
            });
            setTimeout(function () {
                ctx.commit('setModalVisible', false);
                ctx.commit('setModalOpacity', "100%");
                document.body.style.overflow = 'unset';
                router.go(-1);
            }, 600);
        },
        async fetchWork(ctx, data) {
            ctx.commit('setSendingStatus', true);
            let response;

            const timeout = (time, promise) => {
                return new Promise(function(resolve, reject) {
                    setTimeout(() => {
                        reject(new Error('Request timed out.'))
                    }, time);
                    promise.then(resolve, reject);
                });
            };

            try {
                response = await timeout(10000,
                    fetch("https://getform.io/f/96aad920-1b06-4c1f-95e5-9f2ec85ca20c", {
                        method: "POST",
                        body: data
                    }));
            } catch (e) {
                response = {ok: false}
            }

            ctx.commit('setSendingStatus', false);
            return response.ok

        },
    },
    mutations: {
        setModalVisible(state, status) {
            state.modalVisible = status
        },
        setModalTop(state, num) {
            state.modalTop = num
        },
        setModalTransform(state, value) {
            state.modalTransform = value
        },
        setModalOpacity(state, value) {
            state.modalOpacity = value
        },
        setSendingStatus(state, value) {
            state.isSendingPost = value
        }

    },
    state: {
        modalVisible: false,
        modalTop: null,
        modalTransform: null,
        modalOpacity: "100%",
        isSendingPost: false
    },
    getters: {
        getModalVisible(state) {
            return state.modalVisible
        },
        getModalTop(state) {
            return state.modalTop
        },
        getModalTransform(state) {
            return state.modalTransform
        },
        getModalOpacity(state) {
            return state.modalOpacity
        },
        getSendingStatus(state) {
            return state.isSendingPost
        }
    }
}