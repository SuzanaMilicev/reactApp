import './../styles-sass/general.scss';
import './../styles-sass/hero.scss';
import { hero1 } from '../assets';
import { hero2 } from '../assets';
import { hero3 } from '../assets';
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
                    pagination={{ clickable: true }}
                    loop={true}>
                    <SwiperSlide>
                        <img src={hero1} alt="hero1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={hero2} alt="hero2" />
                        &gt;
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={hero3} alt="hero3" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}