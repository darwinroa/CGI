import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import SecundarySection from "../components/SecundarySection";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <SecundarySection />
      <Footer />
    </>
  );
}
