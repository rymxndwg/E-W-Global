let http = new XMLHttpRequest();
http.open('get', 'Scripts/rates-db.json', true);
http.send();
http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let ratesDB = JSON.parse(this.responseText);

        const conventional30Rate = document.querySelector('.conventional-30');
        const conventional20Rate = document.querySelector('.conventional-20');
        const conventional15Rate = document.querySelector('.conventional-15');
        const conventional10Rate = document.querySelector('.conventional-10');

        const arm10Rate = document.querySelector('.arm-10');
        const arm7Rate = document.querySelector('.arm-7');

        const jumboArm10 = document.querySelector('.jumbo-arm-10');
        const jumboArm7 = document.querySelector('.jumbo-arm-7');
        const jumboArm5 = document.querySelector('.jumbo-arm-5');

        const fha30 = document.querySelector('.fha-30');

        const va30 = document.querySelector('.va-30');

        const jumbo30 = document.querySelector('.jumbo-30');
        const jumbo20 = document.querySelector('.jumbo-20');
        const jumbo10 = document.querySelector('.jumbo-10');

        ratesDB.forEach((rate) => {
            const id = rate.id;
            if (id == 'conventional') {
                conventional30Rate.innerHTML = `${rate['30']}`;
                conventional20Rate.innerHTML = `${rate['20']}`;
                conventional15Rate.innerHTML = `${rate['15']}`;
                conventional10Rate.innerHTML = `${rate['10']}`;
            } else if (id == 'arm') {
                arm10Rate.innerHTML = `${rate['10']}`;
                arm7Rate.innerHTML = `${rate['7']}`;
            } else if (id == 'jumboArm') {
                jumboArm10.innerHTML = `${rate['10']}`;
                jumboArm7.innerHTML = `${rate['7']}`;
                jumboArm5.innerHTML = `${rate['5']}`;
            } else if (id == 'fha') {
                fha30.innerHTML = `${rate['30']}`;
            } else if (id == 'va') {
                va30.innerHTML = `${rate['30']}`;
            } else if (id == 'jumbo') {
                jumbo30.innerHTML = `${rate['30']}`;
                jumbo20.innerHTML = `${rate['20']}`;
                jumbo10.innerHTML = `${rate['10']}`;
            } 
        });
    }
}

