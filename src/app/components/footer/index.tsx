import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="shadow md:h-[70px] bg-white flex items-center justify-center py-4 px-2 md:px-0 md:py-0">
      <div className="max-w-7xl flex items-center justify-between w-full flex-col-reverse gap-4 md:flex-row">
        <div>
          <span>©Copyright 2024 SagaSys. Todos os direitos reservados</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="#"
            className="group rounded border border-orange-500 py-2 px-2 hover:bg-orange-500 transition-all ease-in duration-150"
          >
            <Facebook
              fill="#000"
              strokeWidth={0}
              className="group-hover:fill-white transition-all ease-in duration-150 "
            />
          </Link>
          <Link
            href="#"
            className="group rounded border border-orange-500 py-2 px-2 hover:bg-orange-500 transition-all ease-in duration-150"
          >
            <Twitter
              fill="#000"
              strokeWidth={0}
              className="group-hover:fill-white transition-all ease-in duration-150 "
            />
          </Link>
          <Link
            href="#"
            className="group rounded border border-orange-500 py-2 px-2 hover:bg-orange-500 transition-all ease-in duration-150"
          >
            <Linkedin
              fill="#000"
              strokeWidth={0}
              className="group-hover:fill-white transition-all ease-in duration-150 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
