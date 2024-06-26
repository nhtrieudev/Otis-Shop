import { Link , useNavigate } from "react-router-dom";
import formatter from "../format-currency";

function ProductBox(props: any) {
  let navigate = useNavigate();
  return (
    <>
      {props.propProd.slice(0, 5).map((product: any, index: any) => (
        <div className="product-box" key={index}>
          <div className="product-box__thumb">
            <img onClick={() => navigate(`/${product.name}`)} src={product.img[0]} alt="" />
          </div>
          <div className="product-box__content">
            <Link to={`${product.name}`} className="product-box__content--name">
              {product.name}
            </Link>
            <p className="product-box__content--price">
              {formatter.format(product.price)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductBox;
