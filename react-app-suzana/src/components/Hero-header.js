import './../styles-sass/general.scss';
import './../styles-sass/hero.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HeroHeader() {
    return (
        <>
            <section className="hero-header">
                <Swiper className="swiper swiper1"
                    modules={Pagination}
                    pagination={true}
                    grabCursor={true}
                    loop={true}
                    >
                    <SwiperSlide>
                        <img src="assets/hero1.png" alt="hero1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/hero2.jpg" alt="hero2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="assets/hero3.jpg" alt="hero3" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}