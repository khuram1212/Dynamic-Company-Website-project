import React from 'react';
import PageTransition from '../components/PageTransition';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Who We Are</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Innovating for a better tomorrow
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              NovaCorp was founded with a single mission: to bridge the gap between complex technology and business utility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
               <img 
                src="https://picsum.photos/800/800?random=2" 
                alt="Office meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-lg text-slate-600">
                We believe that technology should be an enabler, not a hurdle. Our team of expert engineers and designers work tirelessly to create seamless experiences that drive growth and efficiency.
              </p>
              
              <h3 className="text-2xl font-bold text-slate-900 mt-8">Our Vision</h3>
              <p className="text-lg text-slate-600">
                To become the global standard for enterprise web solutions, fostering a community where innovation thrives and businesses succeed through digital transformation.
              </p>

              <div className="pt-6">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-3xl font-extrabold text-primary-600">10+</p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-primary-600">500+</p>
                    <p className="text-sm text-slate-500">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-primary-600">50+</p>
                    <p className="text-sm text-slate-500">Team Members</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-primary-600">24/7</p>
                    <p className="text-sm text-slate-500">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            {/* Tech Stack Section */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Our Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-bold text-brand-600 mb-4">Frontend</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li>Next.js / React</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5 / CSS3</li>
                    </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-bold text-brand-600 mb-4">Backend & DB</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>REST APIs</li>
                    </ul>
                </div>
                 <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-bold text-brand-600 mb-4">Libraries & UI</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li>Framer Motion</li>
                        <li>GSAP</li>
                        <li>Magic UI</li>
                        <li>Shadcn</li>
                    </ul>
                </div>
                 <div className="bg-slate-50 p-6 rounded-xl">
                    <h4 className="font-bold text-brand-600 mb-4">Tools</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                        <li>Git / GitHub</li>
                        <li>VS Code</li>
                        <li>Gemini AI</li>
                        <li>Vercel</li>
                    </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;