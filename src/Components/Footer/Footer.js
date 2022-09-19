import style from "./Footer.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={style.root}>
      <div>
        <a
          className={style.networks}
          href="https://github.com/lbenjaminq"
          target={"blank"}
        >
          <AiFillGithub />
        </a>
        <a
          className={style.networks}
          href="https://www.linkedin.com/in/leandro-quiroga/"
          target={"blank"}
        >
          <AiFillLinkedin />
        </a>
      </div>
      <ul className={style.content}>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <span className={style.service}>Service Code</span>
      <span>
        @2001-2022 Leandro Benjamin Quiroga - Portfolio:
        <a
          href="https://portfolio-lbenjaminq.vercel.app/"
          style={{ textDecoration: "none", color: "#c3c3c3" }}
          target="blank"
        >
          {" "}
          https://portfolio-lbenjaminq.vercel.app/
        </a>
      </span>
    </div>
  );
};

export default Footer;
