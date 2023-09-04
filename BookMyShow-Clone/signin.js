function openForm() {
    var overlay = document.getElementById("trans-screen");
    var form = document.getElementById("main-sign");

    if (overlay.style.display === "block") {
        overlay.style.display = "none";
        form.style.display = "none";
    } else {
        overlay.style.display = "block";
        form.style.display = "block";
    }
}

function submitForm(event) {
    event.preventDefault();
    // Handle form submission logic here

    // Close the form after submission
    openForm();
}

document.getElementById("overlay").addEventListener("click", function () {
    openForm();
});