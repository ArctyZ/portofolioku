import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import gambar from "../assets/gambar.jpg";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div id="home">
      <img className="w-full h-screen object-cover" src={gambar} alt="" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:item-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-grey-800">
            Aku Haris
          </h1>
          <h2 className="flex sm:text-3xl text-2xl text-grey-800">
            aku adalah seorang
            <TypeAnimation
              sequence={["Coder", 1000, "Developer", 1000]}
              wrapper="span"
              speed={40}
              style={{ fontSize: "1em", display: "block", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex flex-row p-1 gap-2">
            <a href="https://x.com/haris_brj" target="_blank">
              <FaXTwitter size={30} className="cursor-pointer" />
            </a>
            <a href="https://github.com/ArctyZ" target="_blank">
              <FaGithub size={30} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/harisbaraja/" target="_blank">
              <FaInstagram size={30} className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-harits-b01b91218/"
              target="_blank"
            >
              <FaLinkedin size={30} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
