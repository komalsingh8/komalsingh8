function append(value) {
    document.getElementById("result").value += value;
}

function clearDisplay() {
    document.getElementById("result").value = '';
}

function deleteLast() {
    var display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    var display = document.getElementById("result");
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert("Invalid Expression");
        display.value = '';
    }
}
