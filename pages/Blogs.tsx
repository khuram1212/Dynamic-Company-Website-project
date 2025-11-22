import React, { useState } from 'react';
import { Calendar, User, Sparkles, X, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { BlogPost } from '../types';
import { generateBlogContent } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Enterprise',
    excerpt: 'How Large Language Models are reshaping internal workflows and customer interactions.',
    date: 'Oct 12, 2023',
    author: 'Sarah Chen',
    category: 'Technology',
    imageUrl: 'https://picsum.photos/600/400?random=10',
  },
  {
    id: '2',
    title: 'Optimizing React 18 Performance',
    excerpt: 'Deep dive into concurrency features and how to use them effectively.',
    date: 'Oct 08, 2023',
    author: 'Mike Ross',
    category: 'Development',
    imageUrl: 'https://picsum.photos/600/400?random=11',
  },
  {
    id: '3',
    title: 'Sustainable Cloud Architecture',
    excerpt: 'Building green software: Reducing carbon footprint through server optimization.',
    date: 'Sep 28, 2023',
    author: 'Jessica Pearson',
    category: 'Cloud',
    imageUrl: 'https://picsum.photos/600/400?random=12',
  },
];

const Blogs: React.FC = () => {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const openPost = async (post: BlogPost) => {
    setReadingPost(post);
    setLoading(true);
    setContent(''); 
    
    const generated = await generateBlogContent(post.title);
    setContent(generated);
    setLoading(false);
  };

  const closePost = () => {
    setReadingPost(null);
    setContent('');
  };

  return (
    <PageTransition>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-semibold tracking-wide uppercase text-sm bg-brand-50 px-3 py-1 rounded-full">
                Thought Leadership
            </span>
            <h2 className="mt-4 text-4xl font-display font-bold text-slate-900 sm:text-5xl">
              Latest Insights
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Expert perspectives on technology, business, and innovation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 group">
                <div className="flex-shrink-0 relative overflow-hidden h-56">
                  <img 
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    src={post.imageUrl} 
                    alt={post.title} 
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                     </span>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <h3 className="text-xl font-bold text-slate-900 font-display leading-snug group-hover:text-brand-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-base text-slate-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="sr-only">{post.author}</span>
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-bold text-xs">
                                {post.author.charAt(0)}
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-slate-900">{post.author}</p>
                            <div className="flex space-x-1 text-xs text-slate-400">
                                <time dateTime={post.date}>{post.date}</time>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={() => openPost(post)}
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                        Read with AI <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Screen Blog Modal */}
        <AnimatePresence>
          {readingPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            >
              <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={closePost}></div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 flex justify-between items-start bg-white sticky top-0 z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                             <span className="inline-flex items-center gap-1 py-1 px-2 rounded bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wide border border-purple-100">
                                <Sparkles className="h-3 w-3" /> AI Generated Content
                            </span>
                            <span className="text-slate-400 text-xs">•</span>
                            <span className="text-slate-500 text-xs font-medium">{readingPost.category}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight">{readingPost.title}</h2>
                    </div>
                    <button onClick={closePost} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-8 overflow-y-auto custom-scrollbar">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 space-y-6">
                            <div className="relative">
                                <div className="w-16 h-16 border-4 border-slate-100 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-16 h-16 border-4 border-brand-600 rounded-full border-t-transparent animate-spin"></div>
                            </div>
                            <div className="text-center">
                                <p className="text-slate-900 font-medium">Generating Article...</p>
                                <p className="text-slate-500 text-sm mt-1">Gemini AI is researching and writing content for you.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="prose prose-slate prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Blogs;