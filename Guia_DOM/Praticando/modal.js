const openModalButton = document.getElementById("openModal")

const modalWrapper = document.querySelector(".modal-wrapper")

openModalButton.onclick = function() {
    modalWrapper.classList.remove("invisible")
}


document.addEventListener("keydown", function(event) {
    const keyEsc = event.key === "Escape"

    if(keyEsc) {
        modalWrapper.classList.add("invisible")

    }
})
