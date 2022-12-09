import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase/config";

function Sidebar() {
  let navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Log out Successful...!");
      navigate("/login");
    });
  };
  return (
    <>
      <div className="sidebar box">
        <div className="sidebar-container">
          <h2 className="sidebar-container--heading">Tài khoản</h2>
          <ul className="sidebar-container__list">
            <li
              onClick={() => navigate("/user/profile")}
              className="sidebar-container__list--item"
            >
              Thông tin tài khoản
            </li>
            <li
              onClick={() => navigate("/user/order")}
              className="sidebar-container__list--item"
            >
              Đơn hàng
            </li>
            <li
              onClick={handleSignOut}
              className="sidebar-container__list--item"
            >
              Đăng xuất
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
