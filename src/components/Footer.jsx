import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={""}
          alt="Founder"
        />

        <h2>Bilal Butt</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.facebook.com/profile.php?id=100081802133117" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://instagram.com/meabhisingh" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/webcoder42?tab=repositories" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
