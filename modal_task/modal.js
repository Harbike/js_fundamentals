"use strict";

const modal = document.querySelector(".modal_container");
const modalBtns = document.querySelectorAll(".option");
const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".paragraph");
const closeBtn = document.querySelector(".modal_close-btn");
const blurPane = document.querySelector(".blurry");

// others

let output = "";
fetch("report.json")
  .then((response) => response.json())
  .then((report) => {
    // console.log(report);
    modalBtns.forEach((btn, index, paneContent, closePane) => {
      paneContent = report[index];

      btn.addEventListener("click", () => {
        console.log(`help`);

        output = `
        <div class="blurry"></div>

        <div class="modal">
            <button class="modal_close-btn">&times;</button>
            <h1 class="heading">${paneContent.heading} </h1>
            <p class="paragraph">${paneContent.paragraph}</p>
        </div>
        `;
        modal.innerHTML = output;

        closePane = document.querySelector(".modal_close-btn");
        closePane.addEventListener("click", () => {
          modal.innerHTML = "";
          // console.log(`done`);
        });
      });
    });
})
.catch((error) => console.log(`Error fetching contents: ${error}`));
  
//   challenges
//  at the output stage, notice usage of += keeps existing pane, causing closePane to malfunction

// closePane = document.querySelector(".modal_close-btn") >>> setting closePane = closeBtn fails, having same call target '.modal_close-btn'
// thoughtProc -- '.modal_close-btn' no longer exist outside fetch
