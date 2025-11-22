import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Shield, Cpu, Database, Server } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import Marquee from '../components/Marquee';
import { ThreeDCard } from '../components/ThreeDCard';

const Home: React.FC = () => {
  // Tech stack for marquee - explicitly including GSAP and Backend technologies
  const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", 
    "Node.js", "Express.js", "MongoDB", "GSAP", "Magic UI", "Shadcn", 
    "HTML5", "CSS3", "Git", "GitHub", "Gemini AI"
  ];

  return (
    <PageTransition>
      {/* Hero Section with Dot Pattern Background */}
      <section className="relative bg-white overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Magic UI Style Dot Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(14,165,233,0.15),transparent)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 shadow-sm mb-8 hover:bg-slate-50 transition-colors cursor-default"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              NovaCorp Platform v2.0 is live
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-purple-600 to-brand-600 animate-gradient-x">Future</span> of <br className="hidden sm:block" />
              Digital Enterprise
            </h1>
            
            <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto">
              We engineer high-performance web applications using <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. A full-stack approach tailored for scalability and growth.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Start Project
              </Link>
              <Link to="/services" className="group text-sm font-semibold leading-6 text-slate-900 flex items-center gap-1 hover:text-brand-600 transition-colors">
                Explore Stack <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50 overflow-hidden">
        <div className="mb-2 text-center">
            <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">Powered By</span>
        </div>
        <Marquee pauseOnHover repeat={4} duration="40s">
            {techStack.map((tech, index) => (
              <span key={index} className="mx-8 text-xl sm:text-2xl font-display font-bold text-slate-300 hover:text-brand-600 transition-colors cursor-default uppercase tracking-widest flex items-center gap-2">
                {tech === "MongoDB" && <Database className="h-5 w-5" />}
                {tech === "Node.js" && <Server className="h-5 w-5" />}
                {tech}
              </span>
            ))}
        </Marquee>
        <div className="mt-4">
             <Marquee pauseOnHover reverse repeat={4} duration="40s">
                {techStack.map((tech, index) => (
                <span key={index} className="mx-8 text-xl sm:text-2xl font-display font-bold text-slate-300 hover:text-purple-600 transition-colors cursor-default uppercase tracking-widest">
                    {tech}
                </span>
                ))}
            </Marquee>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 font-semibold tracking-wide uppercase text-sm">Why NovaCorp</h2>
            <p className="mt-2 text-4xl font-display font-bold text-slate-900">
              Engineered for Excellence
            </p>
            <p className="mt-4 text-lg text-slate-500">
              Our architecture combines speed, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
            {/* Card 1 - Large */}
            <div className="md:col-span-2 rounded-3xl">
                <ThreeDCard>
                    <div className="h-full bg-slate-50 rounded-3xl border border-slate-100 p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                        <div className="z-10" style={{ transform: "translateZ(40px)" }}>
                            <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                            <Zap className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Lightning Fast Performance</h3>
                            <p className="text-slate-500 max-w-md">Built on Next.js and React 18+. Optimized for Core Web Vitals with server-side rendering capabilities.</p>
                        </div>
                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-50 to-transparent rounded-tl-full opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
                        {/* Abstract UI representation */}
                        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block transition-transform duration-500 group-hover:-translate-y-[60%]" style={{ transform: "translateZ(20px) rotate(-6deg)" }}>
                            <div className="bg-white p-4 rounded-xl shadow-xl border border-slate-100 w-64 backdrop-blur-sm bg-white/90">
                                <div className="flex gap-2 mb-4">
                                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                                    <div className="h-2 bg-slate-100 rounded w-full"></div>
                                    <div className="h-8 bg-blue-50 rounded w-full border border-blue-100"></div>
                                    <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
              </ThreeDCard>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl">
                <ThreeDCard>
                    <div className="h-full bg-slate-950 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden text-white shadow-xl border border-slate-800">
                        <div className="z-10" style={{ transform: "translateZ(30px)" }}>
                            <div className="h-12 w-12 bg-slate-800 rounded-xl flex items-center justify-center text-white mb-4 border border-slate-700">
                            <Shield className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Enterprise Security</h3>
                            <p className="text-slate-400 text-sm">Bank-grade encryption, MongoDB shielding, and automated security audits.</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent"></div>
                    </div>
                </ThreeDCard>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl">
                <ThreeDCard>
                    <div className="h-full bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden hover:border-purple-200 transition-colors shadow-sm hover:shadow-lg group">
                        <div className="z-10" style={{ transform: "translateZ(30px)" }}>
                            <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                            <Cpu className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Integrated</h3>
                            <p className="text-slate-500 text-sm">Leverage Gemini and LLMs to automate workflows.</p>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                </ThreeDCard>
            </div>

            {/* Card 4 - Large */}
            <div className="md:col-span-2 rounded-3xl">
                <ThreeDCard>
                    <div className="h-full bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg">
                        <div className="z-10 relative" style={{ transform: "translateZ(40px)" }}>
                            <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                            <Globe className="h-6 w-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Global Infrastructure</h3>
                            <p className="text-slate-500 max-w-md">Deployed on the edge. Your application scales automatically to meet demand from users anywhere in the world.</p>
                        </div>
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    </div>
                </ThreeDCard>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
             <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-display font-bold mb-6">Ready to scale with Modern Tech?</h2>
            <p className="text-xl text-slate-300 mb-10">Join innovative companies building the future with NovaCorp's full-stack solutions.</p>
            <Link to="/contact">
                <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-brand-50 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200">
                    Get a Free Consultation
                </button>
            </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;