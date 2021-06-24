// Imports
import Modal from './modal.js'

const modal = Modal()

// Pegar todos os botões com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(btn => {
    // adicionar a escuta
    btn.addEventListener("click", event => {
        modal.open()
    })  

})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(btn => {[
    // adicionar a escuta
    btn.addEventListener("click", event => {
        modal.open()
    })
]})