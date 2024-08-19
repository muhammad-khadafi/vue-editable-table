export interface Cart{
    cid: string
    products: Array<Product>
}

export interface Product {id: number, qty: number}

export interface DisplayCart {
    name: string
    price: number
    currency: string
    qty: number
    inStock: boolean
    id: number
    color: string
}


export interface Person {
    id: number
    name: string
    email: string
    contact: string
    salary: number
}

export interface EmittedValue {
    id?:number
    key: "name" | "contact" | "email" | "salary"
    value: string | number
}
