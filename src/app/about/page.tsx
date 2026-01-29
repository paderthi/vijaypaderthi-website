import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - Vijay Paderthi',
  description: 'Learn about Paderthi Vijay - software engineer by profession and storyteller by nature. Discover his journey from childhood reader to published author.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">About Me</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Software engineer by profession and storyteller by nature, exploring fiction
                driven by plot, character, and setting.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden">
                <Image
                  src="/vijay-paderthi.jpg"
                  alt="Vijay Paderthi - Author & Software Engineer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Personal Journey */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey as a Writer</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    My interest in reading began in childhood. Much of my early free time was spent in a local library,
                    reading children's magazines and books such as Bommarillu and Balamithra. Reading soon became a daily
                    habit rather than an occasional interest.
                  </p>
                  <p>
                    As I grew older, I began reading novels and short stories by Telugu authors including Yandamuri
                    Veerendranath, Malladi Venkata Krishna Murthy, Yerramsetti Sai, Suryadevara Ram Mohan Rao, Madubabu,
                    and Panuganti Lakshminarasimha Rao. Alongside fiction, I also read books on personality development,
                    philosophy, history, and related subjects. Over the years, this reading easily grew into thousands of books.
                  </p>
                  <p>
                    Inspired by these works, I started writing my own stories in notebooks. While those early writings
                    remained private, storytelling came naturally to me. During my school years, friends enjoyed listening
                    to the stories I narrated—sometimes retelling what I had read, and sometimes creating new stories on the spot.
                  </p>
                  <p>
                    Life eventually followed its course. I completed my engineering education, focused on work, family, and
                    career, and for a long time, reading and writing took a back seat.
                  </p>
                  <p>
                    After moving to the United States and settling into a stable routine, I returned to books and writing.
                    I began blogging, writing short stories, technical articles, and personal reflections. During my early
                    professional years, I also shared long-form stories on an internal company platform, which received
                    strong encouragement.
                  </p>
                  <p>
                    Around 2012, I published my first book on Amazon. Writing was slow at the time, largely due to constant
                    rewriting, but the process helped me develop patience and clarity in shaping ideas into complete stories.
                  </p>
                  <p>
                    Today, I continue to write fiction driven by plot, character, and setting. This website is a place to
                    explore my books and writing journey.
                  </p>
                </div>
              </div>

              {/* Writing Philosophy */}
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Writing Philosophy</h2>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-6">
                  "Writing was slow at the time, largely due to constant rewriting, but the process helped me develop
                  patience and clarity in shaping ideas into complete stories. Today, I continue to write fiction
                  driven by plot, character, and setting."
                </blockquote>
              </div>

              {/* Writing Process */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Writing & Professional Life</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Background</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Software Engineer by profession</li>
                      <li>• Engineering education background</li>
                      <li>• Relocated to United States</li>
                      <li>• Technical writing experience</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Writing Journey</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• First book published around 2012</li>
                      <li>• Started with blogging and short stories</li>
                      <li>• Shared stories on company platforms</li>
                      <li>• Focus on plot, character, and setting</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Literary Influences */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Literary Influences</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 mb-4">
                    My reading journey has been deeply influenced by Telugu literature and diverse subjects:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Telugu Authors</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Yandamuri Veerendranath</li>
                        <li>• Malladi Venkata Krishna Murthy</li>
                        <li>• Yerramsetti Sai</li>
                        <li>• Suryadevara Ram Mohan Rao</li>
                        <li>• Madubabu</li>
                        <li>• Panuganti Lakshminarasimha Rao</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reading Interests</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Fiction and short stories</li>
                        <li>• Personality development</li>
                        <li>• Philosophy and history</li>
                        <li>• Children's literature (early years)</li>
                        <li>• Technical articles</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
            <p className="text-xl text-blue-100">
              I love hearing from readers and connecting with fellow writers. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
              >
                Get in Touch
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
              >
                Read My Blog
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}