export interface users {
    nombre: string,
    apellido: string,
    mail: string,
    user: string,
    password: string,
    telefono: string,
    calle: string,
    número: number,
    comuna: string,
    region: string
}

export interface user_response{
    success: any
    nombre: string,
    apellido: string,
    user_name: string,
    mail: string,
    telefono: string
}