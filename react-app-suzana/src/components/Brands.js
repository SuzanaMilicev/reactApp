import './../styles-sass/general.scss';
import './../styles-sass/brands.scss';
import BrandsList from './Brands-list.js';

export default function Brands() {
    return (
        <>
            <section id="brands">
                <div className="brands-info">
                    <h4 className="inter-font">
                        Istaknuti brendovi za koje radimo distribuciju
                    </h4>
                    <hr />
                </div>
                <div className="brands-container">
                    <BrandsList />
                </div>
                <button className="red-button">Svi brendovi u našem portfoliju</button>
            </section>
        </>
    );
}