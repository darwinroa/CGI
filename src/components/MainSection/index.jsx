import React from "react";
import * as style from "./MainSection.module.css";

export default function index() {
  return (
    <div className={style.mainSection}>
      <div className={`container ${style.container}`}>
        <div className={style.flexContent}>
          <div className={style.col_1}>
            <div className="content">
              <h1>Komplexní IT služby jednoduše</h1>
              <div className={style.about}>
                <p>
                  Jsme dodavatel cloudových, serverových a softwarových služeb s
                  tradicí více než <b>20 let.</b>
                </p>
                <p>
                  <b>
                    Vyznáváme jednoduchost a minimalismus. Snažíme se
                    zjednodušovat a zpřehledňovat složité úkoly a systémy.
                  </b>
                </p>
                <p>
                  <b>
                    Těžiště našich služeb tvoří OPEN SOURCE software a systémy,
                    umíme ale i Windows, MAC, IBM AS400 a další.
                  </b>
                </p>
                <p>
                  Spravujeme přes 1000 fyzických serverů, virtualizovaných
                  instancí, firewallů a aplikací pro velké společnosti, malé
                  firmy, živnostníky i soukromé uživatele.
                </p>
                <p>
                  Zavolejte nebo napište nám:
                  <br />
                  <a href="http://callto:234697102">234 697 102</a> /
                  <b>
                    <a href="mailto://sales@cgi.cz">sales@cgi.cz</a>
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className={style.col_2}>
            <div className={style.content}>
              <div className={style.containerTitleKeepItSimple}>
                <div className={style.before}></div>
                <h4>keep it simple</h4>
              </div>
              <p>
                Hlásíme se k minimalistickým principům slavného konstruktéra
                Kellyho Johnsona (Lockheed Skunk Works / autor U-2 a SR-71
                Blackbird) a Leonarda da Vinci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
