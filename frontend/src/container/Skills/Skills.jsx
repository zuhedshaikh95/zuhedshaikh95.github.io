import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const skill = ["All", "Frontend", "Backend"];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ scale: [0, 1], opacity: [0, 0.25, 0.5, 0.75, 1] });
  const [skills, setSkills] = useState([]);
  const [filterSkill, setFilterSkill] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'skills']";

    client.fetch(query).then((data) => {
      setSkills(data);
      setFilterSkill(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100,scale: [0, 1], opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{ y: 0,scale: [0, 1], opacity: [0, 0.25, 0.5, 0.75, 1] }]);

      if (item === "All") {
        setFilterSkill(skills);
        setAnimateCard([{ y: 100,scale: [0, 1], opacity: 0}]);
        setAnimateCard({ scale: [0, 1], opacity: [0, 0.25, 0.5, 0.75, 1] });
      } else {
        setFilterSkill(skills.filter((skill) => skill.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Technical Skills</h2>

      <div className="app__work-filter">
        {skill.map((item, index) => (
          <div
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
            key={index}
            onClick={() => handleWorkFilter(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {filterSkill?.map((skill, index) => (
            <motion.div
              key={index}
              whileInView={animateCard}
              transition={{
                duration: 0.5,
                ease: "backOut",
              }}
              className="app__skills-item app__flex"
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
