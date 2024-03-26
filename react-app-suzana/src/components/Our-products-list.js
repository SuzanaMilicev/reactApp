import './../styles-sass/general.scss';
import './../styles-sass/our-products.scss';
import dataList from './../dataBase.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


export default function OurProductsList() {
    const productData = dataList.dataList.filter(product =>
        product.category === 'products'
    );
    const productListItems = productData.map(item =>
        <Swiper className="swiper swiper2"
            modules={Navigation}
            spaceBetween={5}
            slidesPerView={1}
            navigation
            loop={true}
            breakpoints={{
                630: {
                    // width: 640,
                    slidesPerView: 2,
                },
                895: {
                    // width: 768,
                    slidesPerView: 3,
                },
                1150: {
                    slidesPerView: 4,
                },
                1350: {
                    slidesPerView: 5,
                }
            }}>
            {/* <div className='swiper-wrapper'> */}
            <SwiperSlide className="product-item" key={item.id}>
                <img src={item.imgSrc} alt="product" />
                <h5>{item.title}</h5>
                <div className="divider-red"></div>
            </SwiperSlide>
            {/* </div> */}
        </Swiper>
    );

    return <ul>{productListItems}</ul>;
}