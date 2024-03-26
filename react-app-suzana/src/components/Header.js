import './../styles-sass/general.scss';
import './../styles-sass/header.scss';
import { Close, DarkMode, Menu, WbSunny } from "@mui/icons-material";
import { logo } from '../assets';

function openMenu() {
    var menu = document.querySelector(".menu");
    var openBtn = document.getElementById("menu-btn1");
    var closeBtn = document.getElementById("menu-btn2");
    menu.style.display = "flex";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
};

function closeMenu() {
    var menu = document.querySelector(".menu");
    var openBtn = document.getElementById("menu-btn1");
    var closeBtn = document.getElementById("menu-btn2");
    menu.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
};

document.querySelectorAll(".menu li a").forEach(function (elem) {
    elem.addEventListener('click', function (ev) {
        var menu = document.querySelector(".menu");
        var openBtn = document.getElementById("menu-btn1");
        var closeBtn = document.getElementById("menu-btn2");
        menu.style.display = "none";
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
    });
});

export default function Header({dark, onsetDark}) {
    return (
        <>
            <header className="header">
                <div className="header-gray">
                    <img src={logo} alt="logo" className="logo" />
                    <span className="languages">
                        <div className="toggle">
                            <input type="checkbox" className="checkbox" id="checkbox" checked={dark} onChange={(e) => onsetDark(document.body.classList.toggle("dark"))}/>
                            <label htmlFor="checkbox" className="checkbox-label">
                                <DarkMode className="material-symbols-outlined" />
                                <WbSunny className="material-symbols-outlined" />
                                <span className="ball" />
                            </label>
                        </div>
                        <a href="#0" className="link">
                            Srpski
                        </a>
                        <a href="#0" className="link">
                            English
                        </a>
                        <a href="#0" className="link">
                            Magyar
                        </a>
                    </span>
                </div>
                <nav className="navbar">
                    <ul className="menu">
                        <li>
                            <a className="button" href="#about">
                                O NAMA
                                <br />
                                <span>vizija za uspeh</span>
                            </a>
                        </li>
                        <li>
                            <a className="button" href="#our-products">
                                DVG PROIZVODI
                                <br />
                                <span>naši proizvodi</span>
                            </a>
                        </li>
                        <li>
                            <a className="button" href="#brands">
                                BRENDOVI
                                <br />
                                <span>koje zastupamo</span>
                            </a>
                        </li>
                        <li>
                            <a className="button" href="#distribution">
                                DISTRIBUCIJA
                                <br />
                                <span>logistika i operativa</span>
                            </a>
                        </li>
                        <li>
                            <a className="button" href="#0">
                                SARADNJA
                                <br />
                                <span>proširenje ponude</span>
                            </a>
                        </li>
                        <li>
                            <a className="button" href="#0">
                                NOVOSTI
                                <br />
                                <span>aktuelnosti</span>
                            </a>
                        </li>
                        <li>
                            <a className="button" href="#footer">
                                KONTAKT
                                <br />
                                <span>kontaktirajte nas</span>
                            </a>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <Menu
                            className="material-symbols-outlined"
                            id="menu-btn1"
                            onClick={openMenu}
                        />
                        <Close
                            className="material-symbols-outlined"
                            id="menu-btn2"
                            onClick={closeMenu}
                        />
                    </div>
                </nav>
            </header>
        </>
    );
}

