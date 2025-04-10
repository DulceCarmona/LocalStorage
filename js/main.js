let btnGuardar = document.getElementById("btnGuardar");
let saludo = document.getElementById("saludo");
let btnEliminar = document.getElementById("btnEliminar");

// index
if (btnGuardar) {
    btnGuardar.addEventListener("click", function () {
        let nombre = document.getElementById("txtNombre").value.trim();

        if (nombre) {
            localStorage.setItem("nombre", nombre);
            window.location.href = "welcome.html";
        }
    });
}

// welcome
if (saludo) {
    let nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
        saludo.innerText = `Hola, ${nombreGuardado} bienvenido/a de nuevo`;
    } else {
        saludo.innerText = "Por favor ve al index e ingresa tu nombre";
    }
}

// eiminar
if (btnEliminar) {
    btnEliminar.addEventListener("click", function () {
        localStorage.removeItem("nombre");
        location.reload();
    });
}
