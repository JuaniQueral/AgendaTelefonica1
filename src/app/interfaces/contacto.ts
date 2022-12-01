export interface Contacto {
    id?: number,
    nombre: string,
    apellido: string,
    email: string,
    telefono: number,
    llamadasEntrante: number,
    llamadasSaliente: number,
}




export const defaultContact:Contacto = {
    nombre: "Juan",
    apellido: "Queral",
    email: "queraljuan@gmail.com",
    telefono: 3464598624,
    llamadasEntrante: 2,
    llamadasSaliente: 3
}



export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ContactJsonPlaceholder {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
