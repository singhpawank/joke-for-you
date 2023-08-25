

const toggleSwitches = document.querySelectorAll(".category");

toggleSwitches.forEach(function (element) {
    element.checked = true;
});

toggleSwitches.forEach(function (element) {
    element.addEventListener("change", function async() {
        if (!this.checked) {
            let otherCheck = false;
            toggleSwitches.forEach(otherElement => {
                if (otherElement !== element && otherElement.checked) {
                    otherCheck = true;
                }
            });
            if (!otherCheck) {
                alert("At least one category required!");
                this.checked = true;
            }
        }
    });
});