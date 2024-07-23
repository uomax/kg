document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('switch');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            console.log("Fahrenheit selected");
        } else {
            console.log("Celsius selected");
        }
    });
});
