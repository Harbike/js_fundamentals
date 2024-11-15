"use strict";

// targeting individually
// const modalBtns = document.querySelectorAll('.option');
// const modalPanes = document.querySelectorAll('.modal');
// const closeBtns = document.querySelectorAll('.modal_close-btn');
// const blurPane = document.querySelector('.blurry');

// for (let i = 0; i < modalBtns.length; i++) {
//     const modalBtn = modalBtns[i];
//     const pane = modalPanes[i];

//     modalBtn.addEventListener('click', ()=> {
//         if (modalBtn.value === 'a') {
//             console.log(`help`);
//             pane.classList.remove('hidden');
//         }
//         if (modalBtn.value === 'b') {
//             console.log(`break`);
//             pane.classList.remove('hidden');
//         }
//         if (modalBtn.value === 'c') {
//             console.log(`settled`);
//             pane.classList.remove('hidden');
//         }

//     })

//     closeBtns.forEach(close => {
//         close.addEventListener('click', ()=> {
//             pane.classList.add('hidden');
//         })
//     })

//     // to close pane when another btn is clicked
//     // modalBtn.addEventListener('focusout', ()=> {
//         //     pane.classList.add('hidden');
//         // })

//         // NOTE: highlighting text closes pane!!!!!!!!!!!!!
// }


// textContent route

const modalBtns = document.querySelectorAll('.option');
const modal = document.querySelector('.modal');
const heading = document.querySelector('h1');
const paragraph = document.querySelector('.paragraph');
const closeBtn = document.querySelector('.modal_close-btn');
const blurPane = document.querySelector('.blurry');

if (blurPane) {
    blurPane.classList.add('hidden');
}
modalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.value === 'a') {
            console.log(`yo`);
            modal.classList.remove('hidden')
            heading.textContent = 'Yo Model_A!'
            paragraph.textContent = 'RAt houses the catelit. Maiores, minus quo totam soluta, autem quis ducimus sunt praesentium dolorum ut qui maxime corporis expedita'
        }
        if (btn.value === 'b') {
            console.log(`yolla`);
            modal.classList.remove('hidden')
            heading.textContent = 'Yo Model_B!'
            paragraph.textContent = 'Oraesentium dolorum ut qui maxime corporis expedita, raesentium dolorum ut qui maxime corporis exp!!'
        }
        if (btn.value === 'c') {
            console.log(`yonda`);
            modal.classList.remove('hidden')
            heading.textContent = 'Yo Model_C!'
            paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nam vitae asperiores fugiat, molestias beatae adipisci ex maxime aliquam rerum numquam enim provident nobis!'
            console.log(`yolla`);
        }
    })
})

// close pane
closeBtn.addEventListener('click', ()=> {
    modal.classList.add('hidden')
})


// others
fetch('report.json')
.then(response => response.json())
.then(report => {
    console.log(report);
})