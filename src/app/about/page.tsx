import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - Vijay Paderthi',
  description: 'Learn about Vijay Paderthi - author, storyteller, and creative writer passionate about exploring the human experience through words.',
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
                I'm a storyteller at heart, passionate about crafting narratives that explore 
                the complexities of human nature and the connections that bind us together.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
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
                    My love for storytelling began in childhood, nestled in the quiet corners of libraries 
                    where I discovered the magical power of words to transport us to different worlds. 
                    Growing up, I was captivated by how a simple story could make me laugh, cry, or 
                    see the world through entirely new eyes.
                  </p>
                  <p>
                    After completing my degree in Literature, I spent several years traveling and working 
                    in various fields, always carrying a notebook to capture the stories I encountered. 
                    From bustling city streets to remote mountain villages, every place and person I met 
                    added new layers to my understanding of the human experience.
                  </p>
                  <p>
                    In 2020, I finally took the leap into full-time writing. What started as short stories 
                    shared with friends evolved into the novels and collections you see today. Each book 
                    represents not just my growth as a writer, but my ongoing exploration of what it means 
                    to be human in this complex, beautiful world.
                  </p>
                </div>
              </div>

              {/* Writing Philosophy */}
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Writing Philosophy</h2>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-blue-500 pl-6">
                  "I believe that every person carries within them a story worth telling. 
                  My role as a writer is not just to tell my own stories, but to illuminate 
                  the universal truths that connect us all—our hopes, fears, dreams, and the 
                  resilience of the human spirit."
                </blockquote>
              </div>

              {/* Achievements & Recognition */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements & Recognition</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Literary Awards</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Finalist - 2023 Indie Book Awards
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Winner - 2022 Regional Literary Award
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Honorable Mention - 2021 Short Story Competition
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">Media & Speaking</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Featured author at BookFest 2024</li>
                      <li>• Guest on "Writers & Words" podcast</li>
                      <li>• Regular contributor to Literary Review</li>
                      <li>• Workshop facilitator at local libraries</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Personal Interests */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Writing</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Hiking & Nature</h3>
                    <p className="text-gray-600 text-sm">Finding inspiration in the great outdoors and mountain trails.</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Music & Arts</h3>
                    <p className="text-gray-600 text-sm">Exploring creativity through various forms of artistic expression.</p>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900">Reading & Learning</h3>
                    <p className="text-gray-600 text-sm">Constantly exploring new genres and expanding literary horizons.</p>
                  </div>
                </div>
              </div>

              {/* Fun Facts */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Fun Facts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">📚</span>
                      <p className="text-gray-700">I write my first drafts by hand in vintage notebooks I collect from around the world.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">☕</span>
                      <p className="text-gray-700">My best ideas often come during my early morning coffee ritual at 5 AM.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">🌍</span>
                      <p className="text-gray-700">I've lived in four different countries, each experience deeply influencing my writing.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-blue-600 font-bold">🎭</span>
                      <p className="text-gray-700">Before writing, I briefly pursued theater, which taught me about dialogue and character development.</p>
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