import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export function Gallery() {
  const data = [
    {
      imageLink: "../../Project_Pics/Social_Media.png",
      title: "Social Media Clone",
      page: "/Social",
      videoLink: "https://youtu.be/K36kTx885dA?si=XtIBUYsI4-ssgXJ6",
    },
    {
      imageLink: "../../Project_Pics/Robot.png",
      title: "Autonomous Robot",
      page: "/Robot",
      videoLink: "https://youtu.be/AoXNkOP0DM8?si=8SYTCBeKjVJKn4CB",
    },
    {
      imageLink: "../../Project_Pics/Linear_Graph.png",
      title: "Machine Learning",
      page: "/ML",
      videoLink: "https://youtu.be/mV63x6iWvAg?si=UBDpyqfP0WjYgiXg",
    },
    {
      imageLink: "../../Project_Pics/chibi.jpg",
      title: "Meme Generator",
      page: "/Meme",
      videoLink: "https://youtu.be/3NQXit04PWo",
    },
    {
      imageLink: "../../Project_Pics/Indo_Graph.png",
      title: "Data Science Intern Work",
      page: "/Data",
      videoLink: "https://youtu.be/p_f8KGjpZvs?si=_oF1ire6ZWYtr3vz",
    },
    {
      imageLink: "../../Project_Pics/remind2.jpg",
      title: "IOS Reminders App",
      page: "/IOS",
      videoLink: "https://youtu.be/GSEuExGkEE4?si=_0w9aOwRAWxeVLcm",
    },
    {
      imageLink: "../../Project_Pics/blackJack.png",
      title: "Black Jack",
      page: "/Black",
      videoLink: "https://youtu.be/1FFYuvxVPew?si=Df0-BW0D8Lf7R462",
    },
    {
      imageLink: "../../Project_Pics/Software.png",
      title: "Software OSU Class",
      page: "/Software",
      videoLink: "https://youtu.be/-q8wE_N_7-o?si=lZ4Q89cbWG-AQqwB",
    },
    {
      imageLink: "../../Project_Pics/systems.png",
      title: "Systems OSU Class",
      page: "/Systems",
      videoLink: "https://youtu.be/vYYYc8R9aHw?si=1p_XeU-FEzq0DCdi",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      //fire animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div className="py-10" id="projects">
      <Typography className="flex justify-center text-myblue" variant="h2">
        Projects
      </Typography>
      <div className="flex justify-center py-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map(({ imageLink, title, page, videoLink }, index) => (
            <motion.div
              ref={ref}
              key={index}
              variants={{
                visible: (index) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.05,
                  },
                }),
                hidden: { opacity: 0, y: 75 },
              }}
              initial="hidden"
              viewport={{ amount: "all", once: true }}
              whileInView="visible"
              custom={index}
            >
              <Link to={{ pathname: page, state: { videoLink } }}>
                <div className="duration-300 hover:scale-110">
                  <img
                    className=" h-40 w-80 rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="gallery-photo"
                  />
                  <Typography
                    className="flex justify-center text-mydarkTurk"
                    variant="h6"
                  >
                    {title}
                  </Typography>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Gallery;
