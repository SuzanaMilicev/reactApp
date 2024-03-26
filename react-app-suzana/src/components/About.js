import './../styles-sass/general.scss';
import './../styles-sass/about.scss';
import { AboutDVG } from '../assets';

export default function About() {
    return (
        <>
            <section id="about">
                <div className="about-img">
                    <img src={AboutDVG} alt="about_DVG" id="dvg-image" />
                </div>
                <div className="about-text">
                    <h2>DVG Company</h2>
                    <div className="divider-red" />
                    <h3 className="inter-font">
                        Veleprodaja i maloprodaja kozmetike i kućne hemije
                    </h3>
                    <hr />
                    <p>
                        DVG Company d.o.o. je trgovinsko preduzeće osnovano 2008. godine u
                        Subotici. Prvenstvena delatnost kompanije je veleprodaja kozmetike i kućne
                        hemije. U potpunosti je u privatnom vlasništvu, sa sedištem u Subotici. Tu
                        se nalazi distrubutivni centar i poslovne prostorije, sa ukupno 3000m
                        <sup>2</sup> magacinskog prostora koji zadovoljava sve segmente u pogledu
                        smeštaja, čuvanja i plasiranja robe.
                    </p>
                    <button className="red-button">Saznajte više o nama</button>
                </div>
            </section>

        </>
    );
}