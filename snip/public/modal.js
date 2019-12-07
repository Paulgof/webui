/*jslint devel: true */
/*global define, $, jQuery */

function showModal() {
    $("#backstage").show();
    $("body").css("overflow", "hidden");
    $(".custom-input").each(function () {
        let v = localStorage.getItem(this.name);
        if (v !== null) {
            this.value = v;
        }
    });
}

function hideModal() {
    $("#backstage").hide();
    $("body").css("overflow", "unset");
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

$("#bPost").click(function () {
    $.ajax({
        url: "https://api.slapform.com/kamiexvoid@gmail.com",
        type: "POST",
        dataType: "html",
        data: $("#modalForm").serialize(),
        success: function () {
            $("#success_message").show();
            setTimeout(function () {
                $("#success_message").hide();
            }, 3000);
        },
        error: function () {
            $("#error_message").show();
            setTimeout(function () {
                $("#error_message").hide();
            }, 3000);
        }
    });
    localStorage.clear();
    $(".custom-input").each(function () {
        this.value = "";
    });
    $("#reg").val("0");
});

$(".custom-input").change(function () {
    localStorage.setItem(this.name, this.value);
});
