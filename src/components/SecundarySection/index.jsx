import React from "react";
import * as style from "./SecundarySection.module.css";
import TitleOrangeBar from "../TitleOrangeBar";

export default function index() {
  return (
    <div className={style.secundarySection}>
      <div className={style.overlay}></div>
      <div className={`container ${style.container}`}>
        <div className="col">
          <div className={style.content}>
            <TitleOrangeBar title={"kontakt"} />
            <div className={style.contactInfo}>
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
                tel.: (+420) 775 144 257 (775-1-HICKS) (obchodní, obecné dotazy,
                24h denně)
                <br />
                fax.: (+420) 910 050 099
              </p>
              <p>
                <strong>
                  Technická podpora zákazníkům (nonstop, 24h denně):&nbsp;*číslo
                  vašeho Account managera*
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
  );
}
