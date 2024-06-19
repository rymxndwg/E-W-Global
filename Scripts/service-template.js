import {getServiceName} from './service-handler.js';
import { serviceLibrary } from './service-pages.js';

//Find Service
let serviceId = getServiceName();
let service;

serviceLibrary.forEach((curService) => {
    if (curService['service-id'] == serviceId) {
        service = curService;
    };
});

//Get HTML Elements
const pageTitleName = document.querySelector('.loan-name-text');
const ourServicesText = document.querySelector('.our-services-text');
const img = document.querySelector('.img-div');
const whyUs1 = document.querySelector('.js-why-us-text-1');
const whyUs2 = document.querySelector('.js-why-us-text-2');
const whyUs3 = document.querySelector('.js-why-us-text-3');

//Set HTMl Elements
pageTitleName.innerHTML = service['title'];
ourServicesText.innerHTML = service['our-service'];
img.style['background-image'] = `url(${service['img']})`;
whyUs1.innerHTML = service['why-us-1'];
whyUs2.innerHTML = service['why-us-2'];
whyUs3.innerHTML = service['why-us-3'];