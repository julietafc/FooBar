import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Expenses" element={<Expenses />} />
        <Route path="Invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
