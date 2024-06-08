const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

const backdrop = document.getElementById('backdrop')

backdrop.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal')
  modals.forEach(modal => closeModal(modal))
})


function openModal(modal) {
  if (modal == null) return
  modal.style.display = 'block'
  document.getElementById('backdrop').style.display = 'block'
}

function closeModal(modal) {
  if (modal == null) return
  modal.style.display = 'none'
  document.getElementById('backdrop').style.display = 'none'
}



function search(){
  let filter = document.getElementById('find').value.toUpperCase();

  let item = document.querySelectorAll('.card');

  let l = document.getElementsByTagName('h3');

  for(var i = 0; i<=l.length; i++){
    let a = item[i].getElementsByTagName('h3')[0];

    let value = a.innerHTML || a.innerText || a.textContent;

    if(value.toUpperCase().indexOf(filter) > -1){
      item[i].style.display = "";
    }else{
      item[i].style.display="none";
    }
  }
}