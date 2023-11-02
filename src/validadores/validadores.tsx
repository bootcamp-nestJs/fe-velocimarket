export function validarEmail(email: string | undefined): boolean {

    if (email == undefined || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[a-zA-Z-._@]*$/.test(email)) {
        return true;
    }
    return false;
}

export function validarNombre(nombre: string | undefined): boolean {
    if (nombre == undefined || nombre.length === 0 /* || nombre.split(" ").length > 2  */ || !/^[a-zA-ZÀ-ÿ\s]+$/.test(nombre)) {
        return true;
    }
    return false;
}

export function validarApellido(apellido: string | undefined): boolean {
    if (apellido == undefined || apellido.length === 0 /* || nombre.split(" ").length > 2  */ || !/^[a-zA-ZÀ-ÿ\s]+$/.test(apellido)) {
        return true;
    }
    return false;
}

export function validarContrasena(contrasena: string | undefined): boolean {
    if (contrasena == undefined || contrasena.length === 0 || !/[@#$%^&+=]/.test(contrasena) || !/[A-Z]/.test(contrasena) || !/[a-z]/.test(contrasena) || !/[0-9]/.test(contrasena) || contrasena.length < 8) {
        return true;
    }
    return false;
}

export function validarUsuario(nombreusuario: string | undefined): boolean {
    if (nombreusuario == undefined || nombreusuario.length === 0 || nombreusuario.length > 14 || !/^[a-zA-Z-._]*$/.test(nombreusuario)) {
        return true;
    }
    return false;
}

export function validarTelefono(telefono: number | undefined | null): boolean {
    if (telefono == undefined || telefono.toString().length < 9 || telefono.toString().length > 9) {
        return true;
    }
    return false;
}