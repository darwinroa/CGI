import * as React from "react";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <p className="mainTitle">CGI CZ | keep IT simple!</p>
          <p className="siteDescription">
            cloud – správa serverů a sítí – vývoj – monitoring – automatizace –
            machine learning
          </p>
        </div>
      </header>
      <div className="mainSection">
        <div className="container">
          <div className="flexContent">
            <div className="col">
              <div className="content">
                <h1>Komplexní IT služby jednoduše</h1>
                <div className="about">
                  <p>
                    Jsme dodavatel cloudových, serverových a softwarových služeb
                    s tradicí více než{" "}
                  </p>
                  <p>
                    <b>
                      Vyznáváme jednoduchost a minimalismus. Snažíme se
                      zjednodušovat a zpřehledňovat složité úkoly a systémy.
                    </b>
                  </p>
                  <p>
                    <b>
                      Těžiště našich služeb tvoří OPEN SOURCE software a
                      systémy, umíme ale i Windows, MAC, IBM AS400 a další.
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
            <div className="col">
              <div className="content">
                <h4>keep it simple</h4>
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
      <div className="secundarySection">
        <div className="container">
          <div className="col">
            <div className="content">
              <h4>kontakt</h4>
              <div className="contactInfo">
                <p>
                  <strong>CGI CZ s.r.o.</strong>
                  <br />
                  Varšavská 715/36
                  <br />
                  120 00 Praha 2
                </p>
                <p>
                  email:<b> sales * cgi.cz</b>
                  <br />
                  tel.: (+420) <b>234 697 102</b>
                  <br />
                  tel.: (+420) 775 144 257 (775-1-HICKS) (obchodní, obecné
                  dotazy, 24h denně)
                  <br />
                  fax.: (+420) 910 050 099
                </p>
                <p>
                  <strong>
                    Technická podpora zákazníkům (nonstop, 24h
                    denně):&nbsp;*číslo vašeho Account managera*
                    <br />
                  </strong>
                </p>
                <p>
                  IČ: 04566068
                  <br />
                  DIČ: CZ04566068 (jsme plátci DPH)
                </p>
                <p>
                  Banka: 12670044/2010 (Fio banka, a.s.)
                  <br />
                  Společnost&nbsp; vedená u rejstříkového soudu v Praze (C
                  249862).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <p className="copyright">(C) 2023 CGI CZ s.r.o.</p>
        </div>
      </footer>
    </>
  );
}
