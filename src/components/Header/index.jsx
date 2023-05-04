import React from "react";
import * as style from "./Header.module.css";

export default function index() {
  return (
    <header className={style.navbar}>
      <div className={`container ${style.container}`}>
        <p className={style.mainTitle}>CGI CZ | keep IT simple!</p>
        <p className={style.siteDescription}>
          cloud – správa serverů a sítí – vývoj – monitoring – automatizace –
          machine learning
        </p>
      </div>
    </header>
  );
}
