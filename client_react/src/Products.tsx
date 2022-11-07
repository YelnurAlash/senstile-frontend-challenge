import React, {useState, useEffect} from 'react'

const Products = () => {
    const [img, setImg] = useState('');

    const fetchProducts = async () => {
        const result = await fetch('/products');
        const data = await result.json();
        setImg(data[0].img);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <div>
        <img src={img} style={{height: '300px', border: '1px black solid'}} alt='img' />
    </div>
  )
}

export default Products