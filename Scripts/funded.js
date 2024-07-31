import { casesDB } from './cases-db.js';

let curHtml = ``;
casesDB.forEach((curCase) => {
    curHtml += `<div class="container">
                    <img class="property-img" src="${curCase['img']}">
                    <div class="horizontal-sec">
                        <p class="bold-text">Loan Type: </p>
                        <p>${curCase['loan-type']}</p>
                    </div>
                    <div class="horizontal-sec">
                        <p class="bold-text">Loan Amount: </p>
                        <p>${curCase['loan-amount']}</p>
                    </div>
                    <div class="horizontal-sec">
                        <p class="bold-text">Location: </p>
                        <p>${curCase['location']}</p>
                    </div>
                </div>`;
});

//Get HTML Elementsa
const documentBody = document.querySelector('.services-grid');

documentBody.innerHTML = curHtml;