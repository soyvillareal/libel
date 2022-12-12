import React from "react";
import s from "./Sections.module.scss";
import { FiPlay } from "react-icons/fi";
import Button from "../../../components/Button/Button";
import { motion } from "framer-motion";

export default function Main() {
  return (
    <section id="main" className={`${s.flex} ${s.containerSection} ${s.main}`}>
      <div className={`${s.flex} ${s.contentSection}`}>
        <div className={`${s.flex} ${s.containerMain}`}>
          <div className={`${s.flex} ${s.contentMain}`}>
            <h1>Empowering Startups</h1>
            <p>
              Providing our clients with the strategic guidance to make the
              right technology and business decisions. We will help you develop
              the best operational processes for your startup.
            </p>
            <motion.div
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
            >
              <Button
                addClass={`${s.flex} ${s.iconPlay}`}
                href="https://www.youtube.com/watch?v=f_WuRfuMXQw"
                target="_blank"
              >
                <FiPlay />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
