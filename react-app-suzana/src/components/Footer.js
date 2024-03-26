import './../styles-sass/footer.scss';
import './../styles-sass/general.scss';
import { Frame } from '../assets';
import { location } from '../assets';
import { phone } from '../assets';
import { Email } from '../assets';
import { logo1 } from '../assets';
import { logo2 } from '../assets';
import { logo3 } from '../assets';
import { logo4 } from '../assets';

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="contact-container">
                    <div className="contact-item">
                        <img src={Frame} alt="logo" />
                    </div>
                    <div className="contact-item">
                        <h2>D.V.G. COMPANY</h2>
                        <img src={location} alt="location" />
                        <span>
                            Čantavirski put bb <br />
                            24000 Subotica, Srbija
                        </span>{" "}
                        <br />
                        <img src={phone} alt="phone" />
                        <span>+381 24 568 555</span> <br />
                        <img src={Email} alt="email" />
                        <span>office@dvgcompany.com</span>
                    </div>
                    <div className="contact-item">
                        <a href="#about">O NAMA</a>
                        <a href="#our-products">DVG PROIZVODI</a>
                        <a href="#brands">BRENDOVI</a>
                        <a href="#distribution">DISTRIBUCIJA</a>
                        <a href="#0">SARADNJA</a>
                        <a href="#0">NOVOSTI</a>
                        <a href="#contact">KONTAKT</a>
                    </div>
                    <div className="contact-item">
                        <p>Pratite nas:</p>
                        <img src={logo1} alt="facebook" className="social-media" />
                        <img src={logo2} alt="twitter" className="social-media" />
                        <img src={logo3} alt="youtube" className="social-media" />
                        <img src={logo4} alt="messenger" className="social-media" />
                    </div>
                </div>
                <div className="footer-info">
                    <p id="copyright">
                        Copyright © 2021 DVG Company, Subotica d.o.o. Sva prava zadržana.
                    </p>
                    <a href="#0" className="links">
                        Privatnost podataka
                    </a>
                    <a href="#0" className="links">
                        Uslovi korišćenja
                    </a>
                    <p id="studio-link">
                        Powered by{" "}
                        <span>
                            <a href="#0">StudioPresent</a>
                        </span>
                    </p>
                </div>
            </footer>

        </>
    );
}