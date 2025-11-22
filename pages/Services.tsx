import React from 'react';
import { Cloud, Code, BarChart, Smartphone, Server, Shield, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Service } from '../types';
import { ThreeDCard } from '../components/ThreeDCard';

const services: Service[] = [
  { id: '1', title: 'Cloud Migration', description: 'Seamlessly move your infrastructure to AWS, Azure, or GCP with zero downtime strategies.', icon: 'cloud' },
  { id: '2', title: 'Custom Web Apps', description: 'High-performance Next.js frontends paired with scalable Node.js and MongoDB backend architectures.', icon: 'code' },
  { id: '3', title: 'Data Analytics', description: 'Transform raw data into actionable business intelligence with AI-driven dashboards.', icon: 'chart' },
  { id: '4', title: 'Mobile Development', description: 'Native and cross-platform mobile applications for iOS and Android using React Native.', icon: 'phone' },
  { id: '5', title: 'DevOps & CI/CD', description: 'Automate your deployment pipelines and improve infrastructure reliability with Docker & K8s.', icon: 'server' },
  { id: '6', title: 'Cybersecurity', description: 'Protect your digital assets with enterprise-grade security audits, pen-testing, and compliance.', icon: 'shield' },
];

const iconMap: Record<string, React.FC<any>> = {
  cloud: Cloud,
  code: Code,
  chart: BarChart,
  phone: Smartphone,
  server: Server,
  shield: Shield,
};

const Services: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-600 text-xs font-bold tracking-wide uppercase mb-4 border border-brand-100">
                Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Comprehensive Technical Services
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-slate-500 mx-auto leading-relaxed">
              From concept to deployment, we handle the heavy lifting using the modern stack (MERN/Next.js) so you can focus on your core business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <ThreeDCard key={service.id}>
                    <div className="h-full group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_0_20px_rgba(0,0,0,0.03)] hover:shadow-[0_0_30px_rgba(0,0,0,0.08)] transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    
                    <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
                        <div className="h-14 w-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                            <Icon className="h-7 w-7" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{service.title}</h3>
                        <p className="text-slate-500 leading-relaxed mb-6 flex-grow text-sm">{service.description}</p>
                        
                        <div className="flex items-center text-brand-600 font-medium group-hover:text-brand-700 mt-auto cursor-pointer">
                            <span>Learn more</span>
                            <ArrowUpRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </div>
                    </div>
                </ThreeDCard>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;