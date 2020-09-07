
const key = document.querySelectorAll('.key');
const input = document.querySelector('.input-key');
const checkbox = document.querySelector('.input-check')
const checkboxUppercase = document.querySelector('.input-check-uppercase')

input.onkeydown = function (e) {
    console.log(e)
    if (e.code == 'Tab') {
        document.querySelector('.tab').classList.add('key--active')
        return false;
    } else if (e.code == 'Escape') {
        document.querySelector('.escape').classList.add('key--active')
        return false;
    } else {
        key.forEach(item => {
            if (item.getAttribute('data') == e.code) {
                item.classList.add('key--active')
            }
        })
    }
}

input.onkeyup = function (e) {
    key.forEach(item => {
        if (item.getAttribute('data') == e.code) {
            item.classList.toggle('key--active')
        }
    })
}


const keyClick = document.querySelectorAll('.key');

function keysAddClick() {
    keyClick.forEach((item, ind) => {
        item.onclick = () => {
            if (checkboxUppercase.checked) {
                if (checkbox.checked && item.getAttribute('value') != null) {
                    input.value += item.getAttribute('data-ru').toUpperCase();
                } else if (item.getAttribute('value') != null) {
                    input.value += item.getAttribute('value').toUpperCase();
                }
            } else {
                if (checkbox.checked && item.getAttribute('value') != null) {
                    input.value += item.getAttribute('data-ru');
                } else if (item.getAttribute('value') != null) {
                    input.value += item.getAttribute('value');
                }
            }
        }
    })
}
keysAddClick()


document.querySelector('.fix-clear').onclick = () => {
    input.value = '';
}
document.querySelector('.backspace').onclick = () => {
    input.value = input.value.slice(0, input.value.length - 1);
}

