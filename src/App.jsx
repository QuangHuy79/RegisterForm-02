// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import RegisterForm from "./forms/RegisterForm";

// function App() {
//   return (
//     <div className="container py-5 d-flex justify-content-center">
//       <div style={{ maxWidth: "400px", width: "100%" }}>
//         <RegisterForm />
//         <ToastContainer
//           position="top-center" // hoặc "bottom-center"
//           autoClose={3000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="colored"
//         />
//       </div>
//     </div>
//   );
// }
// export default App;

import React from "react";
import AuthContainer from "./forms/AuthContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container py-5 d-flex justify-content-center">
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <AuthContainer />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </div>
    </div>
  );
}

export default App;
