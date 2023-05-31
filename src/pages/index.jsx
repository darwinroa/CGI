import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import SecondarySection from "../components/SecondarySection";
import "./index.css";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <SecondarySection />
      <Footer />
    </>
  );
}
