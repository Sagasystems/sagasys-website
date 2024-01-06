import ServicingCard from "../servicing-card";
import { Code, Paintbrush, TabletSmartphone } from "lucide-react";

export default function Servicing() {
  return (
    <div id="servicing" className="bg-slate-200 w-full h-auto">
      <div className="min-h-[700px] h-screen max-w-7xl my-0 mx-auto py-8 px-8 md:px-0 flex items-start flex-col justify-evenly gap-4 md:gap-0">
        <div className="flex flex-col gap-4 items-start justify-end">
          <h3 className="m-0 text-3xl font-bold">Serviços</h3>
          <div className="bg-orange-500 md:max-w-[45%] h-1 w-full"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-auto justify-between gap-4 md:gap-0">
          <ServicingCard
            description="Transformamos suas ideias em soluções digitais robustas e inovadoras. Nossa equipe de desenvolvedores qualificados trabalha em estreita colaboração com você para criar software personalizado que atenda às demandas específicas de seu negócio, garantindo uma experiência única e adaptada às suas necessidades."
            Icon={Code}
          >
            Desenvolvimento de Software Personalizado
          </ServicingCard>
          <ServicingCard
            description="Oferecemos design de UI que harmoniza estética e funcionalidade, criando interfaces intuitivas e visualmente atrativas. Nosso foco é melhorar a usabilidade, a acessibilidade e a satisfação do usuário, impulsionando o sucesso e o engajamento em seu projeto digital."
            Icon={Paintbrush}
          >
            UI (User Interface) Design e Desenvolvimento
          </ServicingCard>
          <ServicingCard
            description="Criamos aplicações móveis personalizadas, adaptadas às necessidades específicas de seu negócio. Com expertise em diversas plataformas, desenvolvemos soluções móveis que proporcionam uma experiência de usuário excepcional, aumentam o engajamento e impulsionam o crescimento de sua empresa no ambiente móvel"
            Icon={TabletSmartphone}
          >
            Desenvolvimento de Aplicações Móveis
          </ServicingCard>
        </div>
      </div>
    </div>
  );
}
