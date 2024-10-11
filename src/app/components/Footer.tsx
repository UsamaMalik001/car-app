import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
export default function Footer() {
  return (
    <div className="bg-gray-100 dark:bg-dark dark:text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4">
            <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center">
              Car Rental
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              facere.
            </p>
            <br />
            <div className="flex items-center gap-3 mb-2">
              <FaLocationArrow />
              <p>Toba Tek Singh, Pakistan</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+92 123 4567890</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a
                target="__blank"
                href="https://www.facebook.com/profile.php?id=61561160390680"
              >
                <FaFacebook className="text-3xl hover:text-primary duration-300" />
              </a>
              <a target="__blank" href="https://www.instagram.com/usamaa822/">
                <FaInstagram className="text-3xl hover:text-primary duration-300" />
              </a>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/usama-ali-39b7b2331/"
              >
                <FaLinkedin className="text-3xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        <span>&#11162; </span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        <span>&#11162; </span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Locations
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((data) => {
                    return (
                      <li
                        key={data.title}
                        className="cursor-pointer hover:text-primary duration-300"
                      >
                        <span>&#11162; </span>
                        <a href={data.link}>{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
