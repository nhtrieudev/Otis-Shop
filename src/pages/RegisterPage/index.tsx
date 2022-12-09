import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, db } from "../../firebase/config";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match !");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const { email, uid, displayName } = user;
          if (user) {
            addDoc(collection(db, "users"), {
              email,
              uid,
              name: displayName ? email : displayName,
            });
          }
          toast.success("Registration Successful...");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      <div className="register">
        <div className="register-container">
          <h1 className="register-container--heading">Đăng ký</h1>
          <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            className="register-form box"
          >
            <div className="register-form__content">
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="register-form__content--input box"
                placeholder="admin@gmail.com..."
              />
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="register-form__content--input box"
                placeholder="Nhập mật khẩu"
              />
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="register-form__content--input box"
                placeholder="Nhập lại mật khẩu"
              />

              <div className="register-form__content--btn">
                <button
                  type="submit"
                  className="register-form__content--btn-basic"
                >
                  Đăng ký
                </button>
                <div className="devided">----------or----------</div>
                <div className="register-form__content--login">
                  <Link to="/login">Đăng nhập</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
