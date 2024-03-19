import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./routes/Login";
import Error from "./routes/Error";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./routes/Signup";
import NavbarWrapper from "./components/NavbarWrapper";
import EditorPage from "./routes/EditorPage";
import Dashboard from "./routes/Dashboard";

const loadingMarkup = (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-950"></div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <App />,  },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/editor/:user/new/:id", element: <EditorPage /> },
      { path: "/editor/:user/:id", element: <EditorPage /> },
      { path: "/dashboard/:user", element: <Dashboard /> }
      //{ path: "/editor/:id", element: <EditorPage />}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Suspense>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
