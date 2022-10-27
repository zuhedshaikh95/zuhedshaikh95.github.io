import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/zuhedshaikh95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/zuhedshaikh95/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://dev.to/zuhedshaikh95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDev />
        </a>
      </div>
    </div>
  );
}
