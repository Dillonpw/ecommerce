import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="mt-40 flex items-center justify-center bg-slate-800 text-white p-20 text-center text-sm ">
      <p>
        Created by Dillonpw{" "}
        <a target="blank_" href="https://github.com/Dillonpw">
          <FontAwesomeIcon sr-only='Github Link' icon={faGithub} />
        </a>
        <br /> &copy;2024 All Rights Reserved
      </p>
    </footer>
  );
};
export default Footer;
