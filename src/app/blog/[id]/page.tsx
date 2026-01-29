import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
  externalUrl?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My Baahubali 2 Review: One of IMDB\'s Most Regarded Analyses',
    excerpt: 'My in-depth review of Baahubali 2 became one of the most highly regarded reviews on IMDB. Here\'s what made this epic so compelling and why it resonated with global audiences.',
    content: 'This review explores the cultural significance, narrative structure, and cinematic achievements of Baahubali 2. The film represents more than entertainment—it\'s a cultural phenomenon that bridged traditional Indian storytelling with modern cinema.',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    category: 'Movie Reviews',
    tags: ['baahubali', 'movie review', 'imdb', 'indian cinema'],
    featured: true,
    imageUrl: '/blog/baahubali-review.jpg',
    externalUrl: 'https://www.imdb.com/title/tt4849438/review/rw3737170/?ref_=ext_shr_lnk'
  },
  {
    id: '2',
    title: 'From Black and White to 8K: A Personal Journey Through Video Technology',
    excerpt: 'A technical deep-dive into the evolution of video technology from my perspective as both a software engineer and content creator. Originally published on LinkedIn.',
    content: 'From the early days of black and white television to today\'s 8K displays, video technology has transformed how we consume and create content. This article traces the personal journey through these technological advances.',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-08',
    readTime: '6 min read',
    category: 'Technology',
    tags: ['video technology', 'evolution', 'linkedin', 'tech history'],
    featured: true,
    imageUrl: '/blog/video-tech-evolution.jpg',
    externalUrl: 'https://www.linkedin.com/pulse/from-black-and-white-8k-personal-journey-through-video-vijay-paderthi-fegdc/'
  },
  {
    id: '3',
    title: 'Mysterious Friend: The Editor\'s Choice Award-Winning Story',
    excerpt: 'My short story "Mysterious Friend" won the Editor\'s Choice Award on StoryClub. A psychological thriller about unexpected encounters and the secrets we keep.',
    content: 'A psychological thriller that explores the thin line between reality and perception. This story delves into the psychology of unexpected encounters and how they can reshape our understanding of ourselves.',
    author: 'Vijay Paderthi',
    publishDate: '2024-01-02',
    readTime: '5 min read',
    category: 'Short Stories',
    tags: ['mysterious friend', 'award winning', 'storyclub', 'editor choice'],
    featured: false,
    imageUrl: '/blog/mysterious-friend.jpg',
    externalUrl: 'https://yourstoryclub.com/short-stories-unusual-experience/thriller-short-story-mysterious-friend/index.html'
  },
  {
    id: '4',
    title: '5 Days of Indian Air Force Training: A Life-Changing Experience',
    excerpt: 'My personal account of undergoing Indian Air Force training. A real-life experience that tested physical limits and mental resilience in ways I never expected.',
    content: 'A detailed account of five intensive days of Indian Air Force training that pushed physical and mental boundaries. This experience provided insights into discipline, teamwork, and personal resilience.',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-28',
    readTime: '7 min read',
    category: 'Personal Experiences',
    tags: ['indian air force', 'training', 'personal growth', 'real experiences'],
    featured: false,
    imageUrl: '/blog/air-force-training.jpg',
    externalUrl: 'https://paderthi.blogspot.com/'
  },
  {
    id: '5',
    title: 'Job Struggles and Career Transitions: My Professional Journey',
    excerpt: 'An honest look at the challenges, failures, and eventual successes in my career path. From engineering struggles to finding my voice as a writer.',
    content: 'A candid reflection on the ups and downs of professional life, career transitions, and the journey from engineering to writing. This post shares the real struggles and lessons learned.',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-20',
    readTime: '9 min read',
    category: 'Career Journey',
    tags: ['job struggles', 'career change', 'professional growth', 'real life'],
    featured: false,
    imageUrl: '/blog/career-journey.jpg',
    externalUrl: 'https://paderthi.blogspot.com/'
  },
  {
    id: '6',
    title: 'Behind the Scenes: The Girl in the Corner Room',
    excerpt: 'The story behind my psychological thriller originally called "Meghana". How a single character\'s isolation became the foundation for exploring psychological depth and human vulnerability.',
    content: 'The creative process behind one of my psychological thrillers, exploring how character isolation can drive narrative tension and psychological depth.',
    author: 'Vijay Paderthi',
    publishDate: '2023-12-15',
    readTime: '10 min read',
    category: 'Behind the Book',
    tags: ['corner room', 'meghana', 'writing process', 'inspiration', 'novel writing'],
    featured: false,
    imageUrl: '/blog/corner-room-behind.jpg',
    externalUrl: 'https://paderthistories.blogspot.com/2012/03/meghana-behind-scenes.html'
  }
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === params.id);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - Vijay Paderthi',
    };
  }

  return {
    title: `${post.title} - Vijay Paderthi`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Blog
            </Link>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
                <time>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">By {post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  {post.category === 'Movie Reviews' ? '🎬' :
                   post.category === 'Technology' ? '💻' :
                   post.category === 'Short Stories' ? '📖' :
                   post.category === 'Personal Experiences' ? '✈️' :
                   post.category === 'Career Journey' ? '💼' : '📝'}
                </div>
                <div className="text-lg font-medium text-gray-700">{post.category}</div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {post.content}
              </p>
              
              {post.externalUrl && (
                <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Read the Full Article</h3>
                  <p className="text-gray-600 mb-4">
                    This is a preview. Click below to read the complete article on the original platform.
                  </p>
                  <a
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Read Full Article →
                  </a>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">More from the Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="group block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
                  >
                    <div className="space-y-3">
                      <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        {relatedPost.readTime}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <Link 
              href="/blog"
              className="inline-block text-blue-600 hover:text-blue-700 font-medium"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}