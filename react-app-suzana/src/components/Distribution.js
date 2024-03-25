import './../styles-sass/general.scss';
import './../styles-sass/distribution.scss';
import dataList from './../dataBase.json';

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
                    {/* <div className="distribution-item">
                        {dataList.filter(el => el.category('distribution')).map(element => {
                            return (
                                <div className="distribution-item" key={element.id}>
                                    <img src={element.imgSrc} alt="partners" className="dist-img" />
                                    <br />
                                    <a href="#0">{element.title}</a>
                                </div>
                            );
                        })}
                    </div> */}
                </div>
            </section>
        </>
    );
}