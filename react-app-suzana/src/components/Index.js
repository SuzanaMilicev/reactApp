import Header from './Header.js';
// import HeroHeader from './Hero-header.js';
import About from './About.js';
import Distribution from './Distribution.js';
import InNumbers from './In-numbers.js';
// import OurProducts from './Our-products.js';
// import Brands from './Brands.js';
import Footer from './Footer.js';

export default function Index() {
    return (
        <>
            <Header />
            {/* <HeroHeader /> */}
            <About />
            <Distribution />
            <InNumbers />
            {/* <OurProducts />
            <Brands /> */}
            <Footer />
        </>
    );
}