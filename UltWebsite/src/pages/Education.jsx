import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";

import { BookOpenIcon, BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export function Education() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const vari = {
    normal: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    visible: {
      scale: 1,
      transition: { duration: 0.6 },
    },
    right: {
      opacity: 1,
      x: 200,
    },
    left: {
      opacity: 1,
      x: -200,
    },
  };

  return (
    <>
      <Typography
        className="text-mydarkTurk flex justify-center py-5"
        variant="h1"
        id="education"
      >
        Education
      </Typography>
      <div className="px-4 md:px-20">
        <Accordion open={openAcc1}>
          <motion.div
            variants={vari}
            initial="right"
            whileInView="normal"
            viewport={{
              once: true,
            }}
          >
            <AccordionHeader
              onClick={handleOpenAcc1}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex-1">The Ohio State University</div>
              <div className="flex items-center mt-2 md:mt-0">
                <Typography variant="h6" className="mr-2">
                  GPA: 3.97/4.0
                </Typography>
                <BookOpenIcon
                  className="h-10 w-10 text-myblue"
                  variant="gradient"
                />
              </div>
            </AccordionHeader>
          </motion.div>
          <motion.div
            variants={vari}
            initial="left"
            whileInView="normal"
            viewport={{
              once: true,
            }}
          >
            <AccordionBody>
              Currently a rising Junior with majoring in Computer Science in
              Engineering with a minior in German. I'm also involved in a choir
              and Buckeyethon which is a yearly fundraiser for kids with cancer.
            </AccordionBody>
          </motion.div>
        </Accordion>
        <Accordion open={openAcc2}>
          <motion.div
            variants={vari}
            initial="right"
            whileInView="normal"
            viewport={{
              once: true,
            }}
          >
            <AccordionHeader
              onClick={handleOpenAcc2}
              className="flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex-1">Olentangy Liberty Highschool</div>
              <div className="flex items-center mt-2 md:mt-0">
                <Typography variant="h6" className="mr-2">
                  GPA: 4.24/4.0
                </Typography>
                <BuildingLibraryIcon className="text-myblue h-10 w-10" />
              </div>
            </AccordionHeader>
          </motion.div>
          <motion.div
            variants={vari}
            initial="left"
            whileInView="normal"
            viewport={{
              once: true,
            }}
          >
            <AccordionBody>
              Was involved in Tennis, Theatre, Choir, and the German Honor
              Society. Strived hard to excell both in and outside of class.
            </AccordionBody>
          </motion.div>
        </Accordion>
      </div>
    </>
  );
}

export default Education;
