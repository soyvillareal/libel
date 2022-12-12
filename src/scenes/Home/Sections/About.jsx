import React from "react";
import s from "./Sections.module.scss";
import { Items } from "./Content";

export default function About() {
  return (
    <section
      id="about"
      className={`${s.flex} ${s.containerSection} ${s.about}`}
    >
      <div className={`${s.flex} ${s.contentSection}`}>
        <div className={`${s.flex} ${s.containerAbout}`}>
          <p>
            We help innovative startups to find and fix weak points and launch
            the product
          </p>
          <h2>Special outstanding service for startups</h2>
          <div className={`${s.flex} ${s.containerAbout}`}>
            <div className={`${s.flex} ${s.contentAbout}`}>
              {Items.map((item, i) => (
                <div className={`${s.flex} ${s.itemContentAbout}`} key={i}>
                  <div className={s.itemSubCA}>
                    <div className={s.itemCAIcon}>{item.icon}</div>
                    <span>{item.title}</span>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
