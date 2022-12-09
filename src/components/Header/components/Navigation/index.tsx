import { NavLink, Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <nav className="navigation">
        <ul className="navigation-container">
          <li className="navigation-container__item">
            <NavLink
              to="/"
              className="navigation-container__item--link underline"
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="navigation-container__item">
            <NavLink
              to="/category"
              className="navigation-container__item--link underline"
            >
              Sản phẩm
              <i className="navigation-container__item--icon fa-solid fa-chevron-down"></i>
            </NavLink>
            <ul className="subnavigation">
              <li className="subnavigation__item">
                <Link to="/category" className="subnavigation__item--link">
                  Polo
                </Link>
              </li>
              <li className="subnavigation__item">
                <Link to="/category" className="subnavigation__item--link">
                  T-shirt
                </Link>
              </li>
              <li className="subnavigation__item">
                <Link to="/category" className="subnavigation__item--link">
                  Sweater
                </Link>
              </li>
              <li className="subnavigation__item">
                <Link to="/category" className="subnavigation__item--link">
                  Hoodie
                </Link>
              </li>
            </ul>
          </li>
          <li className="navigation-container__item">
            <NavLink
              to="/introduce"
              className="navigation-container__item--link underline"
            >
              Giới thiệu
            </NavLink>
          </li>
          <li className="navigation-container__item">
            <NavLink
              to="/contact"
              className="navigation-container__item--link underline"
            >
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
