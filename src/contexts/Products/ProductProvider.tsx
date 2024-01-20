import { useState } from 'react'
import { ProductContext } from "./ProductContext";
import { Product } from '../../models/Product';

export const ProductProvider = ({ children }: { children: JSX.Element }) => {

    const [products, setProducts] = useState<Product[]>([
      {
        dateInclusion: '26-07-2004',
        image: 'https://images.kabum.com.br/produtos/fotos/462167/placa-de-video-rtx-4060-ti-gigabyte-gv-n406teagle-8gd-g10_1684841706_g.jpg',
        name: 'Placa de Vídeo RTX 4060 Ti Eagle Gigabyte NVIDIA GeForce, 8 GB GDDR6, DLSS, Ray Tracing - GV-N406TEAGLE-8GD G10',
        price: 2549.99,
        discount: 20
      },
      {
        dateInclusion: '26-07-2004',
        image: 'https://images.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_g.jpg',
        name: 'Headset Gamer Redragon Zeus X, Chroma Mk.II, RGB, Surround 7.1, USB, Drivers 53MM, Preto/Vermelho - H510-RGB',
        price: 249.99,
        discount: 20
      },
      {
        dateInclusion: '26-07-2004',
        image: 'https://images.kabum.com.br/produtos/fotos/495513/notebook-gamer-acer-nitro-5-intel-core-i7-11800h-16gb-ram-nvidia-rtx3050-ssd-512gb-15-6-led-fhd-ips-linux-preto-an515-57-795j_1696511422_g.jpg',
        name: 'Notebook Gamer Acer Nitro 5 Intel Core I7-11800H, 16GB RAM, NVIDIA RTX3050, SSD 512GB, 15.6" LED FHD IPS, Linux, Preto - AN515-57-795J',
        price: 4999.99,
        discount: 20
      },
      {
        dateInclusion: '26-07-2004',
        image: 'https://images.kabum.com.br/produtos/fotos/474523/gabinete-gamer-rise-mode-wave-black-mid-tower-argb-atx-3-cooler-fan-argb-preto-rm-wa-fb-argb_1703770091_g.jpg',
        name: 'Gabinete Gamer Rise Mode Wave Black, Mid Tower, ARGB, ATX, 3 Cooler Fan ARGB, Preto - RM-WA-FB-ARGB',
        price: 179.99,
        discount: 20
      },
      {
        dateInclusion: '26-07-2004',
        image: 'https://images.kabum.com.br/produtos/fotos/238671/console-sony-playstation-5_1634132554_g.jpg',
        name: 'Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Com Mídia Física, Branco - 1214A',
        price: 4600.99,
        discount: 20
      },
    ])

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
          {children}
        </ProductContext.Provider>
      );
}
