import React from "react";
import s from "./Sections.module.scss";
import Button from "../../../components/Button/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiReceiveMoney, GiNotebook } from "react-icons/gi";

import exampleItem from "../../../assets/exampleItem.png";
import exampleItem2 from "../../../assets/exampleItem2.png";

import horizontalDots from "../../../assets/horizontal-dots.png";
import verticalDots from "../../../assets/vertical-dots.png";

export default function Services() {
  return (
    <section
      id="services"
      className={`${s.flex} ${s.containerSection} ${s.services}`}
    >
      <div className={s.contentSection}>
        <div className={`${s.flex} ${s.containerServices}`}>
          <div className={`${s.flex} ${s.containerTop}`}>
            <div className={`${s.flex}  ${s.contentTop}`}>
              <h2>All startups need to make their business work</h2>
              <p>
                We work with a huge pool of investors, venture capital firms and
                business angels
              </p>
            </div>
            <div className={s.contentBtnLine}>
              <Button addClass={s.btnLine}>
                <span>Get Started</span>
                <MdOutlineKeyboardArrowRight />
              </Button>
            </div>
          </div>

          <div className={`${s.flex} ${s.contentBottom}`}>
            <div className={s.containerBLeft}>
              <div className={s.contentBLeft}>
                <div className={`${s.itemBLImg} ${s.itemBLIOne}`}>
                  <img src={horizontalDots} alt="Horizontal Dots" />
                  <img src={exampleItem} alt="Example 1" />
                </div>
                <div className={`${s.itemBLImg} ${s.itemBLITwo}`}>
                  <img src={verticalDots} alt="Vertical Dots" />
                  <img src={exampleItem2} alt="Example 2" />
                </div>
              </div>
            </div>
            <div className={s.contentBRight}>
              <div className={s.itemBRTitle}>
                <h3>Design business model and write a business plan</h3>
                <p>
                  We designed special services for startups, focused on the most
                  important issues needed to be solved:
                </p>
              </div>
              <div className={s.itemBRContext}>
                <div className={s.itemBRCC}>
                  <div className={s.itemBRCIIcon}>
                    <GiReceiveMoney />
                  </div>
                  <div className={s.itemBRCIText}>
                    <span>Find an Investor</span>
                    <p>
                      Access to financial resources is essentially important for
                      many startups.
                    </p>
                  </div>

                  <div className={s.itemBRCC}>
                    <div className={s.itemBRCIIcon}>
                      <GiNotebook />
                    </div>
                    <div className={s.itemBRCIText}>
                      <span>Find an Investor</span>
                      <p>
                        Access to financial resources is essentially important
                        for many startups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
