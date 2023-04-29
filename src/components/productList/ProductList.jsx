import Product from '../product/Product';
import { products } from '../../data';
import './productList.css';

function ProductList() {
  return (
    <div className="product-list">
      <div className="product-list-texts">
        <h1 className="product-list-title">Create & inspire. It's Mario</h1>
        <p className="product-list-description">
          Mario is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more inside.
        </p>
      </div>
      <div className="product-list-list">
        {products.map(product => (
          <Product key={product.id} img={product.img} link={product.link} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
