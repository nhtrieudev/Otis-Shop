import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/config";

function Profile() {
  const [username, setUsername] = useState<string | null>("");
  const [emai, setEmail] = useState<string | null>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
        setEmail(user.email);
      }
    });
  }, [username]);
  return (
    <>
      <div className="profile box">
        <div className="profile-container">
          <h2 className="profile-container--heading">Thông tin tài khoản</h2>
          <div className="profile-container__content">
            <p className="profile-container__content--name">{username}</p>
            <p className="profile-container__content--email">{emai}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
