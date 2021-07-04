// Imports
import Modal from './modal.js'

const modal = Modal()

//#region ContentModal


const modalTitle = document.querySelector('.modal h2')
const modalText = document.querySelector('.modal p')

const modalButton = document.querySelector('.modal button')


//#endregion


//#region ModalButtons

// Pegar todos os botões com a classe check 
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(btn => {
    modalTitle.innerHTML = "Marcar como lida"

    // adicionar a escuta
    btn.addEventListener("click", handleClick)

})

// Quando o botão delete for clicado, ele abre a modal
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(btn => {
    // adicionar a escuta
    btn.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){

    // tirar # do link, não se comporta mais como links
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir pergunta"
 
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id 

    const form = document.querySelector('.modal form')
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)



    modalTitle.innerHTML = `${text}`
    //if ternário 
    // se check for true = alterar para Marcar como lido
    // se check for false = alterar para Excluir pergunta

    modalText.innerHTML = check ? `Tem certeza que deseja ${text.toLowerCase()} essa pergunta?` : "Tem certeza que você deseja excluir essa pergunta?"

    modalButton.innerHTML = `Sim, ${text.toLowerCase()}` 
    check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

    //abrir modal
    modal.open()
}
//#endregion

