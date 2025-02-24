import {
  FiGithub,
  FiHeart,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import Container from "./home/Container";

const Footer = () => {
  return (
    <footer className="mt-10 bg-slate-800 text-white">
      <Container>
        <div className="py-4 flex md:flex-row flex-col justify-between gap-4">
          <div className="md:flex md:gap-8">
            <div>
              <h2 className="text-xl font-medium pb-4">Our Company</h2>
              <div>
                <p>
                  We provide top quality electronics and <br /> gadgets for all
                  your needs. Customer <br /> satisfaction in our top priority.
                </p>
                <div className="flex items-center gap-3 py-3">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/abdulrehman0/"
                  >
                    <FiLinkedin />
                  </a>
                  <a target="_blank" href="https://github.com/AbdulRehmanGHub">
                    <FiGithub />
                  </a>
                  <a target="_blank" href="https://twitter.com/devabdulrehman">
                    <FiTwitter />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UC0U-CjmrinC6I3Gb1dOk0WA?sub_confirmation=1"
                  >
                    <FiYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium pb-4">Quick Links</h2>
              <div>
                <p>About Us</p>
                <p>Store</p>
                <p>Contact Us</p>
                <p>FAQs</p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:ps-12">
            <h2 className="text-xl font-medium pb-4">
              Subscribe to Our Newsletter
            </h2>
            <div>
              <p className="pb-2">
                Get the latest updates on products and upcoming sales.
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  className="w-1/3 px-1 py-1 rounded-l-lg outline-none text-black"
                  placeholder="Enter your email"
                />
                <button className="bg-teal-600 rounded-r-lg px-2 py-1 outline-none">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center pb-2">
          <p>
            &#169; 2025 <span className="text-teal-300">E-Dukaan.</span> All
            rights reserved.
          </p>
          <div className="flex items-center justify-center text-center gap-2">
            <span>Developed with </span>
            <span className="text-teal-300">
              {" "}
              <FiHeart />{" "}
            </span>
            <span>
              {" "}
              by{" "}
              <a
                className="text-teal-300"
                href="https://devabdulrehman.vercel.app/"
                target="_blank"
              >
                Abdul Rehman
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
