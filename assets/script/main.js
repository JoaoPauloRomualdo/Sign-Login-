const btnModal = document.querySelector("#btn-modal")
const modal =document.querySelector("#modal")
const close = document.querySelector("#modal a")

btnModal.addEventListener("click", ()=>{
    modal.classList.remove("hide")
})

close.addEventListener("click",()=>{
    modal.classList.add("hide")
})