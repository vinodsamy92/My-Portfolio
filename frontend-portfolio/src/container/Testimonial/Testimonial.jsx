import React, { useState, useEffect } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { motion } from "framer-motion"
import { images } from "../../constants"

import { AppWrap, MotionWrap } from "../../wrapper"
// import { urlFor, client } from "../../client"
import "./Testimonial.scss"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = (index) => {
    setCurrentIndex(index)
  }
  const testimonials = [
    {
      name: "Nishant Pitha",
      company: "Adobe | Adobe Experience Platform",
      imgurl: images.react,
      feedback: "Vinoth has been working for 2 years for Intellidesign Ltd, an official supplier of software for Adobe. From what I can see, the results that have been achieved are of good quality.",
    },
    {
      name: "Marco Pileri",
      company: "Intelli-design | Founder",
      imgurl: images.javascript,
      feedback: "Vinoth is a responsible person that knows how to work in team and is always ready to help his colleagues. Highly reccomended. He worked for me on a project for Adobe Inc. called Interactive Demo Builder.",
    },
  ]

  const brands = [
    { imgUrl: images.adobe, name: "Adobe" },
    { imgUrl: images.ibm, name: "IBM" },
    { imgUrl: images.accenture, name: "Accenture" },
    { imgUrl: images.cityOfWest, name: "City WestMinster" },
  ]
  useEffect(() => {
    // const query = '*[_type == "testimonials"]'
    // const brandsQuery = '*[_type == "brands"]'
    // client.fetch(query).then((data) => {
    //   setTestimonials(data)
    // })
    // client.fetch(brandsQuery).then((data) => {
    //   setBrands(data)
    // })
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonials[currentIndex].imgurl} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, type: "tween" }} key={brand._id}>
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonial", "app__primarybg")
