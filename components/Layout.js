import React from "react";
import { motion } from "framer-motion";

const rotatingAnimation = {
  static: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      loop: Infinity,
      ease: "linear",
    },
  },
};

const Layout = ({ children }) => {
  return (
    <div>
      <div className="topnav">
        <motion.span className="title">
          Dark
          <motion.span
            className="logo"
            initial="static"
            animate="animate"
            variants={rotatingAnimation}
          >
            ⚛
          </motion.span>
          Magic
        </motion.span>
      </div>
      <div className="site__container">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
