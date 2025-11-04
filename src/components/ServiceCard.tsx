import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export function ServiceCard({ icon: Icon, title, description, color }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all border border-gray-100 hover:border-gray-200 hover:-translate-y-1 group h-full flex flex-col">
      <div 
        className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon size={32} strokeWidth={2.5} style={{ color }} />
      </div>
      <h3 className="text-2xl mb-3 group-hover:text-[#1a7b7d] transition-colors">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
