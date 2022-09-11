import React from "react"
import { motion } from "framer-motion"
import { images } from "../../constants"
import "./About.scss"

import { AppWrap, MotionWrap } from "../../wrapper"

const About = () => {
  const abouts = [
    { title: "FE", description: "takecare of the UI and their functionalities", imgUrl: images.about01 },
    { title: "BE", description: "takecare of the UI and their functionalities", imgUrl: images.about02 },
    { title: "UI/UX", description: "takecare of the UI and their functionalities", imgUrl: images.about03 },
  ]
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: "tween" }} className="app__profile-item" key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg")
