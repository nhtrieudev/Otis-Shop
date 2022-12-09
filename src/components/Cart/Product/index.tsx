import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { removeCart } from "../../../redux/reducers/cartReducer";

function ProductCart() {
  let dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.cart.products);

  return (
    <>
      <div className="cart-product">
        <ul className="cart-product__list box">
          {products.map((product: any, index: any) => (
            <li className="cart-product__list--item box" key={index}>
              <div className="cart-product__list--item-img">
                <img src={product.img} alt="" />
              </div>
              <div className="cart-product__list--item-content">
                <div className="cart-product__list--item-content-detail">
                  <Link
                    to=""
                    className="cart-product__list--item-content-detail--name"
                  >
                    {product.name}
                  </Link>
                  <div className="cart-product__list--item-content-detail--price">
                    {product.price}
                    <span className="cart-product__list--item-content-detail--price-currency">
                      ₫
                    </span>
                  </div>
                  <div className="cart-product__list--item-content-detail--type">
                    <div
                      className="color"
                      style={{ backgroundColor: `${product.color}` }}
                    ></div>
                    <span className="devided">/</span>
                    <span>{product.size}</span>
                  </div>
                  <p className="cart-product__list--item-content-detail--quantity">
                    Số lượng: <span>{product.quantity}</span>
                  </p>
                  <p className="cart-product__list--item-content-detail--total">
                    Thành tiền:
                    {product.quantity * product.price}
                    <span>₫</span>
                  </p>
                </div>
                <div className="cart-product__list--item-content-remove">
                  <i
                    onClick={() => dispatch(removeCart(product.id))}
                    className="fa-solid fa-xmark"
                  ></i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductCart;
