let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
    { usuario: "user1", contrasena: "pass1" },
    { usuario: "user2", contrasena: "pass2" }
];

function guardarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function validarUsuario(event) {
    event.preventDefault();
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    const mensaje = document.getElementById('mensaje');

    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario);

    if (!usuarioEncontrado) {
        mensaje.innerText = "Usuario no encontrado. Por favor, regístrate.";
        return false;
    } 

    if (usuarioEncontrado.contrasena === contrasena) {
        window.location.href = "dashboard.html";
        return true;
    } else {
        mensaje.innerText = "Contraseña incorrecta. Intenta de nuevo.";
        return false;
    }
}

function registrarUsuario() {
    const nuevoUsuario = prompt("Ingresa un nuevo usuario:");
    const nuevaContrasena = prompt("Ingresa una nueva contraseña:");

    if (nuevoUsuario && nuevaContrasena) {
        usuarios.push({ usuario: nuevoUsuario, contrasena: nuevaContrasena });
        guardarUsuarios(); 
        alert("Usuario registrado exitosamente.");
    } else {
        alert("Registro cancelado.");
    }
}
