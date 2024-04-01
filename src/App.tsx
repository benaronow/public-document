import React from "react";
import { tss } from "tss-react/mui";
import "./App.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Helmet } from "react-helmet";

const useStyles = tss.create(() => ({
  appContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function App() {
  const { classes, cx } = useStyles();

  return (
    <div className="App">
      <Helmet>
        <title>Public Document</title>
      </Helmet>
      <Header />
      <div className={cx(classes.appContainer)}>
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
