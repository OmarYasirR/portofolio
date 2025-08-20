import React from "react";
import "./about.css";
import Me from "../../assets/me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <article>
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
            <article>
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article>
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
          </div>
          <p>
            Motivated junior frontend developer with solid skills in modern web
            technologies. Built diverse projects including
            responsive sites, interactive JavaScript apps, and SPAs. Passionate
            about transforming design ideas into smooth, user-friendly
            experiences.
          </p>
          <a href="#contact" className="btn btn-praimry">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
