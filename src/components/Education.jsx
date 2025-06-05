import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { education } from "../constants";

const EducationCard = ({ index, data, name, image, link }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl w-full"
  >
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{name}</p>
      <p className="text-white tracking-wider text-[18px]">{data}</p>

      <div
        className="mt-7 flex flex-col items-center gap-4 cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={image}
          className="w-40 h-40 rounded-full object-cover border-4 border-white"
        />
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-0 bg-black-100 rounded-[20px]">
      <div className={`rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.padding} flex flex-col gap-7`}>
        {education.map((item, index) => (
          <EducationCard key={item.name} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");
