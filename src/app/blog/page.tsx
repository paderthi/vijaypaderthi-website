import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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
    title: 'Crafting Psychological Suspense: The Art of Mental Tension',
    excerpt: 'What makes a psychological thriller truly gripping? It\'s not just what happens, but how characters react when their reality starts to unravel. Here\'s how I build that crucial psychological tension.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Writing Craft',
    tags: ['psychological thriller', 'suspense', 'character psychology'],
    featured: true,
    imageUrl: '/blog/psychological-suspense.jpg'
  },
  {
    id: '2',
    title: 'From Software Engineer to Author: My Unexpected Writing Journey',
    excerpt: 'How a career in tech led me to discover storytelling. From debugging code to debugging plot holes - the similarities might surprise you.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-08',
    readTime: '6 min read',
    category: 'Writing Journey',
    tags: ['career change', 'software engineering', 'author journey'],
    featured: true,
    imageUrl: '/blog/tech-to-writing.jpg'
  },
  {
    id: '3',
    title: 'Writing Indian Settings for Global Readers',
    excerpt: 'How do you capture the essence of Indian culture and settings while making the story accessible to readers worldwide? It\'s about finding universal truths in specific places.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-02',
    readTime: '5 min read',
    category: 'Writing Craft',
    tags: ['indian settings', 'cultural writing', 'authenticity'],
    featured: false,
    imageUrl: '/blog/indian-settings.jpg'
  },
  {
    id: '4',
    title: 'The Mystery of Motivation: What Drives Characters to Act',
    excerpt: 'In murder mysteries and thrillers, character motivation is everything. A killer\'s reason must feel both shocking and inevitable. Here\'s how I approach the psychology behind the crime.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-28',
    readTime: '7 min read',
    category: 'Writing Tips',
    tags: ['character motivation', 'murder mystery', 'plot development'],
    featured: false,
    imageUrl: '/blog/character-motivation.jpg'
  },
  {
    id: '5',
    title: 'Telugu Literature That Shaped My Storytelling',
    excerpt: 'Growing up reading Telugu classics gave me a deep appreciation for narrative structure and character depth. Here are the works that continue to influence my writing today.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-20',
    readTime: '9 min read',
    category: 'Book Reviews',
    tags: ['telugu literature', 'influences', 'cultural heritage'],
    featured: false,
    imageUrl: '/blog/telugu-literature.jpg'
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
    tags: ['bleeding teeth', 'writing process', 'inspiration'],
    featured: false,
    imageUrl: '/blog/bleeding-teeth-behind.jpg'
  }
];

const categories = ['All Posts', 'Writing Craft', 'Writing Journey', 'Writing Tips', 'Book Reviews', 'Behind the Book'];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

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
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity">
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        Featured Article Image
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All Posts' 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">
                    Article Image
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

      {/* Archive Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Writing Craft</h3>
                <p className="text-gray-600 text-sm">Tips, techniques, and insights on the art of writing</p>
                <Link href="/blog/category/writing-craft" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Articles →
                </Link>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Book Reviews</h3>
                <p className="text-gray-600 text-sm">My thoughts on books that inspire and influence</p>
                <Link href="/blog/category/book-reviews" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Reviews →
                </Link>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">Author Journey</h3>
                <p className="text-gray-600 text-sm">Personal reflections on the writing life</p>
                <Link href="/blog/category/author-journey" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Stories →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}