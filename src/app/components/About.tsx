import Image from "next/image";
import Pic1 from "../../public/images/car1-hZQ2D7_f.png";

export default function About() {
  return (
    <div className="dark:bg-black dark:text-white bg-slate-100 duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <Image
              src={Pic1}
              alt="Pic"
              className="sm:scale-105 sm-translate-x-11 max-h-[450px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 sm:p-14 pb-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-Josefin"
            >
              About Us
            </h1>
            <p data-aos="fade-up" className="font-Afacad">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              voluptates itaque quos dolorum totam
            </p>

            <p data-aos="fade-up" className="font-Afacad">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            </p>
            <button data-aos="fade-up" className="btn-outline">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
