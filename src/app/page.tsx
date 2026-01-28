import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData
        type="website"
        data={{}}
      />
      <StructuredData
        type="person"
        data={{
          name: "Vijay Paderthi",
          description: "Author, storyteller, and creative writer passionate about exploring the human experience through words.",
          socialLinks: [
            "https://twitter.com/vijaypaderthi",
            "https://linkedin.com/in/vijaypaderthi",
            "https://goodreads.com/author/vijaypaderthi"
          ],
          awards: ["Finalist - 2023 Indie Book Awards", "Winner - 2022 Regional Literary Award"]
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to My
                  <span className="text-blue-600 block">Literary World</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm Vijay Paderthi, an author passionate about crafting stories that resonate with the human experience.
                  Join me on a journey through imagination, emotion, and discovery.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Explore My Books
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  About Me
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <p className="text-sm font-medium text-gray-900">"Words have the power to change worlds."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Books</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the stories that have captivated readers and explore the worlds I've created through words.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <div key={book} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                  <span className="text-gray-500 font-medium">Book Cover {book}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Book Title {book}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  A compelling story that explores the depths of human emotion and the power of resilience in the face of adversity.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/books"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              View All Books
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Latest Insights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thoughts on writing, creativity, and the stories that shape our world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((post) => (
              <article key={post} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-200 rounded-lg"></div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      The Art of Storytelling in Modern Literature
                    </h3>
                    <p className="text-gray-600">
                      Exploring how contemporary writers are reshaping narrative techniques to connect with today's readers...
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <time>December 15, 2024</time>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
            >
              Read More Posts
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Stay Connected</h2>
            <p className="text-xl text-blue-100">
              Get updates on new releases, upcoming events, and exclusive insights into my writing process.
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
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
