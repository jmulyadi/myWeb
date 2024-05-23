import React from "react";
import { useEffect, useRef } from "react";
import AboutMe from "./pages/AboutMe";
import Github from "./pages/Github";
import Linkedin from "./pages/Linkedin";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";
import { motion, useInView, useAnimation } from "framer-motion";

/*<motion.div
            variants={{
              hidden: { left: 0 },
              visible: { slideControls },
            }}
            initial="hidden"
            animate={slideControls}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "var(--brand)",
              zIndex: 20,
            }}
          ></motion.div>*/
const Home = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: "all" });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const pressed = props.props;
  const changeBack = props.function;
  console.log(pressed);

  useEffect(() => {
    if (isInView) {
      //fire animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls]);
  const vari = {
    normal: {},
    hidden: {
      opacity: 0,
      rotate: 0,
    },
    move: {
      scale: [1, 1.2, 1],
      transition: { duration: 0.5 },
    },
  };
  return (
    <div className="flex justify-center" ref={ref}>
      <motion.div
        className="mt-1 grid grid-cols-1 font-sm gap-[0.625rem] md:grid-cols-3 md:gap-x-0.75"
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -75 },
        }}
        initial="hidden"
        animate={mainControls}
      >
        <div className="flex-1">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AboutMe />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="flex px-10 py-12 justify-center gap-8">
              <div className="flex-0 px-2">
                <a href="https://github.com/jmulyadi">
                  <Github />
                </a>
              </div>
              <div className="flex-0">
                <a href="https://www.linkedin.com/in/josh-mulyadi/">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="flex-1"
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Profile />
        </motion.div>
        <motion.div
          className="flex-1"
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className=""
            variants={vari}
            animate={pressed ? "move" : "normal"}
            onAnimationComplete={changeBack}
          >
            <Resume />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
