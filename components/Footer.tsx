import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <h2 className="text-3xl font-bold">
            JP Multiservices
          </h2>

          <div className="flex gap-5 mt-6 text-2xl">
            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaFacebook />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <p className="text-gray-400">
            Building excellence with trust and quality.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;