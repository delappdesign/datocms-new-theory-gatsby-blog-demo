import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";
import { motion } from "framer-motion";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
    <motion.div
      initial={{scale: 1.3}}
      whileInView={{scale: 1}}
      transition={{duration: 1}}
    >
      <PostTitle>{title}</PostTitle>
    </motion.div>
      <div className="hidden md:block md:mb-12">
        <motion.div
          initial={{x: "20%"}}
          whileInView={{x: "0%"}}
          transition={{duration: 1}}
        >
        <Avatar name={author?.name} picture={author?.picture} />
        </motion.div>
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} fluid={coverImage?.gatsbyImageData} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
