import React from "react";
import Header from "./component/layout/Header";
import Home from "./component/pages/Home";
import Footer from "./component/layout/Footer";

function App() {
  return (
    <div className="">
      <Header headerName="Header" />
      <Home />
      <Footer footerName="Footer" />
    </div>
  );
}

export default App;
