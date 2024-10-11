import Image from "next/image";
import Pic from "../../public/images/ba6YIyVFCBKJIF6bWQUBPqfdYTDMhKKjdRh1dNzXt7k22UxJA.jpg";

const TestimonialData = [
  {
    name: "Usama Ali",
    image: "",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Umar Farooq",
    image: "",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Umair Javaid",
    image: "",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    aosDelay: "1000",
  },
];

export default function Testimonials() {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl font-Josefin"
          >
            What our clients say about us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            nisi hic blanditiis consequuntur corrupti?
          </p>
        </div>
        {/* card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {TestimonialData.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.name}
                className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <Image
                    src={Pic}
                    alt="Pic"
                    className="h-20 w-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
