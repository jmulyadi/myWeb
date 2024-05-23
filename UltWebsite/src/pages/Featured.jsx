import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function Slidey() {
  const data2 = [
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
      videoLink: "https://youtu.be/3NQXit04PWo",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleData = data2.slice(currentIndex, currentIndex + 5);
  const [move, setMove] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    setMove(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, data2.length - 1));
    setMove(true);
  };
  const moveBack = () => {
    setMove(false);
  };
  const variants = {
    initial: {
      opacity: 0,
      x: 10,
      transition: { duration: 0.2 },
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="relative">
      <div className="flex justify-center items-center mb-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-0 p-2 bg-gray-700 text-white rounded"
        >
          <div className="">{"<"}</div>
        </button>
        <motion.div className="grid grid-cols-5 gap-1">
          {visibleData.map(({ imageLink, title, page }, index) => (
            <div key={index} className="flex flex-col items-center">
              <Link to={page}>
                <motion.img
                  src={imageLink}
                  className="h-20 w-36 cursor-pointer rounded-lg object-cover object-center"
                  alt={title}
                  variants={variants}
                  initial="initial"
                  animate={move ? "initial" : "animate"}
                  //exit={move ? "initial" : "exit"}
                  key={index}
                  onAnimationComplete={moveBack}
                />
              </Link>
              <span className="text-center text-sm text-black mt-2">
                {title}
              </span>
            </div>
          ))}
        </motion.div>
        <button
          onClick={handleNext}
          disabled={currentIndex >= data2.length - 5}
          className="absolute right-0 p-2 bg-gray-700 text-white rounded"
        >
          <div className="">{">"}</div>
        </button>
      </div>
    </div>
  );
}

export default Slidey;
