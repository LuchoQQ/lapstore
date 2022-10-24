export type Product = {
    id: number,
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


export type Filter = null | ((product: Product) => boolean);
