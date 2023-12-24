import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import FullLoader from "./Fullloader";

export default function PrivateRoute({ children }) {
  const auth = useAuth();
  const loading = auth.status === "loading";
  const location = useLocation();
  if (loading) {
    return <FullLoader />;
  }
  if (!auth.user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }
  return children;
}
