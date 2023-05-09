import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FormProvider } from "./FormContext/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <FormProvider>
      <App />
    </FormProvider>
);
