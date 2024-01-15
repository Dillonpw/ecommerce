import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="flex w-[100vw] items-center justify-center bg-slate-800 p-20 text-center text-sm text-white ">
      <p>
        Created by Dillonpw{" "}
        <a target="blank_" href="https://github.com/Dillonpw">
          <FontAwesomeIcon aria-label="Github Link" icon={faGithub} />
        </a>
        <br /> &copy;2024 All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
