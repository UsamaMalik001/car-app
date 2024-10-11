import Image from "next/image";
import bgPic from "../../public/images/pattern-yB80x_mq.jpeg";
import PlaystoreImg from "../../public/images/play_store-25MAnoNl.png";
import ApplestoreImg from "../../public/images/app_store-aoAyJ2T_.png";
const bannerImg = {
  backgroundImage: `url(${bgPic.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100%",
  width: "100%",
};

export default function AppStoreBanner() {
  return (
    <div className="conatiner pb-14 bg-white dark:bg-black dark:text-white">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={bannerImg}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center sm:text-4xl font-bold font-Afacad"
            >
              Get started with our app
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
              perspiciatis.
            </p>
            <div
              data-aos="fade-up"
              className="flex justify-center flex-wrap items-center gap-4"
            >
              <a
                target="__blank"
                href="https://play.google.com/store/games?hl=en"
              >
                <Image
                  src={PlaystoreImg}
                  alt="playstore"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a target="__blank" href="https://www.apple.com/app-store/">
                <Image
                  src={ApplestoreImg}
                  alt="applestore"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
