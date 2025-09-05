import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Screen } from "./components/lib/Screen";
import { Tab1 } from "./screens/Tab1";
import { Tab2 } from "./screens/Tab2";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/tab1" element={<Screen MainContent={<Tab1 />} />} />
      <Route path="/tab2" element={<Screen MainContent={<Tab2 />} />} />
      <Route path="*" element={<Navigate to="/tab1" replace />} />
    </Routes>
  </BrowserRouter>
);
