export type Product = {
    id: number,
    title: string,
    price: number,
    image: string,
    trademark: string,
    cpu_fabricant: string,
    processor: string,
    graphics: string,
    storage: string,
    memory: string,
    screen: string
}


export type Filter = null | ((product: Product) => boolean);
