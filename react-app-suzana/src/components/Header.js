import './../styles-sass/general.scss';
import './../styles-sass/header.scss';
import { DarkMode, Menu, WbSunny } from "@mui/icons-material";
import nav from './../dataBase.json';
import { useState } from 'react';

export default function Header({ dark, onsetDark }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <header className="header">
                <div className="header-gray">
                    <img src="assets/logo.png" alt="logo" className="logo" />
                    <span className="languages">
                        <div className="toggle">
                            <input type="checkbox" className="checkbox" id="checkbox" checked={dark} onChange={(e) => onsetDark(document.body.classList.toggle("dark"))} />
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
                    <div className="hamburger">
                        <Menu
                            className="material-symbols-outlined"
                            id="menu-btn1"
                            onClick={() => setIsVisible((prev) => !prev)}
                        />
                    </div>
                    <ul className="menu">
                        {nav.nav.map(item =>
                            <li>
                                <a className="button" key={item.id} href={item.link}>
                                    {item.title}
                                    <br />
                                    <span>{item.span}</span>
                                </a>
                            </li>
                        )}
                    </ul>
                    {isVisible && (
                        <ul className="menu-mobile">
                            {nav.nav.map(item =>
                                <li>
                                    <a className="button" key={item.id} href={item.link}>
                                        {item.title}
                                        <br />
                                        <span>{item.span}</span>
                                    </a>
                                </li>
                            )}
                        </ul>
                    )}
                </nav>
            </header>
        </>
    );
}

