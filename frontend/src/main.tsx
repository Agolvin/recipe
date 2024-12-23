import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.tsx";
//import Page_test from "./pages/Page_test.tsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";
import QueryClientProvider from "./providers/QueryClientProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Page_test />
    <App /> */}
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
