import '../styles-sass/general.scss';
import './../styles-sass/distribution.scss';
import dataList from './../dataBase.json';

export default function DistributionList() {
    const data = dataList.dataList.filter(element => 
        element.category === 'distribution'
        );
    const listItems = data.map(item => 
        <li className="distribution-item" key={item.id}>
            <img src={item.imgSrc} alt="dataList" className="dist-img" />
            <br />
            <a href="#0">{item.title}</a>
            <div className="divider-red" />
        </li>
    );
    return <ul>{listItems}</ul>;
}