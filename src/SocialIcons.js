import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

const SocialIcons = () => {
  return (
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/joshcdnelson/">
          <FaLinkedinIn size="2em" />
        </a>
      </li>
      <li>
        <a href="https://github.com/JoshCNelson">
          <FaGithub size="2em" />
        </a>
      </li>
      <li>
        <a href="mailto:joshcdnelson@gmail.com">
          <MdEmail size="2em" />
        </a>
      </li>
      <li>
        <a href="./resume.pdf" target="_blank">
          <TiDocumentText size="2em" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
