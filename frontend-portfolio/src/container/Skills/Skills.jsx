import React from "react"
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"
import { images } from "../../constants"

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Skills.scss"

const Skills = () => {
  const experiences = [
    { year: "2022", works: [{ name: "Software Engineering IV", company: "Photon Interactive Private Limited..", desc: "Java" }] },
    { year: "2019", works: [{ name: "Fullstack Developer", company: "Intellidesign", desc: "javscript" }] },
    { year: "2018", works: [{ name: "Software Developer", company: "ParallelReailty", desc: "Html,Css,Javascript" }] },
  ]
  const skills = [
    { name: "Javascript", bgColor: "#fff", icon: images.javascript },
    { name: "ReactJS", bgColor: "#fff", icon: images.react },
    { name: "Redux", bgColor: "#fff", icon: images.redux },
    { name: "NodeJS", bgColor: "#fff", icon: images.node },
  ]

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-item app__flex" key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5 }} className="app__skills-exp-work" data-tip data-for={work.name} key={work.name}>
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip id={work.name} effect="solid" arrowColor="#fff" className="skills-tooltip">
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg")
