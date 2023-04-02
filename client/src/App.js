import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Form from "./pages/Form"
import Error from "./pages/Error"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Form />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
