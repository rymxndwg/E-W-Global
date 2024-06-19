import {changeServiceName} from './service-handler.js';

function openPage(pageUrl) {
    window.location.replace(pageUrl);
    console.log(pageUrl);
}

function openSidebar() {
    const hamMenu = document.querySelector('.menu');
    hamMenu.classList.toggle('active');

    const hamMenuOutside = document.querySelector('.menu-outside');
    hamMenuOutside.classList.toggle('active');
}

function closeSidebar() {
    const hamMenu = document.querySelector('.menu');
    hamMenu.classList.remove('active');

    const hamMenuOutside = document.querySelector('.menu-outside');
    hamMenuOutside.classList.remove('active');
}

function openService(serviceName) {
    changeServiceName(serviceName);
    openPage('service-template.html');
}

const homeLogo = document.querySelector('.header-logo');
const homeLink = document.querySelector('.js-home');
const aboutUsLink = document.querySelector('.js-aboutus');
const servicesLink = document.querySelector('.js-services');
const calculatorLink = document.querySelector('.js-calculator');
const contactUsLink = document.querySelector('.js-contact-us');
const hamburgerImg = document.querySelector('.hamburger-img');
const menuOutsideLink = document.querySelector('.menu-outside');
const menuCloseBtn = document.querySelector('.js-menu-x-btn');
const contentBlock = document.querySelector('.content ');
const headerPrimaryProperty = document.querySelector('.js-header-primary-property-loan');
const headerInvestmentProperty = document.querySelector('.js-header-investment-property-loans');
const headerCommercialLoan = document.querySelector('.js-header-commerical-property-loan');
const headerHardMoney = document.querySelector('.js-header-hard-money-loan');
const headerFixFlip = document.querySelector('.js-header-fix-flip-loan');
const headerConstructionloan = document.querySelector('.js-header-construction-loan');
const headerForeignLoan = document.querySelector('.js-header-foreign-loan');
const headerLandLoan = document.querySelector('.js-header-land-loan');
const headerSBALoan = document.querySelector('.js-header-sba-loan');
const headerWorkingLoan = document.querySelector('.js-header-working-loan');
const headerEquipmentLoan = document.querySelector('.js-header-equipment-loan');

homeLogo.addEventListener("click", ()=> {
    openPage('index.html');
});

homeLink.addEventListener("click", ()=> {
    openPage('index.html');
});

aboutUsLink.addEventListener("click", ()=> {
    openPage('aboutus.html');
});

servicesLink.addEventListener("click", ()=> {
    if (window.getComputedStyle(contentBlock, null).display == 'none') {
        openPage('../services.html');
    }
});

calculatorLink.addEventListener("click", ()=> {
    openPage('../calculator.html');
});

contactUsLink.addEventListener("click", ()=> {
    openPage('../contact.html');
});

hamburgerImg.addEventListener("click", ()=> {
    openSidebar();
});

menuOutsideLink.addEventListener("click", ()=> {
    closeSidebar();
});

menuCloseBtn.addEventListener("click", ()=> {
    closeSidebar();
});

headerPrimaryProperty.addEventListener("click", ()=> {
    openService('primary-property-loan');
});

headerInvestmentProperty.addEventListener("click", ()=> {
    openService('investment-property-loan');
});

headerCommercialLoan.addEventListener("click", ()=> {
    openService('commerical-property-loan');
});

headerHardMoney.addEventListener("click", ()=> {
    openService('hard-money-loan');
});

headerFixFlip.addEventListener("click", ()=> {
    openService('fix-flip-loan');
});

headerConstructionloan.addEventListener("click", ()=> {
    openService('construction-loan');
});

headerForeignLoan.addEventListener("click", ()=> {
    openService('foreign-loan');
});

headerLandLoan.addEventListener("click", ()=> {
    openService('land-loan');
});

headerSBALoan.addEventListener("click", ()=> {
    openService('sba-loan');
});

headerWorkingLoan.addEventListener("click", ()=> {
    openService('working-loan');
});

headerEquipmentLoan.addEventListener("click", ()=> {
    openService('equipment-loan');
});

