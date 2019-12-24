/*jslint devel: true */
/*global define, $, jQuery, requestAnimationFrame */

let modal;

window.addEventListener("DOMContentLoaded", function () {
    modal = document.getElementById("modal");
});

function isMobile() {
    return window.innerWidth <= 420;
}

async function fetchWork() {
    let response = await fetch("https://api.slapform.com/kamiexvoid@gmail.com", {
        method: "POST",
        body: $("#modalForm").serialize()
    });

    if (response.ok) {
        localStorage.clear();
        $(".custom-input").each(function () {
            this.value = "";
        });
        $("#reg").val("0");
        $("#success_message").show();
        setTimeout(function () {
            $("#success_message").hide();
        }, 3000);
    }
    else {
        $("#error_message").show();
        setTimeout(function () {
            $("#error_message").hide();
        }, 3000);
    }
}

function showModal() {
    let startAnim = null;
    $("#backstage").show();
    $("body").css("overflow", "hidden");
    $(".custom-input").each(function () {
        let v = localStorage.getItem(this.name);
        if (v !== null) {
            this.value = v;
        }
    });
    requestAnimationFrame(function showAnim(timestamp) {
        if (!startAnim) {
            startAnim = timestamp;
        }
        let progress = timestamp - startAnim;
        modal.style.top = -50 + Math.min(progress / 5, 100) + "%";
        modal.style.transform = "translate(-50%, -50%) scale(" + Math.min(progress / 500, 1) + ")";
        // анимация длится полсекунды
        if (progress < 500) {
            requestAnimationFrame(showAnim);
        }
    });

}

function hideModal() {
    let startAnim = null;
    requestAnimationFrame(function hideAnim(timestamp) {
        if (!startAnim) {
            startAnim = timestamp;
        }
        let progress = timestamp - startAnim;
        modal.style.opacity = 100 - progress / 5 + "%";
        // анимация длится полсекунды
        if (progress < 500) {
            requestAnimationFrame(hideAnim);
        }
    });
    setTimeout(function () {
        $("#backstage").hide();
        $("body").css("overflow", "unset");
        modal.style.opacity = "100%";
    }, 600);
}

window.onpopstate = function () {
    hideModal();
};

$("#click").click(function () {
    showModal();
    history.pushState("modal", "modal", "modal");
});

$("#bClose").click(function () {
    history.back();
});

$("#bPost").click(function() {
    let btn = document.getElementById("bPost");
    btn.disabled = true;
    btn.style.backgroundColor = "#ccc";
    fetchWork()
        .then(function () {
            btn.disabled = false;
            btn.style.backgroundColor = "#24aa17";
        }).catch(function () {
            $("#error_message").show();
            setTimeout(function () {
                $("#error_message").hide();
            }, 3000);
            btn.disabled = false;
            btn.style.backgroundColor = "#24aa17"
        });
});

$(".custom-input").change(function () {
    localStorage.setItem(this.name, this.value);
});
