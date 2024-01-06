import { LucideIcon } from "lucide-react";

interface serviceCardProps {
  Icon: LucideIcon;
  children: React.ReactNode;
  description: string;
}

export default function ServicingCard({
  Icon,
  children,
  description,
}: serviceCardProps) {
  return (
    <div className="bg-white border-orange-400 w-[360px] h-[497px] flex flex-col gap-4 items-start justify-start border p-8 group hover:scale-105 hover:border-orange-500 rounded  transition-all ease-in-out duration-150">
      <div className="border p-4 rounded group-hover:bg-orange-500 group-hover:text-white transition-all ease-in-out duration-150">
        <Icon width={40} height={40} />
      </div>
      <h6 className="text-[20px]">{children}</h6>
      <p className="text-[14px] text-slate-700 leading-6">{description}</p>
    </div>
  );
}
