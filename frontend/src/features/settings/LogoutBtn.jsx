import React from "react";
import useLogout from "../../hooks/useLogout";

const LogoutBtn = () => {
  const { loading, onLogout } = useLogout();

  return (
    <button
      disabled={loading}
      onClick={onLogout}
      className="setting__logoutBtn"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
