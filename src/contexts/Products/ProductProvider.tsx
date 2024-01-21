import { useState } from 'react'
import { ProductContext } from "./ProductContext";
import { Product } from '../../models/Product';

export const ProductProvider = ({ children }: { children: JSX.Element }) => {

    const [products, setProducts] = useState<Product[]>([
      {
        id: 1,
        dateInclusion: '26-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/4060.webp',
        name: 'Placa de Vídeo RTX 4060 Ti Eagle Gigabyte NVIDIA GeForce, 8 GB GDDR6, DLSS, Ray Tracing - GV-N406TEAGLE-8GD G10',
        price: 2549.99,
        discount: 0.57
      },
      {
        id: 2,
        dateInclusion: '26-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/hedreddeagon.jpg',
        name: 'Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB',
        price: 249.99,
        discount: 0.33
      },
      {
        id: 3,
        dateInclusion: '26-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/nitro.jpg',
        name: 'Notebook Gamer Acer Nitro 5 Intel Core I7-11800H, 16GB RAM, NVIDIA RTX3050, SSD 512GB, 15.6" LED FHD IPS, Linux, Preto - AN515-57-795J',
        price: 4999.99,
        discount: 0.16
      },
      {
        id: 4,
        dateInclusion: '26-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/gab.jpg',
        name: 'Gabinete Gamer Rise Mode Wave Black, Mid Tower, ARGB, ATX, 3 Cooler Fan ARGB, Preto - RM-WA-FB-ARGB',
        price: 179.99,
        discount: 0.32
      },
      {
        id: 5,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/station5.jpg',
        name: 'Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Com Mídia Física, Branco - 1214A',
        price: 4600.99,
        discount: 0.21
      },
      {
        id: 6,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/mesa.jpg',
        name: 'Mesa Gamer KBM! GAMING DG550, Preta com Regulagem De Altura Automática, Pré-Set Com Alturas, Rgb - KGDG550PT',
        price: 1179.99,
        discount: 0.15
      },
      {
        id: 7,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/4060ventus.jpg',
        name: 'Placa de Vídeo RTX 4060 VENTUS 2x Black OC MSI NVIDIA GeForce, 8GB GDDR6, DLSS, Ray Tracing',
        price: 1929.99,
        discount: 0.17
      },
      {
        id: 8,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/cadeira.jpg',
        name: 'Cadeira Gamer KBM! GAMING Tempest CG600, Preta, Com Almofadas, Descanso Para Pernas Retrátil, Reclinável - KGCG600PT',
        price: 759.99,
        discount: 0.17
      },
      {
        id: 9,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/kumara.jpg',
        name: 'Teclado Mecânico Gamer Redragon Kumara, Anti-Ghosting, LED Vermelho, Switch Outemu Blue, ABNT2, Preto - K552-2 (PT-BLUE)',
        price: 139.99,
        discount: 0.43
      },
      {
        id: 10,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/mousegamer.jpg',
        name: 'Mouse Gamer Redragon Cobra, Chroma RGB, 10000DPI, 7 Botões, Preto - M711 V2',
        price: 99.90,
        discount: 0.23
      },
      {
        id: 11,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/r7.jpg',
        name: 'Processador AMD Ryzen 5 5600G, 3.9GHz, Cache 16MB, Hexa Core, 12 Threads, AM4, Ví­deo Integrado - 100-100000252BOX.',
        price: 828.90,
        discount: 0.10
      },
      {
        id: 12,
        dateInclusion: '29-07-2004',
        image: 'https://cleansoft.s3.sa-east-1.amazonaws.com/Logos/water.jpg',
        name: 'Water Cooler Rise Mode Gamer Black, RGB, 240mm, Preto - RM-WCB-02-RGB.',
        price: 219.99,
        discount: 0.06
      },
    ])

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
          {children}
        </ProductContext.Provider>
      );
}
