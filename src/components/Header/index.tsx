import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.webp";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import NavigationMobile from "./components/NavigationMobile";
import { useNavigate } from "react-router-dom";
import SearchMobile from "./components/SearchMobile";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { activeUser, removeUser } from "../../redux/reducers/authReducer";

function Header() {
  let [active, setActive] = useState(false);
  let [navMb, setNavMB] = useState(false);
  let navigate = useNavigate();
  const [username, setUsername] = useState<string | null>("");
  let dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
        if (!user.displayName) {
          setUsername(user.email);
        }
        dispatch(
          activeUser({
            email: user.email,
            username: user.displayName,
            userID: user.uid,
          })
        );
      } else {
        setUsername("");
        dispatch(removeUser());
      }
    });
  }, [username, dispatch]);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-container__menu-mb-tb">
            <i
              onClick={() => setNavMB(!navMb)}
              className="header-container__menu-mb-tb-icon fa-solid fa-bars"
            ></i>
          </div>
          <div className="header-container__logo">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt=""
              className="header-container__logo-img"
            />
          </div>
          <Search propActive={active} />
          <div className="header-container__option">
            <i
              onClick={(e) => setActive(!active)}
              className="header-container__option-icon glass fa-solid fa-magnifying-glass"
            ></i>
            <i
              onClick={() => navigate("/cart")}
              className="header-container__option-icon fa-solid fa-cart-shopping"
            ></i>
            {username ? (
              <i
                onClick={() => navigate("/user")}
                className="header-container__option-icon fa-solid fa-user"
              ></i>
            ) : (
              <i
                onClick={() => navigate("/login")}
                className="header-container__option-icon fa-solid fa-user"
              ></i>
            )}
          </div>
        </div>
        <Navigation />
        <NavigationMobile propActiveNav={navMb} />
        <SearchMobile />
      </header>
    </>
  );
}

export default Header;
