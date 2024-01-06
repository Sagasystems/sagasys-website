"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { handleScrollTo } from "@/app/lib/functions";

export default function MenuNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    const menuIcon = document.querySelector(".menuIcon") as SVGElement;
    const closeMenuIcon = document.querySelector(
      ".closeMenuIcon"
    ) as SVGElement;
    const menuWrapper = document.querySelector(
      ".menu-wrapper"
    ) as HTMLUListElement;

    if (!isMenuOpen) {
      menuIcon.style.display = "none";
      closeMenuIcon.style.display = "block";
      menuWrapper.classList.add("top-[70px]", "opacity-100");
      setIsMenuOpen(!isMenuOpen);
    } else {
      closeMenuIcon.style.display = "none";
      menuIcon.style.display = "block";
      menuWrapper.classList.remove("top-[70px]", "opacity-100");
      setIsMenuOpen(!isMenuOpen);
    }
  }

  return (
    <div className="shadow">
      <nav className="h-[70px] z-[10] p-5 bg-white max-w-7xl my-0 mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <span className="color-black">Logo</span>
          <span className="color-black text-3xl cursor-pointer mx-2 md:hidden block">
            <Menu onClick={handleMenu} className="menuIcon" />
            <X onClick={handleMenu} className="closeMenuIcon hidden" />
          </span>
        </div>
        <ul className="menu-wrapper md:flex md:items-center z-[9] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li className="mx-0 my-4 md:my-0 md:mx-4">
            <a
              href="#"
              className="text-x1 hover:text-orange-500 duration-500 cursor-pointer"
            >
              Início
            </a>
          </li>
          <li className="mx-0 my-4 md:my-0 md:mx-4">
            <a
              className="text-x1 hover:text-orange-500 duration-500 cursor-pointer"
              onClick={() => handleScrollTo("about")}
            >
              Sobre
            </a>
          </li>
          <li className="mx-0 my-4 md:my-0 md:mx-4">
            <a
              className="text-x1 hover:text-orange-500 duration-500 cursor-pointer"
              onClick={() => handleScrollTo("servicing")}
            >
              Serviços
            </a>
          </li>
          {/* <li className="mx-0 my-4 md:my-0 md:mx-4">
            <a href="#" className="text-x1 hover:text-orange-500 duration-500">
              Portfólio
            </a>
          </li> */}
          <li className="mx-0 my-4 md:my-0 md:mx-4">
            <a
              className="text-x1 hover:text-orange-500 duration-500 cursor-pointer"
              onClick={() => handleScrollTo("contact")}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
