import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="h-[auto] min-h-[100vh] max-w-7xl my-0 mx-auto py-8 px-8 md:px-0 flex items-start flex-col justify-evenly"
    >
      <div className="flex flex-col gap-4 items-start justify-start">
        <h3 className="m-0 text-3xl font-bold">
          Sobre a Saga<span className="text-orange-500">sys</span>
        </h3>
        <div className="bg-orange-500 md:max-w-[45%] h-1 w-full"></div>
      </div>
      <div className="w-full flex justify-between">
        <div className="my-4 md:max-w-[50%] w-full">
          <p>
            Fundada com o propósito de inovar e transformar o mercado, a Sagasys
            é uma empresa comprometida com a excelência e a entrega de soluções
            de alta qualidade. Com uma equipe dedicada e expertise em diversas
            áreas, desde tecnologia da informação até consultoria estratégica,
            buscamos constantemente superar as expectativas de nossos clientes.
          </p>
          <p className="my-2">
            Nossa visão vai além de simplesmente fornecer serviços; aspiramos a
            ser parceiros de negócios, entendendo as necessidades específicas de
            cada cliente e oferecendo soluções personalizadas que impulsionam o
            crescimento e a eficiência operacional.
          </p>
          <p className="my-2">
            Na Sagasys, acreditamos que o sucesso é construído através da
            inovação contínua, da integridade em todas as nossas ações e do
            compromisso inabalável com a satisfação do cliente. Estamos sempre
            em busca de desafios e oportunidades para criar um impacto positivo
            no mercado e na sociedade.
          </p>
          <p className="my-2">
            Junte-se a nós nesta jornada de transformação e descubra o que a
            Sagasys pode fazer por você e pelo seu negócio.
          </p>
          <p className="my-2">Seja bem-vindo à nossa história!</p>
        </div>
        <div className="max-w-[50%] hidden md:block">
          <Image
            src="/assets/images/dev-image-about.svg"
            alt="Imagem ilustrativa de dev"
            width={500}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
