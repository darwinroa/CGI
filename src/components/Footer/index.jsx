import React from "react";
import * as style from "./Footer.module.css";

export default function index() {
  return (
    <footer className={style.footer}>
      <div className={`container ${style.container}`}>
        <p className="copyright">(C) 2023 CGI CZ s.r.o.</p>
      </div>
    </footer>
  );
}
