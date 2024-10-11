import { GiMoneyStack } from "react-icons/gi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaPersonCircleCheck } from "react-icons/fa6";
const skillsData = [
  {
    name: "Best Price",
    icon: (
      <GiMoneyStack className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, dignissimos.",
    aosDelay: "0",
  },
  {
    name: "Fast & Safe",
    icon: (
      <AiOutlineSafetyCertificate className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, dignissimos.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: (
      <FaPersonCircleCheck className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, dignissimos.",
    aosDelay: "1000",
  },
];

export default function Services() {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-Josefin sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p>{skill.description}</p>
              <a href={skill.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
