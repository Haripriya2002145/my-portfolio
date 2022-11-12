import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';



import './Work.scss';

const Work = () => {


  return (
    <div id='work'>
      <h2 className='head-text'>
        <br />
        <p><span>Projects </span>Section</p>
      </h2>

      <div className='app__work-filter'>
        {['All'].map((item, index) => (
          <div
            key={index}
            className={`app__work-filter-item app__flex a-text`}
          >

            {item}

          </div>
        ))}
      </div>

      <motion.div
        // animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {/* {filterWork.map((work, index) => ( */}
        <div className='app__work-item app__flex'>
          <div className='app__work-img app__flex'>
            <img src={images.qunt} alt={"quantumx"} />


            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', delayChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              <a href={"https://haripriya2002145.github.io/QuantumX/"} target="_blank" rel="noreferrer" >
                {/* https://github.com/Haripriya2002145/QuantumX */}
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={"https://github.com/Haripriya2002145/QuantumX"} target="_blank" rel="noreferrer" >

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>QuantumX</h4>
            <p className='p-text' style={{ marginTop: 10 }}> A Web Application using Teachable Machine to learn the first thirty elements of the Modern Periodic Table</p>
            <div className='app__work-tag app__flex'>
            </div>
          </div>

        </div>

        <div className='app__work-item app__flex'>
          <div className='app__work-img app__flex'>
            <img src={images.chart} alt={"chartview"} />


            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{ duration: 0.25, ease: 'easeInOut', delayChildren: 0.5 }}
              className="app__work-hover app__flex"
            >
              <a href={"https://offchartview.herokuapp.com/"} target="_blank" rel="noreferrer" >
                {/* https://github.com/Haripriya2002145/ChartView */}
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href={"https://github.com/Haripriya2002145/ChartView"} target="_blank" rel="noreferrer" >

                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{ duration: 0.25 }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>

          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>Chart View</h4>
            <p className='p-text' style={{ marginTop: 10 }}> A Web Application where you can see crypto graphs of top crypto currencies and details of it and a full chart of top 100 crypto currencies.
            </p>
            <div className='app__work-tag app__flex'>
            </div>
          </div>

        </div>
        {/* ))} */}
      </motion.div>
    </div>
  )
}

export default Work