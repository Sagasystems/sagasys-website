import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function MainContent() {
  return (
    <div className="relative w-full min-h-[100vh] h-[100vh] overflow-hidden flex items-center justify-center">
      <div className="absolute z-[3] w-full h-full flex items-center justify-center max-w-7xl">
        <div className="flex-col items-center justify-center text-center">
          <p className="text-white text-2xl my-2">Bem-vindo a</p>
          <h1 className="text-8xl text-white my-1 mb-4 font-medium">
            Saga<span className="text-orange-500">sys</span>
          </h1>
          <p className="text-white text-2xl mt-10">
            Seja bem-vindo à nossa plataforma de inovação e descoberta digital.{" "}
          </p>
          <p className="text-white text-2xl my-1 mt-2">
            Juntos, transformamos ideias em realidade.
          </p>
        </div>
      </div>
      <a
        href="#"
        className="rounded absolute mx-auto z-[3] bottom-[130px] bg-white py-4 px-4 hover:bg-orange-500 hover:text-white hover:scale-300 transition-all ease-in-out duration-200 flex items-center justify-center gap-x-2 text-xl"
      >
        Saiba mais
        <ChevronDown width={24} height={24} />
      </a>
      <div className="z-[2] bg-black w-full h-full backdrop-blur-sm absolute opacity-60"></div>
      <Image
        alt="Imagem de background"
        src="/assets/images/main-bg-img.jpg"
        fill
        className="absolute z-[1]"
        objectFit="cover"
      />
    </div>
  );
}
