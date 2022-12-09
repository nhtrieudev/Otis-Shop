import { Link } from "react-router-dom";

function ProductBox(props: any) {
  return (
    <>
      {props.propProd.map((product: any, index: any) => (
        <div className="product-box" key={index}>
          <div className="product-box__thumb">
            <img src={product.img} alt="" />
          </div>
          <div className="product-box__content">
            <Link
              to={`/${product.name}`}
              className="product-box__content--name"
            >
              {product.name}
            </Link>
            <p className="product-box__content--price">{product.price}₫</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductBox;
