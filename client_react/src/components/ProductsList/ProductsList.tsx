import {useState, useEffect} from 'react'
import './ProductsList.scss';

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
    <>
      {
        products.map(({id, name, desc, img}: Product) => (
          <div key={id} className="products__list">
            <img src={img} className='products__list-image' alt='img' />
            <div className="products__list-text">
              <h3>{name}</h3>
              <h5>{desc}</h5>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Products