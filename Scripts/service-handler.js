let curServiceName = ''

export function changeServiceName(inputName) {
    curServiceName = inputName;
    localStorage.setItem('curServiceName', JSON.stringify(curServiceName));
}

export function getServiceName() {
    curServiceName = JSON.parse(localStorage.getItem('curServiceName')) || '';
    return curServiceName;
}
