import {useState, useEffect} from 'react'
import './ProductsList.scss';

import Tabs from '../Tabs/Tabs';

interface Product {
  id: number;
  name: string;
  desc: string;
  img: string;
}

const Products = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const result = await fetch('/products');
        const data = await result.json();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div className="container">
      <div className="main">
        {
          products.map(({id, name, desc, img}: Product) => (
            <div key={id} className="product__card">
              <img src={img} className='product__card-image' alt='img' />
              <div className="product__card-text">
                <strong className="sss">{name}</strong>
                <small className="sss">{desc}</small>
              </div>
            </div>
          ))
        }
      </div>
      <div className="sidebar">
        <Tabs />
      </div>
    </div>
  )
}

export default Products