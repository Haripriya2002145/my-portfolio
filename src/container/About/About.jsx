import { React, useEffect, useState } from 'react';
import { motion } from "framer-motion";

import './About.scss';
import { images } from '../../constants';


const About = () => {


  return (
    <div id='about'>
      <h2 className='head-text'>
        I am A <span> developer</span>
        <br />
        <p>Good at <span>Problem Solving and designing</span> enthusiast to learn new things</p>
      </h2>

      <div className="resume">
        <button type="button" onClick={(e) => {
          e.preventDefault();
          window.location.href = '#';

        }} >Resume</button>
      </div>


      <div className='app__profiles'>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"


        >

          <img src={images.about01} alt={"haripriya"} />

          <h2 className='bold-text' style={{ marginTop: 20 }}>{"Full Stack Developer"}</h2>
          <p className='p-text' style={{ marginTop: 10 }}>{"I am a Full Stack Developer with a passion for building beautiful and functional web applications."}</p>
        </motion.div>

      </div>

    </div>
  )
}

export default About