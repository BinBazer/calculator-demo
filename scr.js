let a = '';
let b = '';
let sign = '';

const out = document.querySelector('.calc-screen p');

function writeDigit(arg, key) {
    if ((key === '.' && arg.toString().includes('.')) || arg.length === 8)
        return arg;
    else if(arg ===''&& key==='.'){
        key = '0.';
    }
    out.textContent = '';
    arg += key;
    out.textContent = arg;
    return arg;
}

document.querySelector('.plus-minys').onclick = () => {
    out.textContent = b === '' ? a *= -1 : b *= -1;
} 

document.querySelector('.ac').onclick = () => {
    a = '';
    b = '';
    sing = '';
    out.textContent = '0';
}

document.querySelector('.digit').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    else {
        const key = event.target.textContent;       
        sign === '' ? a = writeDigit(a, key) : b = writeDigit(b, key);

    }
}

document.querySelector('.math').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    else {
        out.textContent = '';
        const key = event.target.textContent;
        sign = key;
        out.textContent = sign
    }
}

document.querySelector('.percent').onclick = (event) => {
    sign = '%';
    out.textContent = '%';
}

document.querySelector('.equal').onclick = (event) => {
    if (b === '') b = a;
    switch (sign) {
        case "+":
            a = (+a) + (+b);
            break;
        case "-":
            a -= b;
            break;
        case "X":
            a *= b;
            break;
        case "%":
            b /= 100;
            a *= b;
            break;
        case "/":
            a /= b;
            break;
    }
    sign = '';
    b = '';
    console.log(a);
    if (a === Infinity)
    {
        out.textContent = 'Ошибка'
        a = '';
        return;
    }
    if (a.toString().includes('.')) {
        a = Number.parseFloat(a.toPrecision(7));
    }
    out.textContent = a;
}



