let display = document.getElementById('display');

function appendValue(value) {
    if (display.value === '0' || display.value === 'Error') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearAll() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(display.value.replace('mod', '%').replace('**', '^'));
    } catch (error) {
        display.value = 'Error';
    }
}
