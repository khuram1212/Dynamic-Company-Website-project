import React, { useState } from 'react';
import { MapPin, Clock, Briefcase, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { Job } from '../types';
import { generateJobDescription } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const jobs: Job[] = [
  { id: '1', title: 'Senior React Engineer', department: 'Engineering', location: 'San Francisco, CA', type: 'Full-time' },
  { id: '2', title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Contract' },
  { id: '3', title: 'DevOps Specialist', department: 'Operations', location: 'New York, NY', type: 'Full-time' },
  { id: '4', title: 'Marketing Manager', department: 'Marketing', location: 'London, UK', type: 'Full-time' },
];

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleGeneratePreview = async (jobId: string, title: string) => {
    if (selectedJob === jobId) {
        setSelectedJob(null);
        return;
    }
    setSelectedJob(jobId);
    setLoading(true);
    setAiDescription('');
    const desc = await generateJobDescription(title);
    setAiDescription(desc);
    setLoading(false);
  };

  return (
    <PageTransition>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Join the <span className="text-brand-600">NovaCorp</span> Team
            </h2>
            <p className="text-xl text-slate-500">
              We're looking for passionate individuals to help build the future of enterprise tech.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className={`bg-white border rounded-xl transition-all duration-300 overflow-hidden ${selectedJob === job.id ? 'border-brand-500 ring-1 ring-brand-500 shadow-md' : 'border-slate-200 hover:border-slate-300 shadow-sm'}`}>
                <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between sm:justify-start gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-900 font-display">{job.title}</h3>
                        <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full font-semibold uppercase tracking-wider">
                            {job.department}
                        </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="flex-shrink-0 mr-1.5 h-4 w-4" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button 
                        onClick={() => handleGeneratePreview(job.id, job.title)}
                        className={`group flex items-center gap-2 px-5 py-2.5 border text-sm font-medium rounded-lg transition-all ${
                            selectedJob === job.id 
                            ? 'bg-brand-50 text-brand-700 border-brand-200' 
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                        <Sparkles className={`h-4 w-4 ${selectedJob === job.id ? 'text-brand-500' : 'text-slate-400 group-hover:text-brand-500'}`} />
                        {selectedJob === job.id ? 'Close Details' : 'AI Role Preview'}
                        {selectedJob === job.id ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
                    </button>
                  </div>
                </div>
                
                <AnimatePresence>
                    {selectedJob === job.id && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-slate-50 border-t border-slate-100"
                        >
                            <div className="p-6 sm:p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center">
                                        <Sparkles className="h-3 w-3 text-brand-600" />
                                    </div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                                        Gemini Generated Overview
                                    </h4>
                                    {loading && <span className="text-xs text-slate-400 animate-pulse">Generating...</span>}
                                </div>
                                
                                {loading ? (
                                    <div className="space-y-3 animate-pulse">
                                        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-slate-200 rounded w-full"></div>
                                        <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                                    </div>
                                ) : (
                                    <div className="prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed whitespace-pre-line">
                                        {aiDescription}
                                    </div>
                                )}
                                
                                {!loading && (
                                    <div className="mt-6 pt-6 border-t border-slate-200 flex justify-end">
                                        <button className="bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                            Apply for this Role
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Jobs;