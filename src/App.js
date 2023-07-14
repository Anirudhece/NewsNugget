import React from "react";
import { Container } from "@mui/material";
import Header from "./global/Header";
import Footer from "./global/Footer";

import "./styles.css";
import Summarizer from "./components/Summarizer";
export default function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Summarizer />
        <Footer />
      </Container>
    </div>
  );
}
