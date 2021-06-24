export default function Modal(){
    
    const modalWrapper = document.querySelector('.modal-wrapper')

    // Abrir Modal
    function open(){
        // adicionar a classe active da modal
        modalWrapper.classList.add('active')
    }
    
    // Fechar Modal
    function close(){
        // remover a classe active da modal
        modalWrapper.classList.remove('active')
    }

    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    return{
        open,
        close
    }
}