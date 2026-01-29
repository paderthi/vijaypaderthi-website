'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Blog - Vijay Paderthi',
  description: 'Insights on writing, creativity, and storytelling. Join author Vijay Paderthi as he shares thoughts on literature, the writing process, and the art of storytelling.',
};

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Baahubali 2 Review: One of IMDB\'s Most Regarded Analyses',
    excerpt: 'My in-depth review of Baahubali 2 became one of the most highly regarded reviews on IMDB. Here\'s what made this epic so compelling and why it resonated with global audiences.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Movie Reviews',
    tags: ['baahubali', 'movie review', 'imdb', 'indian cinema'],
    featured: true,
    imageUrl: '/blog/baahubali-review.jpg'
  },
  {
    id: '2',
    title: 'From Black and White to 8K: A Personal Journey Through Video Technology',
    excerpt: 'A technical deep-dive into the evolution of video technology from my perspective as both a software engineer and content creator. Originally published on LinkedIn.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-08',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['video technology', 'evolution', 'linkedin', 'tech history'],
    featured: true,
    imageUrl: '/blog/video-tech-evolution.jpg'
  },
  {
    id: '3',
    title: 'Mysterious Friend: The Editor\'s Choice Award-Winning Story',
    excerpt: 'My short story "Mysterious Friend" won the Editor\'s Choice Award on StoryClub. A psychological thriller about unexpected encounters and the secrets we keep.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-02',
    readTime: '5 min read',
    category: 'Short Stories',
    tags: ['mysterious friend', 'award winning', 'storyclub', 'editor choice'],
    featured: false,
    imageUrl: '/blog/mysterious-friend.jpg'
  },
  {
    id: '4',
    title: '5 Days of Indian Air Force Training: A Life-Changing Experience',
    excerpt: 'My personal account of undergoing Indian Air Force training. A real-life experience that tested physical limits and mental resilience in ways I never expected.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-28',
    readTime: '7 min read',
    category: 'Personal Experiences',
    tags: ['indian air force', 'training', 'personal growth', 'real experiences'],
    featured: false,
    imageUrl: '/blog/air-force-training.jpg'
  },
  {
    id: '5',
    title: 'Job Struggles and Career Transitions: My Professional Journey',
    excerpt: 'An honest look at the challenges, failures, and eventual successes in my career path. From engineering struggles to finding my voice as a writer.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-20',
    readTime: '9 min read',
    category: 'Career Journey',
    tags: ['job struggles', 'career change', 'professional growth', 'real life'],
    featured: false,
    imageUrl: '/blog/career-journey.jpg'
  },
  {
    id: '6',
    title: 'Behind the Scenes: Writing \'The Girl With Bleeding Teeth\'',
    excerpt: 'The story behind my psychological thriller about a village\'s collective silence. How a disturbing news story became the seed for exploring shared guilt and suppressed memory.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-15',
    readTime: '10 min read',
    category: 'Behind the Book',
    tags: ['bleeding teeth', 'writing process', 'inspiration', 'novel writing'],
    featured: false,
    imageUrl: '/blog/bleeding-teeth-behind.jpg'
  }
];

