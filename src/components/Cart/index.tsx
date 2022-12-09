import ProductCart from "./Product";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { toast } from "react-toastify";
import formatter from "../format-currency";

function Cart(props: any) {
  const products = useAppSelector((state) => state.cart.products);
  let userLogin = useAppSelector((state) => state.auth.isLoggIn);
  let dispatch = useAppDispatch();
  let navigate = useNavigate();
  let handlePay = () => {
    if (products.length === 0) {
      toast.error("Bạn chưa có sản phẩm nào!");
    } else {
      navigate("/delivery");
    }
  };
  return (
    <>
      <div className="cart">
        <h1 className="cart-title">Giỏ hàng của bạn</h1>
        <div className="cart-container">
          <ProductCart />
          <div className="sidebox">
            <div className="sidebox-order">
              <h3 className="sidebox-order--heading">Thông tin đơn hàng</h3>
              <div className="sidebox-order--total">
                <span className="sidebox-order--total-text">Tổng tiền:</span>
                <span className="sidebox-order--total-price">
                  {formatter.format(
                    products.reduce(
                      (a: any, b: any) => a + b.price * b.quantity,
                      0
                    )
                  )}
                </span>
              </div>
              <p className="sidebox-order--text">
                Phí vận chuyển sẽ được tính ở trang thanh toán.{" "}
              </p>
              <p className="sidebox-order--text">
                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
              </p>
              <div className="sidebox-order--pay">
                {userLogin ? (
                  <button
                    onClick={handlePay}
                    className="sidebox-order--pay-btn button-animation"
                  >
                    Thanh toán
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="sidebox-order--pay-btn button-animation"
                  >
                    Thanh toán
                  </button>
                )}
              </div>
              <div className="sidebox-order--back">
                <Link to="/category">
                  <i className="fa-solid fa-hand-point-left"></i>Tiếp tục mua
                  hàng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
