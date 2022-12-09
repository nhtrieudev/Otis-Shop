import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.webp";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-container__item">
            <div className="footer-container__item--heading">Giới thiệu</div>
            <ul className="footer-container__item--content">
              <li className="footer-container__item--content--item">
                <p>
                  Được thành lập vào đầu năm 2021, với định hướng trở thành
                  thương hiệu thời trang streetswear với tiêu chí sản xuất sản
                  phẩm chất lượng cao , dành cho các bạn trẻ.
                </p>
              </li>
              <li className="footer-container__item--content--item">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__item">
            <div className="footer-container__item--heading">Liên kết</div>
            <ul className="footer-container__item--content">
              <li className="footer-container__item--content--item">
                <Link to="/">Giới thiệu</Link>
              </li>
              <li className="footer-container__item--content--item">
                <Link to="/">Chính sách đổi trả</Link>
              </li>
              <li className="footer-container__item--content--item">
                <Link to="/">Chính sách bảo hành</Link>
              </li>
              <li className="footer-container__item--content--item">
                <Link to="/">Chính sách dịch vụ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-container__item">
            <div className="footer-container__item--heading">
              Thông tin liên hệ
            </div>
            <ul className="footer-container__item--content">
              <li className="footer-container__item--content--item">
                <i className="fa-solid fa-location-dot"></i>
                477 Quang Trung , Phường 10, Quận Gò Vấp , Hồ Chí Minh
              </li>
              <li className="footer-container__item--content--item">
                <i className="fa-solid fa-phone"></i>
                090.566.3494
              </li>
              <li className="footer-container__item--content--item">
                <i className="fa-solid fa-paper-plane"></i>
                otisclub2021@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
