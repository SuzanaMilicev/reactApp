import './../styles-sass/general.scss';
import './../styles-sass/distribution.scss';
import DistributionList from './Distribution-list.js';

export default function Distribution() {
    return (
        <>
            <section id="distribution">
                <div className="parallax">
                    <div className="parallax-content">
                        <h1>POUZDANA DISTRIBUCIJA</h1>
                        <div className="divider-red" />
                    </div>
                </div>
                <div className="distribution-container">
                    <DistributionList />
                </div>
            </section>
        </>
    );
}