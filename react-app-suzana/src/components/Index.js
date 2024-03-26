import Header from './Header.js';
import HeroHeader from './Hero-header.js';
import About from './About.js';
import Distribution from './Distribution.js';
import InNumbers from './In-numbers.js';
import OurProducts from './Our-products.js';
import Brands from './Brands.js';
import Footer from './Footer.js';
import Modal from './Modal.js';
import { useState } from 'react';

export default function Index() {
    const [dark, setDark] = useState(false);
    return (
        <>
            <Header dark={dark} onsetDark={setDark}/>
            <HeroHeader />
            <About dark={dark}/>
            <Distribution dark={dark}/>
            <InNumbers dark={dark}/>
            <OurProducts dark={dark}/>
            <Brands dark={dark}/>
            <Footer dark={dark}/>
            <Modal dark={dark}/>
        </>
    );
}