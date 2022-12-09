import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config";

function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Đăng nhập thành công...!!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const GoogleProvider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        navigate("/");
        toast.success("Đăng nhập thành công...!!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="login">
        <div className="login-container">
          <h1 className="login-container--heading">Đăng nhập</h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className="box login-form"
          >
            <div className="login-form__content">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="login-form__content--input box"
                placeholder="admin@gmail.com..."
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="login-form__content--input box"
                placeholder="123456..."
              />
              <div className="login-form__content--btn">
                <button
                  type="submit"
                  className="login-form__content--btn-basic"
                >
                  Đăng nhập
                </button>
                <div className="devided">----------or----------</div>
                <button
                  onClick={handleLoginWithGoogle}
                  className="login-form__content--btn-basic"
                >
                  Đăng nhập bằng google
                </button>
              </div>
              <div className="login-form__content--register">
                Bạn chưa có tài khoản? Đăng ký
                <Link to="/register">Tại đây</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
