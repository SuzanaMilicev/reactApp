import './../styles-sass/general.scss';
import './../styles-sass/brands.scss';
import dataList from './../dataBase.json';

export default function BrandsList() {
    const brandsData = dataList.dataList.filter(el =>
        el.category === 'brands'
    );
    const BrandsListItems = brandsData.map(brand =>
        <li className="brands-item" key={brand.id}>
            <img src={brand.imgSrc} alt="brand" />
            <p>{brand.title}</p>
        </li>
    );
    return <ul>{BrandsListItems}</ul>;
}