import React from "react";
import { FaFigma } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

function ScrollingIcons() {
  return (
    <>
      <div className="text-md font-bold text-white pl-40 px-10 mb-4">
        <p>Skills:</p>
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll text-[18px]"
        >
          <li className="flex flex-col items-center mx-6">
            <FaFigma
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Figma</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaHtml5
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">HTML</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <IoLogoCss3
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">CSS</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <IoLogoJavascript
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">JavaScript</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <RiTailwindCssFill
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">TailWind CSS</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaReact
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">React</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <TbBrandReactNative
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">React Native</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <IoLogoFirebase
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Firebase</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <VscVscode
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Visual Studio Code</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaGithub
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">GitHub</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaJira
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Jira</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <SiAdobeillustrator
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Adobe Illustrator</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <SiAdobephotoshop
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Adobe Photoshop</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <SiAdobepremierepro
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Adobe Premiere Pro</p>
          </li>
        </ul>
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-10 [&_img]:max-w-none animate-infinite-scroll text-[18px]"
        >
          <li className="flex flex-col items-center mx-6">
            <FaFigma
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Figma</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaHtml5
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">HTML</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <IoLogoCss3
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">CSS</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <IoLogoJavascript
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">JavaScript</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <RiTailwindCssFill
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">TailWind CSS</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaReact
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">React</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <TbBrandReactNative
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">React Native</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <IoLogoFirebase
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Firebase</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <VscVscode
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Visual Studio Code</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaGithub
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">GitHub</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <FaJira
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Jira</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <SiAdobeillustrator
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Adobe Illustrator</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <SiAdobephotoshop
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Adobe Photoshop</p>
          </li>
          <li className="flex flex-col items-center mx-6">
            <SiAdobepremierepro
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-4 text-white text-center">Adobe Premiere Pro</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ScrollingIcons;

