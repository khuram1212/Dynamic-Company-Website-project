import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-slate-500">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-primary-700 rounded-2xl p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary-200 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Phone</p>
                    <p className="text-primary-100">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary-200 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Email</p>
                    <p className="text-primary-100">hello@novacorp.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary-200 mt-1" />
                  <div>
                    <p className="font-medium text-lg">Office</p>
                    <p className="text-primary-100">
                      123 Innovation Blvd,<br />
                      Tech District, CA 94000
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="w-full h-48 bg-primary-800 rounded-lg opacity-50 flex items-center justify-center">
                    <span className="text-primary-200 text-sm">[ Map Placeholder ]</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary-600 font-medium hover:text-primary-700 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm px-4 py-2 border"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;