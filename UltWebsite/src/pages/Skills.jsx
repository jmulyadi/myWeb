import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    { imageName: "Python.png", title: "Python" },
    { imageName: "java.png", title: "Java" },
    { imageName: "boot.png", title: "Bootstrap" },
    { imageName: "c.png", title: "C" },
    { imageName: "react.svg", title: "React" },
    { imageName: "js.png", title: "JavaScript" },
    { imageName: "git.png", title: "Git" },
    { imageName: "css.webp", title: "CSS" },
    { imageName: "linux.png", title: "Linux" },
    { imageName: "node.png", title: "Node.js" },
    { imageName: "ml.png", title: "Machine Learning" },
    { imageName: "kuber.png", title: "Kubernetes" },
    { imageName: "html.png", title: "HTML" },
    { imageName: "swift.png", title: "Swift" },
    { imageName: "tail.png", title: "Tailwind" },
    { imageName: "mysql.png", title: "MySQL" },
    { imageName: "yaml.jpg", title: "YAML" },
    { imageName: "excel.png", title: "Excel" },
    { imageName: "cloud.png", title: "Cloud Computing" },
    { imageName: "json.webp", title: "JSON" },
    { imageName: "terra.png", title: "Terraform" },
    { imageName: "mongo.png", title: "MongoDB" },
    { imageName: "aws.png", title: "AWS" },
    { imageName: "ansible.png", title: "Ansible" },
  ];
  const vari = {
    normal: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
    visible: (index) => ({
      opacity: 1,
      rotate: [20, 90, 0],
      transition: { delay: 0.07 * index, duration: 0.5 },
    }),
    hidden: {
      opacity: 0,
      rotate: 0,
    },
    left: {
      opacity: 1,
      x: -200,
    },
  };

  return (
    <div className="" id="skills">
      <div className="flex justify-center py-4">
        <Typography variant="h1" className="text-mylightTurk">
          Skills
        </Typography>
      </div>
      <div className="ml-10 mr-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            className=""
            variants={vari}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            key={index}
            custom={index}
          >
            <div className="flex justify-center">
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={`../../Skills/${skill.imageName}`}
                alt={skill.title}
                style={{ maxHeight: "150px" }} // Adjust the max height as needed
              />
            </div>
            <div className="flex justify-center">
              <Typography>{skill.title}</Typography>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default Skills;
