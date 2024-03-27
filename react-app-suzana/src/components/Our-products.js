import './../styles-sass/general.scss';
import './../styles-sass/our-products.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import dataList from './../dataBase.json';

export default function OurProducts() {
    const productData = dataList.dataList.filter(product =>
        product.category === 'products'
    );
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
                    <Swiper className="swiper swiper2"
                        modules={[Navigation]}
                        spaceBetween={12}
                        slidesPerView={1}
                        grabCursor={true}
                        navigation
                        loop={true}
                        breakpoints={{
                            551: {
                                slidesPerView: 2,
                            },
                            850: {
                                slidesPerView: 3,
                            },
                            1150: {
                                slidesPerView: 4,
                            },
                            1325: {
                                width: 1325,
                                slidesPerView: 5,
                            }
                        }}>
                        <div className='swiper-wrapper'>
                            {productData.map(item =>
                                <SwiperSlide className="product-item" key={item.id}>
                                    <img src={item.imgSrc} alt="product" />
                                    <h5>{item.title}</h5>
                                    <div className="divider-red"></div>
                                </SwiperSlide>
                            )};
                        </div>
                    </Swiper>
                </div>
                <img src="assets/Group 105.png" alt="detalj" id="detail" />
            </section>
        </>
    );
}