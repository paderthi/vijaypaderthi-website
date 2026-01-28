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
    title: 'The Art of Character Development: Breathing Life into Fiction',
    excerpt: 'Creating compelling characters is perhaps the most crucial skill a writer can develop. Here\'s how I approach building characters that feel real and relatable.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Writing Craft',
    tags: ['character development', 'fiction writing', 'storytelling'],
    featured: true,
    imageUrl: '/blog/character-development.jpg'
  },
  {
    id: '2',
    title: 'Finding Your Voice as a Writer: A Personal Journey',
    excerpt: 'Every writer\'s journey to finding their unique voice is different. I share my own path and the lessons learned along the way.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-08',
    readTime: '6 min read',
    category: 'Writing Journey',
    tags: ['writing voice', 'personal growth', 'author journey'],
    featured: true,
    imageUrl: '/blog/finding-voice.jpg'
  },
  {
    id: '3',
    title: 'The Power of Place: How Setting Shapes Story',
    excerpt: 'Setting is more than just backdrop—it\'s a character in its own right. Discover how to make your story locations come alive.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-02',
    readTime: '5 min read',
    category: 'Writing Craft',
    tags: ['setting', 'worldbuilding', 'atmosphere'],
    featured: false,
    imageUrl: '/blog/power-of-place.jpg'
  },
  {
    id: '4',
    title: 'Overcoming Writer\'s Block: Practical Strategies That Work',
    excerpt: 'Writer\'s block affects every author at some point. Here are proven techniques to break through creative barriers and get back to writing.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-28',
    readTime: '7 min read',
    category: 'Writing Tips',
    tags: ['writers block', 'creativity', 'productivity'],
    featured: false,
    imageUrl: '/blog/writers-block.jpg'
  },
  {
    id: '5',
    title: 'The Reading Life: Books That Shaped My Writing',
    excerpt: 'A look at the novels and authors that have influenced my work and continue to inspire my storytelling approach.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-20',
    readTime: '9 min read',
    category: 'Book Reviews',
    tags: ['influences', 'book recommendations', 'literary analysis'],
    featured: false,
    imageUrl: '/blog/reading-life.jpg'
  },
  {
    id: '6',
    title: 'Behind the Scenes: Writing \'Echoes of Tomorrow\'',
    excerpt: 'Take a peek behind the curtain as I share the inspiration, research, and writing process that brought my latest novel to life.',
    content: 'Full content would go here...',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-15',
    readTime: '10 min read',
    category: 'Behind the Book',
    tags: ['echoes of tomorrow', 'writing process', 'inspiration'],
    featured: false,
    imageUrl: '/blog/behind-scenes.jpg'
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