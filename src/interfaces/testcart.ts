
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

