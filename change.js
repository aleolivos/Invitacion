function toggleNameField() {
    var attendance = document.getElementById("attendance").value;
    var nameField = document.getElementById("name-field");

    // Muestra u oculta el campo de texto dependiendo de la opción seleccionada
    if (attendance === "Si") {
        nameField.style.display = "block"; // Muestra el campo de nombre
    } else {
        nameField.style.display = "none"; // Oculta el campo de nombre
    }
}

function toggleBusField() {
    var bus = document.getElementById("bus").value;
    var busField = document.getElementById("bus-field");

    // Muestra u oculta el campo de lugar del autobús dependiendo de la opción seleccionada
    if (bus === "Si") {
        busField.style.display = "block"; // Muestra el campo de lugar
    } else {
        busField.style.display = "none"; // Oculta el campo de lugar
    }
}
