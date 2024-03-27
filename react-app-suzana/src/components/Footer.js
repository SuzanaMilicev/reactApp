import './../styles-sass/footer.scss';
import './../styles-sass/general.scss';

export default function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="contact-container">
                    <div className="contact-item">
                        <img src="assets/Frame.png" alt="logo" />
                    </div>
                    <div className="contact-item">
                        <h2>D.V.G. COMPANY</h2>
                        <img src="assets/location.png" alt="location" />
                        <span>
                            Čantavirski put bb <br />
                            24000 Subotica, Srbija
                        </span>{" "}
                        <br />
                        <img src="assets/phone.png" alt="phone" />
                        <span>+381 24 568 555</span> <br />
                        <img src="assets/email.png" alt="email" />
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
                        <img src="assets/logo1.png" alt="facebook" className="social-media" />
                        <img src="assets/logo2.png" alt="twitter" className="social-media" />
                        <img src="assets/logo3.png" alt="youtube" className="social-media" />
                        <img src="assets/logo4.png" alt="messenger" className="social-media" />
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