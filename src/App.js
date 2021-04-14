import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

import Routes from "./routes";

function App() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="This is my title" />
        <meta
          property="og:url"
          content="https://mybox-frontend.herokuapp.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="This is my testing description"
        />
        <meta property="og:image" content="./meta_image.jpeg" />
      </Helmet>
      <Routes />
    </>
  );
}

export default App;
