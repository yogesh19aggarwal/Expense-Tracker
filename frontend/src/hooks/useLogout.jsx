import { useNavigate } from "react-router-dom";
import { logout } from "../api/auth.api";
import useSettings from "./useSettings";
import useAuth from "./useAuth";
import { useState } from "react";

const useLogout = () => {
  const auth = useAuth();
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();
  const settingContext = useSettings();

  const onLogout = async () => {
    try {
      setStatus("loading");
      await logout();
      auth.onSetCurrentUser(null);
      settingContext.onSetSettings(null);
      setStatus("success");
      localStorage.clear();
      navigate("/auth", { replace: true });
    } catch (error) {
      toast.error(
        isAxiosError(error) ? error.response.data.message : "Some error occured"
      );
      setStatus("failure");
    }
  };
  const loading = status === "loading";
  return { loading, onLogout };
};

export default useLogout;
