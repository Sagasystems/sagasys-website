import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <div
      className="h-[auto] min-h-[75vh] max-w-7xl my-0 mx-auto p-8 md:px-0 flex items-start flex-col justify-evenly gap-8"
      id="projects"
    >
      <div className="flex flex-col gap-4 items-start justify-end md:mb-0">
        <h3 className="m-0 text-3xl font-bold">Portfólio</h3>
        <div className="bg-orange-500 md:max-w-[45%] h-1 w-full"></div>
      </div>
      <div className="flex flex-wrap w-full gap-8">
        <ProjectCard
          imageSrc="/assets/images/projects/marianafestas.jpg"
          project="Mariana Festas"
          description="Criação de uma landing page para uma empresa de promoção de eventos infantis. Prospecção de clientes e redirecionamento do cliente para o whatsapp. Fotos e cadastramento de clientes."
          dataWork="Maio 2023"
        />
        <ProjectCard
          imageSrc="/assets/images/projects/tomdehumor.png"
          project="Tom de Humor"
          description="Criação de um blog para divulgação de eventos, shows e muito mais."
          dataWork="Julho 2023"
        />
        <ProjectCard
          imageSrc="/assets/images/projects/taskrush.png"
          project="TaskRush"
          description="Software para controle de demandas, equipes e cálculo de HH dos funcionários, de acordo com as regras de clientes e projetos."
          dataWork="Novembro 2023"
        />
        <ProjectCard
          imageSrc="/assets/images/projects/holder.png"
          project="Holder+"
          description="Criação de software para acompanhar seus investimentos globais e ativos patrimoniais em um único lugar, com o auxílio de várias ferramentas inéditas."
          dataWork="Outubro 2023"
        />
        <ProjectCard
          imageSrc="/assets/images/projects/atenderdigital.png"
          project="AtenderDigital"
          description="Criação de software para centralizar os atendimentos e melhorar a experiência do cliente com uma única plataforma! Integrações com telêfonia, Whatsapp, Facebook, Instagram, E-mail e SMS."
          dataWork="Setembro 2023"
        />
      </div>
    </div>
  );
}
