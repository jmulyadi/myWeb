import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import {
  Spinner,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Button,
  Slider,
} from "@material-tailwind/react";
import PPNavbar from "./PPNav";
import Slidey from "./Featured";

const data = [
  {
    imageLink: "../../Project_Pics/Social_Media.png",
    title: "Social Media Clone",
    page: "/Social",
    videoLink: "https://youtube.com/embed/K36kTx885dA?si=XtIBUYsI4-ssgXJ6",
    des: "Developed a comprehensive social media platform using React, Node.js, Express.js, MySQL, and Axios. Highlights include seamless user interactions such as registration, login, profile creation, post management, commenting, and liking. Leveraged React's modular architecture for scalability and Netlify for seamless deployment. This project demonstrates proficiency in both frontend and backend development, showcasing a passion for creating impactful digital experiences.",
  },
  {
    imageLink: "../../public/Project_Pics/Robot.png",
    title: "Autonomous Robot",
    page: "/Robot",
    videoLink: "https://youtube.com/embed/AoXNkOP0DM8?si=8SYTCBeKjVJKn4CB",
    des: "The purpose of this project was to create a robot that automated airport tasks. There was a simulated airport that the robot had to drive around complete tasks such as pressing ticket buttons and stamping passports.",
  },
  {
    imageLink: "../../Project_Pics/Linear_Graph.png",
    title: "Machine Learning",
    page: "/ML",
    videoLink: "https://youtube.com/embed/mV63x6iWvAg?si=UBDpyqfP0WjYgiXg",
    des: "In this project, I utilized Python to delve into the world of machine learning, focusing on essential algorithms like Linear Regression, k-Nearest Neighbors (k-NN), and Support Vector Machines (SVM). Through this exploration, I gained a strong understanding of these algorithms, from linear modeling to proximity-based classification and powerful non-linear modeling. Leveraging Python libraries like scikit-learn, NumPy, and pandas, I honed my skills in data analysis, feature engineering, and model evaluation. This project not only equipped me with practical machine learning knowledge but also highlighted the flexibility of Python as a tool for data science.",
  },
  {
    imageLink: "../../Project_Pics/chibi.jpg",
    title: "Meme Generator",
    page: "/Meme",
    videoLink: "https://youtube.com/embed/3NQXit04PWo?si=nDSC7mfAvuBUTpZI",
    des: "With a strong focus on mastering React, I eagerly embraced this opportunity to enhance my expertise in building responsive and user-friendly web applications. This meme generator is the culmination of the skills I have gathered throughout my React journey. Here is a link to the website: https://memegenerator-josh.netlify.app/",
  },
  {
    imageLink: "../../Project_Pics/Indo_Graph.png",
    title: "Data Science Intern Work",
    page: "/Data",
    videoLink: "https://youtube.com/embed/p_f8KGjpZvs?si=_oF1ire6ZWYtr3vz",
    des: "This was the project I complete during my internship at Ultrajaya. The purpose was to create interactive displays that would help effectively communicate data.",
  },
  {
    imageLink: "../../Project_Pics/remind2.jpg",
    title: "IOS Reminders App",
    page: "/IOS",
    videoLink: "https://youtube.com/embed/GSEuExGkEE4?si=_0w9aOwRAWxeVLcm",
    des: "This was my first time working with Swift and the IOS application ecosystem. This project helped me grasp the different features in the IOS library and how creating and scheduling notifications work.",
  },
  {
    imageLink: "../../Project_Pics/blackJack.png",
    title: "Black Jack",
    page: "/Black",
    videoLink: "https://youtube.com/embed/1FFYuvxVPew?si=Df0-BW0D8Lf7R462",
    des: "I created a C++ project that is a classic game of Blackjack with a built-in tutorial feature to teach users how to play the game. In this project, players can enjoy a virtual game of Blackjack against the computer while receiving helpful guidance on the rules, strategies, and decision-making processes involved in the game.",
  },
  {
    imageLink: "../../Project_Pics/Software.png",
    title: "Software OSU Class",
    page: "/Software",
    videoLink: "https://youtube.com/embed/-q8wE_N_7-o?si=lZ4Q89cbWG-AQqwB",
    des: "Software is the Java Course at OSU where we learn the basis of good coding practices and Objected Oriented Programming. Here is an example of a project I worked on during this class. It takes news sources and compiles the data into tables.",
  },
  {
    imageLink: "../../Project_Pics/systems.png",
    title: "Systems OSU Class",
    page: "/Systems",
    videoLink: "https://youtube.com/embed/vYYYc8R9aHw?si=1p_XeU-FEzq0DCdi",
    des: "Systems is a C and Assembly based class. It's designed to teach us low level programming. This is a fun game I created in C where Brutus the plumber can move around collecting coins before reaching the flagpole",
  },
];

export function PP() {
  const location = useLocation();
  const currentPath = location.pathname;
  const item = data.find((item) => item.page == currentPath);
  const [loading, setLoading] = useState(true);
  function handleLoad() {
    setLoading(false);
  }
  const vari = {
    normal: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    hidden: {
      opacity: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="relative">
      <PPNavbar />
      <div className=" py-5 flex items-center justify-center">
        <div className="absolute">
          {loading && <Spinner className="h-12 w-12" color="blue" />}
        </div>
        <iframe
          onLoad={handleLoad}
          width="640"
          height="360"
          className=" rounded-lg"
          src={item.videoLink}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        />
      </div>

      <motion.div
        className="flex justify-center"
        variants={vari}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
      >
        <Card className="mt-6 w-3/4">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {item.title}
            </Typography>
            <Typography>{item.des}</Typography>
          </CardBody>
        </Card>
      </motion.div>
      <div className="mr-4 ml-4 py-6">
        <Slidey />
      </div>
    </div>
  );
}

export default PP;
