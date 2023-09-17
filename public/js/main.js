

const checkedSwitches = document.querySelectorAll(".checked");

checkedSwitches.forEach(function (element) {
    element.checked = true;
});

const toggleCategorySwitches = document.querySelectorAll(".category");
// toggleSwitches.forEach(function (element) {
//     element.addEventListener("change", function async() {
//         if (!this.checked) {
//             let otherCheck = false;
//             toggleSwitches.forEach(otherElement => {
//                 if (otherElement !== element && otherElement.checked) {
//                     otherCheck = true;
//                 }
//             });
//             if (!otherCheck) {
//                 alert("At least one category required!");
//                 this.checked = true;
//             }
//         }
//     });
// });

const selectAllCategories = document.querySelector("#all-categories");

selectAllCategories.addEventListener("change", function async(){
    if(this.checked){
        toggleCategorySwitches.forEach(element =>{
            element.checked=true;
        });
    }else{
        toggleCategorySwitches.forEach(element =>{
            element.checked=false;
        });
    }
});

const selectAllBlacklists = document.querySelector("#all-blacklists");
const toggleBlacklistSwitches = document.querySelectorAll(".blacklist");

selectAllBlacklists.addEventListener("change", function async(){
    if(this.checked){
        toggleBlacklistSwitches.forEach(element =>{
            element.checked=true;
        });
    }else{
        toggleBlacklistSwitches.forEach(element =>{
            element.checked=false;
        });
    }
});


