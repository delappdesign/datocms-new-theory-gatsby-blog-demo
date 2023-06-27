import React from "react";
import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
      >
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} fluid={coverImage.large} slug={slug} />
      </div>
      </motion.div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <motion.div
              initial={{y: "20%"}}
              whileInView={{y: 0}}
              transition={{duration: 1}}
            >
            <Link to={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
            </motion.div>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
      </div>
    </section>
  );
}
