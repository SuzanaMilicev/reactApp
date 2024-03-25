import './../styles-sass/general.scss';
import './../styles-sass/hero.scss';
import { register } from 'swiper/element/bundle';

export default function HeroHeader() {
    return (
        <>
            <section className="hero-header">
                <div className="swiper swiper1">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={require('./../assets/hero1.png')} alt="hero1" />
                        </div>
                        <div className="swiper-slide">
                            <img src={require('./../assets/hero2.jpg')} alt="hero2" />
                            &gt;
                        </div>
                        <div className="swiper-slide">
                            <img src={require('./../assets/hero3.jpg')} alt="hero3" />
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination1" />
                </div>
            </section>
        </>
    );
}
register();