import React, { useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/Loading";
const AuthLayout = ({children}) => {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        {children}
      </Suspense>
    </>
  );
};

export default AuthLayout;
