import PrivateRoute from "./PrivateRoute";

export default function PrivateContainer({ children }) {
    return <PrivateRoute>
        {children}
    </PrivateRoute>
}