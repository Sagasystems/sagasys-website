import Image from "next/image";

interface projectCardProps {
  imageSrc: string;
  project: string;
  description: string;
  dataWork: string;
}

export default function ProjectCard({
  imageSrc,
  project,
  description,
  dataWork,
}: projectCardProps) {
  return (
    <div className="rounded-lg w-full flex flex-row md:basis-1/3 basis-full md:flex-col md:w-[324px] md:h-[400px] shadow-md hover:scale-105 transition-all ease-in-out duration-100 overflow-hidden bg-gray-100">
      <div className="relative md:w-full w-[400px] max-w-[90px] md:max-w-full md:h-[170px] h-auto">
        <Image
          src={imageSrc}
          alt={"Imagem do projeto " + project}
          fill
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="md:w-full md:w-max-[276px] w-max-[198px] p-4">
        <p className="text-lg font-bold mb-4">{project}</p>
        <p className="text-sm mb-8 text-gray-700 min-h-[100px]">
          {description}
        </p>
        <p className="text-xs  text-gray-500">{dataWork}</p>
      </div>
    </div>
  );
}
