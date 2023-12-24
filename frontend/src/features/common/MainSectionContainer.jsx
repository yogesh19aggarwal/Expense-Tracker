import React from "react";
import "./MainSectionContainer.css";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import PrivateContainer from "./PrivateContainer";
export default function MainSectionContainer({ children }) {
  return (
    <React.Fragment>
      <PrivateContainer>
        <Header />
        <main className="main__section">{children}</main>
      </PrivateContainer>
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
    </React.Fragment>
  );
}
