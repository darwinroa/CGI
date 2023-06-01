import React, { useEffect } from "react";
import * as style from "./Footer.module.css";

export default function index() {
  useEffect(() => {
    const interval = setInterval(() => {
      const year = new Date().getFullYear();
      document.getElementById("year").textContent = year;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={style.footer}>
      <div className={`container ${style.container}`}>
        <p className="copyright">
          (C) <span id="year"></span> CGI CZ s.r.o.
        </p>
      </div>
    </footer>
  );
}
