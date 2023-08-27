import React from "react";
import { Header, Footer } from "./component/layout";
import { Home, About, Blog, Contact} from "./component/pages";

function App() {
  return (
    <div className="">
      <Header headerName="Header" />
      <Home />
      <About />
      <Blog />
      <Contact />
      <Footer footerName="Footer" />
    </div>
  );
}

export default App;
