import { useState } from "react";
import { Link } from "react-router-dom";

function NavigationMobile(props: any) {
  let [active, setActive] = useState(false);
  let isToggle = () => {
    setActive(!active);
  };
  return (
    <>
      <ul
        className={
          props.propActiveNav ? "navigation-tb active" : "navigation-tb"
        }
      >
        <li className="navigation-tb__item">
          <Link className="navigation-tb__item--link" to="/">
            Trang chủ
          </Link>
        </li>
        <li className="navigation-tb__item" onClick={isToggle}>
          <Link className="navigation-tb__item--link" to="/category">
            Sản phẩm
            <i className="navigation-tb__item--link-icon fa-solid fa-chevron-down"></i>
          </Link>
          <ul
            className={active ? "subnavigation-tb active" : "subnavigation-tb"}
          >
            <li className="subnavigation-tb__item">
              <Link className="subnavigation-tb__item--link" to="/category">
                Polo
              </Link>
            </li>
            <li className="subnavigation-tb__item">
              <Link className="subnavigation-tb__item--link" to="/category">
                T-shirt
              </Link>
            </li>
            <li className="subnavigation-tb__item">
              <Link className="subnavigation-tb__item--link" to="/category">
                Hoodie
              </Link>
            </li>
            <li className="subnavigation-tb__item">
              <Link className="subnavigation-tb__item--link" to="/category">
                Sweater
              </Link>
            </li>
          </ul>
        </li>
        <li className="navigation-tb__item">
          <Link className="navigation-tb__item--link" to="/introduce">
            Giới thiệu
          </Link>
        </li>
        <li className="navigation-tb__item">
          <Link className="navigation-tb__item--link" to="/contact">
            Liên hệ
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavigationMobile;
