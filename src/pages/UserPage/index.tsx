import Sidebar from "../../components/User/Sidebar";
import { Outlet } from "react-router-dom";

function UserPage() {
  return (
    <>
      <div className="user">
        <div className="user-container">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserPage;
