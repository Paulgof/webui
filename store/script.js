/*jslint devel: true */
/*global define, $, jQuery */

function getPrices() {
    return {
        prodTypes: {
            thing1: 150,
            thing2: 200,
            thing3: 299
        },
        prodOpts: {
            option1: 0,
            option2: 20,
            option3: 50
        },
        prodProps: {
            prop1: 51,
            prop2: 101
        }
    };
}

function hideFlexBootstrapElement(element) {
    element.classList.remove("d-flex");
    element.classList.add("d-none");
}

function showFlexBootstrapElement(element) {
    element.classList.remove("d-none");
    element.classList.add("d-flex");
}

function updatePrice() {
    let price = 0;
    let thingPrices = getPrices();
    let basisPrice;
    let amount = document.getElementById("thingsAmount");
    let select = document.getElementById("thingSelector");
    let radioDiv = document.getElementById("radios");
    let checkDiv = document.getElementById("checks");

    if (select.value === "thing1") {
        hideFlexBootstrapElement(radioDiv);
        hideFlexBootstrapElement(checkDiv);
        if (amount.value !== "") {
            price = thingPrices.prodTypes[select.value]
            * parseInt(amount.value);
        }
    } else if (select.value === "thing2") {
        showFlexBootstrapElement(radioDiv);
        hideFlexBootstrapElement(checkDiv);
        basisPrice = thingPrices.prodTypes[select.value];
        let radios = document.getElementsByName("prodOpts");
        radios.forEach(function (radio) {
            if (radio.checked) {
                basisPrice += thingPrices.prodOpts[radio.value];
            }
        });
        if (amount.value !== "") {
            price = basisPrice * parseInt(amount.value);
        }
        document.getElementById("rBasisPrice").innerHTML = basisPrice + "$";
    } else {
        hideFlexBootstrapElement(radioDiv);
        showFlexBootstrapElement(checkDiv);
        basisPrice = thingPrices.prodTypes[select.value];
        let checks = document.querySelectorAll("#checks input");
        checks.forEach(function (check) {
            if (check.checked) {
                basisPrice += thingPrices.prodProps[check.name];
            }
        });
        if (amount.value !== "") {
            price = basisPrice * parseInt(amount.value);
        }
        document.getElementById("cBasisPrice").innerHTML = basisPrice + "$";
    }

    let totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = price + "$";


}

function gallery() {
    $("#gallery").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
}

window.addEventListener("DOMContentLoaded", function () {

    gallery();

    let radioDiv = document.getElementById("radios");
    hideFlexBootstrapElement(radioDiv);

    let checkDiv = document.getElementById("checks");
    hideFlexBootstrapElement(checkDiv);

    let select = document.getElementById("thingSelector");
    select.addEventListener("change", function (event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    let amountField = document.getElementById("thingsAmount");
    amountField.addEventListener("change", function (event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    let radios = document.getElementsByName("prodOpts");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            console.log(r.value);
            updatePrice();
        });
    });

    let checks = document.querySelectorAll("#checks input");
    checks.forEach(function (check) {
        check.addEventListener("change", function (event) {
            let c = event.target;
            console.log(c.name);
            updatePrice();
        });
    });

    updatePrice();

});