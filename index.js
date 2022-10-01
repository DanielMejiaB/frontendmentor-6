
const createMessage = function (step) {
    return `You selected ${step} out of 5`;
}

let selectedStep = 0;

const ratingComponent = document.querySelector(".rating__component");
const rateAgain = document.querySelector(".rate__again");
const thanksComponent = document.querySelector(".thanks__component");


rateAgain.addEventListener("click", function () {
    ratingComponent.classList.remove("hide");
    ratingComponent.classList.add("show");
    thanksComponent.classList.add("hideRight");
    thanksComponent.classList.remove("showRight");
    selectedStep = 0;
}.bind(ratingComponent));

Array.from(
    document.querySelectorAll(".rating__button")
).forEach(element => element.addEventListener("click", onStepClick));

function onStepClick(event) {
    selectedStep = event.target.textContent;
}

document.querySelector(".rating__submit").addEventListener("click", onRatingSubmit);

function onRatingSubmit() {
    if (selectedStep == 0) {
        const error = document.querySelector(".error");

        error.addEventListener('animationend', function () {
            this.classList.remove("showDown");
            this.classList.add("hidden");
        }.bind(error));
        error.classList.add('showDown');
        return error.classList.remove('hidden');
    }
    ratingComponent.classList.add("hide");
    ratingComponent.classList.remove("show");
    thanksComponent.classList.remove("hideRight");
    thanksComponent.classList.add("showRight");
    document.querySelector(".thanks__step-selected").innerHTML = createMessage(selectedStep);
}