import React from "react";
import * as style from "./TitleOrangeBar.module.css";

export default function index({ title }) {
  return (
    <div className={style.containerTitle}>
      <div className={style.orangeBar}></div>
      <h4>{title}</h4>
    </div>
  );
}
