export type Product = {
    _id: string,
    name: string,
    price: number,
    image: string,
    trademark: string,
    cpu_fabricant: string,
    processor: string,
    graphics: string,
    storage: string,
    memory: string,
    memory_description: string
    screen: string
    quantity: number
}

export type User = {
    id: number,
    name: string,
    surname: string,
    email: string,
    role: string
}


export type Filter = null | ((product: Product) => boolean);
