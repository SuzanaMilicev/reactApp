import './../styles-sass/general.scss';
import './../styles-sass/our-products.scss';
import { Group105 } from '../assets/index.js';
import OurProductsList from './Our-products-list.js';

// const swiper2 = new Swiper('.swiper2', {
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 5,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         630: {
//             slidesPerView: 2,
//         },
//         895: {
//             slidesPerView: 3,
//         },
//         1150: {
//             slidesPerView: 4,
//         },
//         1350: {
//             slidesPerView: 5,
//         }
//     }
// });

export default function OurProducts() {
    return (
        <>
            <section id="our-products">
                <div className="products-info">
                    <h4 className="inter-font">Naši proizvodi</h4>
                    <hr />
                    <p>
                        Naše proizvode DVG Cosmetics odlikuje visok kvalitet kojim se dobija
                        kompletna nega lica I tela. Uspeli smo da uskladimo kvalitet i cenu, što
                        su prepoznali i našI kupci.
                    </p>
                </div>
                <div className="products-container">
                    <OurProductsList />
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <img src={Group105} alt="detalj" id="detail" />
            </section>

        </>
    );
}