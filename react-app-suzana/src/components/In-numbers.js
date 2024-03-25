import './../styles-sass/general.scss';
import './../styles-sass/in-numbers.scss';

export default function InNumbers() {
    return (
        <>
            <section className="in-numbers">
                <h2>DVG Company</h2>
                <p>u brojkama</p>
                <div className="divider-red" />
                <div className="numbers-container">
                    <div className="container-item">
                        <h1>
                            3.000m<sup>2</sup>
                        </h1>
                        <p>Magacinskog prostora</p>
                    </div>
                    <div className="container-item">
                        <h1>20</h1>
                        <p>Vozila</p>
                    </div>
                    <div className="container-item">
                        <h1>8</h1>
                        <p>Komercijalista</p>
                    </div>
                    <div className="container-item">
                        <h1>170</h1>
                        <p>Brendova</p>
                    </div>
                </div>
            </section>
        </>
    );
}