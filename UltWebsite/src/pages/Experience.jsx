import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  timeline,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  TableCellsIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import SimpleCard from "./ExperDes";
import { motion } from "framer-motion";

export function Experience() {
  const vari = {
    hidden: {
      x: -200,
    },
    visible: {
      x: 0,
      transition: { duration: 1 },
      amount: "all",
    },
    small: {
      scale: 0,
    },
    normal: {
      scale: 1,
      transition: { duration: 1 },
      amount: "all",
    },
  };
  return (
    <>
      <div className="flex justify-center" id="experience">
        <Typography
          className="flex justify-center text-mybrown py-3"
          variant="h2"
        >
          Experience
        </Typography>
      </div>

      <div className="flex justify-center gap-20">
        <motion.div
          className="w-[25rem]  ml-4"
          variants={vari}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
        >
          <Timeline>
            <TimelineItem className="h-80 py-9">
              <TimelineConnector className="!w-[78px]" />

              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon
                  className="p-3 bg-mylightBlue"
                  variant="ghost"
                  color="white"
                >
                  <TableCellsIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h5" color="blue-gray">
                    Data Visualization Internship
                  </Typography>
                  <Typography variant="h6"> Ultrajaya</Typography>
                  <Typography>Bandung, Indonesia</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    May 2023 - June 2023
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className="h-80">
              <TimelineConnector className="!w-[78px]" />
              <TimelineHeader className="relative rounded-xl border  border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon
                  className="p-3 bg-myblue"
                  variant="ghost"
                  color="white"
                >
                  <AcademicCapIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h5" color="blue-gray">
                    Software II Teaching Assistant
                  </Typography>
                  <Typography variant="h6">
                    The Ohio State University
                  </Typography>
                  <Typography>Columbus, Ohio</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    January 2024 - May 2024
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
            <TimelineItem className="h-0">
              <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
                <TimelineIcon
                  className="p-3 bg-mylightTurk"
                  variant="ghost"
                  color="white"
                >
                  <ComputerDesktopIcon className="h-5 w-5" />
                </TimelineIcon>
                <div className="flex flex-col gap-1">
                  <Typography variant="h5" color="blue-gray">
                    DevOps Internship
                  </Typography>
                  <Typography variant="h6">
                    Flight Safety International
                  </Typography>
                  <Typography>Columbus, Ohio</Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    May 2024 - August 2024
                  </Typography>
                </div>
              </TimelineHeader>
            </TimelineItem>
          </Timeline>
        </motion.div>
        <motion.div
          className=""
          variants={vari}
          initial="small"
          whileInView="normal"
          viewport={{
            once: true,
          }}
        >
          <SimpleCard />
        </motion.div>
      </div>
    </>
  );
}

export default Experience;
