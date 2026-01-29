import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog - Vijay Paderthi',
  description: 'Insights on writing, creativity, and storytelling. Join author Vijay Paderthi as he shares thoughts on literature, the writing process, and the art of storytelling.',
};

export default function BlogPage() {
  return <BlogClient />;
}