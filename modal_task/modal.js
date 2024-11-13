
const modalBtns = document.querySelectorAll('.option');
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelector('.modal_close-btn');

modalBtns.forEach((modalBtn, index) => {
    const modal = modals[index];
modalBtn.addEventListener('click', ()=>{
 modal.classList.remove('hidden');
 
})

// on click, code to check if a modal is open, close before opening another
modalBtn.addEventListener('focusout', ()=>{
    modal.classList.add('hidden');
    
   })
})
// focus out will close modal even if trying to click words on modal

