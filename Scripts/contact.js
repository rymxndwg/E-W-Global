export function openLocation(location) {
    const map = document.querySelector(`.${location}-map`);
    map.classList.toggle('active');

    const times = document.querySelector(`.${location}-times`);
    times.classList.toggle('active');

    const hours = document.querySelectorAll(`.${location}-hours`);

    hours.forEach((hour) => {
        hour.classList.toggle('active');
    })

    const curDiv = document.querySelector(`.${location}-div`);
    curDiv.classList.toggle('active');
}

export function closeLocation(location) {
    const map = document.querySelector(`.${location}-map`);
    map.classList.remove('active');

    const times = document.querySelector(`.${location}-times`);
    times.classList.remove('active');

    const hours = document.querySelectorAll(`.${location}-hours`);
    
    hours.forEach((hour) => {
        hour.classList.remove('active');
    })

    const curDiv = document.querySelector(`.${location}-div`);
    curDiv.classList.remove('active');
}

export function sanJose() {
    openLocation("san-jose");
    openLocation("new-york");
    console.log("Called");
}

export function newYork() {
    closeLocation("new-york");
    closeLocation("san-jose");
}

//Get Elements
let newYorkDiv = document.querySelector('.new-york-div');
let sanJoseDiv = document.querySelector('.san-jose-div');

//Set Elements
newYorkDiv.addEventListener('click', ()=> {
    newYork();
});

sanJoseDiv.addEventListener('click', ()=> {
    sanJose();
})

