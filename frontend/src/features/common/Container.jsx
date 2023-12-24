import { ToastContainer } from "react-toastify";
import './Container.css'
const Container = ({ children }) => {
  return (
    <main className="main">
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
};

export default Container;
