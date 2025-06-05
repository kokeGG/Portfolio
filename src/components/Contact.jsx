import React from 'react'
import { motion } from 'framer-motion'
import { styles } from "../style"
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { datas } from '../constants'

const ContactCards = ({
  index,
  data,
  name,
  image,
  link
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={`bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full`}
  >
    {/* <p className='text-white font-black text-[48px]'>"</p> */}

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{data}</p>

      <div className='mt-7 flex justify-between items-center gap-1 cursor-pointer' onClick={()=>window.open(link, "_blank")}>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'></span> {name}
          </p>
        </div>

        <img
          src={image}
          className='w-10 h-10 rounded-full object-cover'
        />

      </div>
    </div>

  </motion.div>
);

const Contact = () => {
  return (
    <div className={`mt-0 bg-black-100 rounded-[20px]`}>
      <div
        className={` rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>
          <h2 className={styles.sectionHeadText}>Contact</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.padding} flex flex-wrap gap-7`}>
        {datas.map((dat, index)=>(
          <ContactCards key={dat.name} index={index} {...dat}></ContactCards>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "");