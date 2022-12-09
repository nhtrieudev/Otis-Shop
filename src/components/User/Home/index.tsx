import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase/config";

function Home() {
  const [username, setUsername] = useState<string | null>("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsername(user.displayName);
      }
    });
  }, [username]);

  return (
    <>
      <div className="home box">
        <h1>Xin Chào {username}</h1>
      </div>
    </>
  );
}

export default Home;
