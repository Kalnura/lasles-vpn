const closeWindow = document.getElementById("close-window");
const windowModal = document.getElementById("modalwindow");
const openwindow = document.getElementById("openwindow");

openwindow.onclick = function () {
    windowModal.style.display = "block";
 }

 closeWindow.onclick = function () {
    windowModal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == windowModal) {
        windowModal.style.display = "none";
    }

 }