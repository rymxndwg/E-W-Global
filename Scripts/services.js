import {changeServiceName} from './service-handler.js';

function openPage(pageUrl) {
    window.location.replace(pageUrl);
}

function openService(serviceName) {
    changeServiceName(serviceName);
    openPage('service-template.html');
}

const primaryProperty = document.querySelector('.js-primary-property-loan');
const investmentProperty = document.querySelector('.js-investment-property-loan');
const commercialLoan = document.querySelector('.js-commercial-property-loan');
const hardMoney = document.querySelector('.js-hard-money');
const fixFlip = document.querySelector('.js-fix-flip');
const constructionLoan = document.querySelector('.js-construction-loan');
const foreignLoan = document.querySelector('.js-foreign-loan');
const landLoan = document.querySelector('.js-land-loan');
const SBALoan = document.querySelector('.js-sba-loan');
const workingLoan = document.querySelector('.js-working-loan');
const equipmentLoan = document.querySelector('.js-equipment-loan');

primaryProperty.addEventListener("click", ()=> {
    openService('primary-property-loan');
});

investmentProperty.addEventListener("click", ()=> {
    openService('investment-property-loan');
});

commercialLoan.addEventListener("click", ()=> {
    openService('commerical-property-loan');
});

hardMoney.addEventListener("click", ()=> {
    openService('hard-money-loan');
});

fixFlip.addEventListener("click", ()=> {
    openService('fix-flip-loan');
});

console.log(constructionLoan)
constructionLoan.addEventListener("click", ()=> {
    openService('construction-loan');
});

foreignLoan.addEventListener("click", ()=> {
    openService('foreign-loan');
});

landLoan.addEventListener("click", ()=> {
    openService('land-loan');
});

SBALoan.addEventListener("click", ()=> {
    openService('sba-loan');
});

workingLoan.addEventListener("click", ()=> {
    openService('working-loan');
});

equipmentLoan.addEventListener("click", ()=> {
    openService('equipment-loan');
});