const categories = ['All Posts', 'Movie Reviews', 'Technology', 'Short Stories', 'Personal Experiences', 'Career Journey', 'Behind the Book'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  
  // Filter posts based on selected category
  const getFilteredPosts = (posts: BlogPost[]) => {
    if (selectedCategory === 'All Posts') {
      return posts;
    }
    return posts.filter(post => post.category === selectedCategory);
  };
  
  const featuredPosts = getFilteredPosts(blogPosts.filter(post => post.featured));
  const recentPosts = getFilteredPosts(blogPosts.filter(post => !post.featured));
  const allFilteredPosts = getFilteredPosts(blogPosts);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">The Writing Life</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights on storytelling, the creative process, and the books that inspire us. 
              Join me as I explore the art and craft of writing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="space-y-4">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">
                          {post.category === 'Movie Reviews' ? '🎬' :
                           post.category === 'Technology' ? '💻' :
                           post.category === 'Short Stories' ? '📖' :
                           post.category === 'Personal Experiences' ? '✈️' :
                           post.category === 'Career Journey' ? '💼' : '📝'}
                        </div>
                        <div className="text-sm font-medium text-gray-700">{post.category}</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span>•</span>
                        <time>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {selectedCategory === 'All Posts' ? 'Recent Posts' : `${selectedCategory} Posts`}
          </h2>
          {selectedCategory === 'All Posts' && recentPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">
                        {post.category === 'Movie Reviews' ? '🎬' :
                         post.category === 'Technology' ? '💻' :
                         post.category === 'Short Stories' ? '📖' :
                         post.category === 'Personal Experiences' ? '✈️' :
                         post.category === 'Career Journey' ? '💼' : '📝'}
                      </div>
                      <div className="text-xs font-medium text-gray-600">{post.category}</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>•</span>
                      <time>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
          {selectedCategory !== 'All Posts' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allFilteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">
                      {post.category === 'Movie Reviews' ? '🎬' :
                       post.category === 'Technology' ? '💻' :
                       post.category === 'Short Stories' ? '📖' :
                       post.category === 'Personal Experiences' ? '✈️' :
                       post.category === 'Career Journey' ? '💼' : '📝'}
                    </div>
                    <div className="text-xs font-medium text-gray-600">{post.category}</div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <time>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
              ))}
            </div>
          )}
          {allFilteredPosts.length === 0 && selectedCategory !== 'All Posts' && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-600">No posts available in the "{selectedCategory}" category yet.</p>
              <button
                onClick={() => setSelectedCategory('All Posts')}
                className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
              >
                View all posts →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Never Miss a Story</h2>
            <p className="text-xl text-blue-100">
              Get my latest posts, writing tips, and book updates delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-blue-200 text-sm mt-3">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* External Blogs & Achievements */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Writing Portfolio Across Platforms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond novels, I maintain active blogs and have received recognition across multiple platforms for movie reviews, short stories, tech articles, and personal narratives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Movie Reviews Blog */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">🎬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Movie Reviews Blog</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">IMDB Featured</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  In-depth movie analysis and reviews. My Baahubali 2 review is one of the most highly regarded on IMDB.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://paderthimovies.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Visit Movie Reviews Blog →
                  </a>
                  <a
                    href="https://www.imdb.com/user/ur51506344/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View IMDB Profile →
                  </a>
                </div>
              </div>
            </div>

            {/* Short Stories Blog */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">📖</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Short Stories Blog</h3>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Editor's Choice Award</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  22+ published short stories including "Mysterious Friend" which won Editor's Choice Award on StoryClub.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://paderthistories.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Read Short Stories →
                  </a>
                  <a
                    href="https://yourstoryclub.com/short-stories-unusual-experience/thriller-short-story-mysterious-friend/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View Award-Winning Story →
                  </a>
                </div>
              </div>
            </div>

            {/* Tech Blog */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">💻</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Technology Blog</h3>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">LinkedIn Featured</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Technical insights from a software engineer's perspective. Featured article on video technology evolution.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://vijayptech.blogspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Visit Tech Blog →
                  </a>
                  <a
                    href="https://www.linkedin.com/pulse/from-black-and-white-8k-personal-journey-through-video-vijay-paderthi-fegdc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View LinkedIn Article →
                  </a>
                </div>
              </div>
            </div>

            {/* Personal Blog */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">✈️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Personal Experiences</h3>
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">Real Stories</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Authentic accounts of life experiences including job struggles, 5-day Indian Air Force training, and more.
                </p>
                <a
                  href="https://paderthi.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read Personal Stories →
                </a>
              </div>
            </div>

            {/* IMDB Achievements */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-lg">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">IMDB Recognition</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">Top Rated</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Movie reviews featured on IMDB.com with recognition for in-depth analysis and compelling insights.
                </p>
                <a
                  href="https://www.imdb.com/title/tt4849438/review/rw3737170/?ref_=ext_shr_lnk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Read Highly Regarded Baahubali 2 Review →
                </a>
              </div>
            </div>

            {/* Medium & LinkedIn */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Professional Platforms</h3>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Multi-Platform</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Technical and professional articles published on Medium and LinkedIn with focus on technology and career insights.
                </p>
                <p className="text-sm text-gray-500">
                  Links available on respective platform profiles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Movie Reviews</h3>
                <p className="text-gray-600 text-sm">In-depth film analysis and cinematic insights</p>
                <a href="https://paderthimovies.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Visit Movie Blog →
                </a>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Short Stories</h3>
                <p className="text-gray-600 text-sm">Award-winning fiction and psychological thrillers</p>
                <a href="https://paderthistories.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Stories →
                </a>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Personal Journey</h3>
                <p className="text-gray-600 text-sm">Real experiences and career reflections</p>
                <a href="https://paderthi.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Experiences →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}