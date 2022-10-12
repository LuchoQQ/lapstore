import type { Product } from './types'
const PRODUCTS: Product[] = [
    {
        id: 1,
        title: "NOTEBOOK DELL 15.6 LATITUDE 3520 I5-1135G7 8GB 256GB W10H",
        price: 243.640,
        trademark: 'Dell',
        image: 'https://res.cloudinary.com/diylksocz/image/upload/v1665541928/lapstore/notebook-dell-156-latitude-3520-i51135g7-8gb-256gb-w10h-0_o7jmwp.jpg',
        cpu_fabricant: "Intel",
        processor: "INTEL CORE i5-1135G7",
        graphics: "Intel® Iris® Xe graphics",
        storage: "M.2 256GB PCIe NVMe",
        memory: "8GB 1x8 3200MHz DDR4 Non-ECC",
        screen: '15.6'
    },
    {
        id: 2,
        title: "NOTEBOOK LENOVO 15.6 THINKPAD E15 RYZEN 5 5500U 8GB 256GB F",
        price: 209.360,
        trademark: 'Lenovo',
        image: 'https://res.cloudinary.com/diylksocz/image/upload/v1665547700/lapstore/notebook-lenovo-156-thinkpad-e15-ryzen-5-5500u-8gb-256gb-f-0_d2gjmn.jpg',
        cpu_fabricant: "AMD",
        processor: "AMD Ryzen 5 5500U",
        graphics: "Radeon RX Vega 11",
        storage: "256GB SSD",
        memory: "8GB 1x8 3200MHz DDR4",
        screen: '15.6'
    },
    {
        id: 3,
        title: "NOTEBOOK HP 15.6 250 G8 I7-1165G7 8GB 512GB FREE",
        price: 207.150,
        trademark: 'HP',
        image: 'https://res.cloudinary.com/diylksocz/image/upload/v1665548022/lapstore/notebook-hp-156-250-g8-i71165g7-8gb-512gb-free-0_iz0kyz.jpg',
        cpu_fabricant: "Intel",
        processor: "INTEL CORE I7-1165G7",
        graphics: "Intel Integrated Graphics",
        storage: "512GB SSD",
        memory: "8GB 1x8 2666MHz DDR4",
        screen: '15.6'
    },
    {
        id: 4,
        title: "NOTEBOOK LENOVO 15.6 V15 I5-1135G7 8GB 256GB FREE",
        price: 175.300,
        image: 'https://res.cloudinary.com/diylksocz/image/upload/v1665548588/lapstore/notebook-lenovo-156-v15-i51135g7-8gb-256gb-free-0_ue1knf.jpg',
        cpu_fabricant: "Intel",
        trademark: 'Lenovo',
        processor: "i5-1135G7",
        graphics: "Intel UHD Graphics",
        storage: "256GB SSD M.2 PCI-E NVME",
        memory: "8GB 1x8 2666MHz DDR4",
        screen: '15.6'
    },
    {
        id: 5,
        title: 'NOTEBOOK LENOVO 14" V14 RYZEN 3 3250U 8GB 256GB FREE',
        price: 192.568,
        image: 'https://res.cloudinary.com/diylksocz/image/upload/v1665548753/lapstore/notebook-lenovo-14-v14-ryzen-3-3250u-8gb-256gb-free-0_vixfkn.jpg',
        cpu_fabricant: 'AMD',
        trademark: 'Lenovo',
        processor: 'RYZEN 3 3250U',
        graphics: 'Radeon RX Vega 3',
        storage: "256GB SSD",
        memory: "4GB 2x4 2500MHz DDR4",
        screen: '14'
    }

]


const api = {
    product: {
        list: async (): Promise<Product[]> => {
            return PRODUCTS;
        }
    }
}
export default api