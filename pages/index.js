import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="links__container">
      <div className="article__link">
        <img
          src="/brain.png"
          className="--link__image"
          alt="human head sculpture"
        />
        <Link href="/whatishappening">
          <a className="article__link__title">
            How I Learned To Love The Atom.
          </a>
        </Link>
        <div className="--date">September 10, 2020</div>
      </div>
      <div className="article__link">
        <img src="/books.png" className="--link__image" alt="stack of books" />
        <Link href="/needtoknow">
          <a className="article__link__title">React: Required Materials.</a>
        </Link>
        <div className="--date">September 14, 2020</div>
      </div>
      <div className="article__link">
        <img
          src="/money.png"
          className="--link__image"
          alt="human head sculpture"
        />
        <Link href="/transformation">
          <a className="article__link__title">Cost Demystified.</a>
        </Link>
        <div className="--date">September 22, 2020</div>
      </div>
    </div>
  );
};

export default HomePage;
