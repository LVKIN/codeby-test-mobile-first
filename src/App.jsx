import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WithFreeShippingProvider } from "./context/WithFreeShippingProvider";
import { WithoutFreeShippingProvider } from "./context/WithoutFreeShippingProvider";

import Home from "./pages/Home";
import WithFreeShipping from "./pages/WithFreeShipping";
import WithoutFreeShipping from "./pages/WithoutFreeShipping";

const App = () => {

  return (
    <WithoutFreeShippingProvider>
    <WithFreeShippingProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/com-frete-gratis" element={<WithFreeShipping />} />
            <Route path="/sem-frete-gratis" element={<WithoutFreeShipping />} />
        </Routes>
      </BrowserRouter>
    </WithFreeShippingProvider>
    </WithoutFreeShippingProvider>
  )
}

export default App;