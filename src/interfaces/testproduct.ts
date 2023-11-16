
export type testProduct = {
    id: number,
    nombre: string,
    precio: number,
    marca: string,
    avatar: string,
    tamanio: string,
    estado: string,
    material_cuadro: string,
    componentes: string,
    valoracion: number,
    /* region: string,
    comuna: string, */
    img: img,
    cat: string,
}

export type img = {
    id: number,
    producto_id: number,
    imagen: string,
    fecha_creacion: string,
    fecha_modificacion: string
}