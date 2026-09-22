import React from 'react';
import { 
  Layers, 
  Cpu, 
  Boxes, 
  Sprout, 
  GraduationCap, 
  CloudLightning, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Cpu: Cpu,
  Boxes: Boxes,
  Sprout: Sprout,
  GraduationCap: GraduationCap,
  CloudLightning: CloudLightning
};

const ServiceCard = ({ service, onSelect }) => {
  const IconComponent = iconMap[service.iconName] || Layers;

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-300">
      <div>
        {/* Card Header & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/40 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-brand-cyan">
            Domain
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors mb-3">
          {service.title}
        </h3>
        
        <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-5">
          {service.shortDesc}
        </p>

        {/* Sub-Offerings Snapshot */}
        <div className="space-y-2 mb-6">
          {service.subOfferings.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 light:border-slate-200 mb-5">
          {service.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900 light:bg-slate-200/70 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400">
              +{service.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Learn More Action Button */}
        <button
          onClick={() => onSelect(service)}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 light:bg-slate-100 hover:bg-brand-cyan/15 light:hover:bg-brand-blue/10 border border-slate-700 light:border-slate-300 hover:border-brand-cyan/50 text-slate-200 light:text-slate-800 hover:text-brand-cyan light:hover:text-brand-blue text-xs font-semibold flex items-center justify-center gap-2 transition-all group-hover:shadow-md"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

