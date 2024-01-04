
export interface ProductInfo {
    title: string;
    value: number;
    description: string;
}

export interface Cart {
    productValue: number;
    shippingValue: number;
    totalValue: number;
}

export interface getcart{
    medioPago: string,
    valorEnvio: 2000,
    totalCarrito: 18000,
    usuario: {
        id: 2,
        nombre: "Segundo",
        apellido: "Contreras",
        user_name: "Segundo1234",
        mail: "alfonso.contreras@gmail.cl",
        telefono: "972085025"
    }

}
export interface productoCarrito {
    id: number;
    nombre: string;
    precio: number;
    avatarVendedor: string;
    ubicacionVendedor: string;
    imgProducto: string;
    descripcion: string;

}

export interface createCarritoResponse {
    id: number,
    medioPago: string,
    valorEnvio: number,
    totalCarrito: number,
    productos: string[]
}