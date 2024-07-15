import React from "react";
import { FaFigma } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";


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
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li className="">
            <FaFigma
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">Figma</p>
          </li>
          <li className="">
            <FaHtml5
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">HTML</p>
          </li>
          <li className="">
            <IoLogoCss3
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">CSS</p>
          </li>

          <li className="">
            <IoLogoJavascript
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">JavaScript</p>
          </li>

          <li className="flex flex-col items-center">
            <RiTailwindCssFill
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">TailWind CSS</p>
          </li>
          <li>
            <li className="flex flex-col items-center">
              <FaReact
                style={{
                  fontSize: "3rem",
                  color: "#fff",
                  marginTop: "1rem",
                }}
              />
              <p className="mt-2 text-white text-center">React</p>
            </li>
          </li>
          <li className="flex flex-col items-center">
            <TbBrandReactNative
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">React Native</p>
          </li>
          <li className="flex flex-col items-center">
            <IoLogoFirebase
              style={{
                fontSize: "3rem",
                color: "#fff",
                marginTop: "1rem",
              }}
            />
            <p className="mt-2 text-white text-center">FireBase</p>
          </li>
        </ul>
        
      </div>
    </>
  );
}

export default ScrollingIcons;
