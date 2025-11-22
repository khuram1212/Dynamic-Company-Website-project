export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  content?: string; // Content can be dynamically generated
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}