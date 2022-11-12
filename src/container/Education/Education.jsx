import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



import './Education.scss';

const Education = () => {

  const [education, setEducation] = useState([]);


  return (
    <div id='education'>
      <h2 className="head-text">Education</h2>

      <div className="app__edu-exp">

        <motion.div
          className="app__edu-exp-item"
          key="{education.year}"
        >

          <motion.div className="app__edu-exp-works">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__edu-exp-work"
              data-tip
              data-for="{work.name}"
              key="work.name"
            >
              <p id='app__edu-exp-year' >2020 - 2024</p>
              <h4 className="bold-text">SRM Institute of Science and Technology</h4>
              <p className="p-text">B. Tech - Computer Science and Engineering</p>
              <p className="p-text">Chennai, Tamil Nadu</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="app__edu-exp-item"
          key="{education.year}"
        >

          <motion.div className="app__edu-exp-works">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__edu-exp-work"
              data-tip
              data-for="{work.name}"
              key="work.name"
            >
              <p id='app__edu-exp-year' >2018 - 2020</p>
              <h4 className="bold-text">Modern Senior Secondary School</h4>
              <p className="p-text">CLASS XII - Central Board of Secondary Education (CBSE)</p>
              <p className="p-text">Chennai, Tamil Nadu</p>
            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div
          className="app__edu-exp-item"
          key="{education.year}"
        >

          <motion.div className="app__edu-exp-works">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__edu-exp-work"
              data-tip
              data-for="{work.name}"
              key="work.name"
            >
              <p id='app__edu-exp-year' >2005 - 2018</p>
              <h4 className="bold-text">Modern Senior Secondary School</h4>
              <p className="p-text">CLASS X - Central Board of Secondary Education (CBSE)</p>
              <p className="p-text">Chennai, Tamil Nadu</p>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default Education;