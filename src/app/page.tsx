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
          description: "Software engineer and author who writes fiction inspired by Indian settings. His work includes thrillers, mysteries, and character-driven stories shaped by years of reading and storytelling.",
          socialLinks: [
            "https://twitter.com/vijaypaderthi",
            "https://linkedin.com/in/vijaypaderthi",
            "https://goodreads.com/author/vijaypaderthi"
          ],
          awards: []
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
                  Paderthi Vijay is a software engineer and author who writes fiction inspired by Indian settings.
                  His work includes thrillers, mysteries, and character-driven stories shaped by years of reading and storytelling.
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
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl overflow-hidden">
                <Image
                  src="/vijay-paderthi.jpg"
                  alt="Vijay Paderthi - Author & Software Engineer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4">
                <p className="text-sm font-medium text-gray-900">"Stories inspired by Indian settings."</p>
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
            <Link href="/books" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow flex items-center justify-center">
                <Image
                  src="/bleeding-teeth-cover.jpeg"
                  alt="The Girl With Bleeding Teeth book cover"
                  width={300}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Girl With Bleeding Teeth</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                Set in a village bound by tradition and fear, this psychological thriller explores suppressed memory, shared guilt, and the danger of protecting secrets for too long.
              </p>
            </Link>
            
            <Link href="/books" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow flex items-center justify-center">
                <Image
                  src="/corner-room-cover.jpeg"
                  alt="The Girl in the Corner Room book cover"
                  width={300}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Girl in the Corner Room</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                A grounded murder mystery focused on motive and psychology. What appears straightforward slowly reveals layers of silence, misdirection, and hidden relationships.
              </p>
            </Link>
            
            <Link href="/books" className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow flex items-center justify-center">
                <Image
                  src="/someone-else-cover.jpeg"
                  alt="The Man Who Woke Up as Someone Else book cover"
                  width={300}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Man Who Woke Up as Someone Else</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                A stolen identity thriller exploring what happens when a man wakes up living a life that doesn't belong to him, uncovering a carefully constructed deception.
              </p>
            </Link>
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
            <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  IMDB Featured Review
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    My Baahubali 2 Review: One of IMDB's Most Regarded Analyses
                  </h3>
                  <p className="text-gray-600">
                    My in-depth review of Baahubali 2 became one of the most highly regarded reviews on IMDB. Here's what made this epic so compelling...
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                      IMDB Featured
                    </span>
                    <span className="mx-2">•</span>
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                  Award-Winning Story
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Mysterious Friend: Editor's Choice Award Winner
                  </h3>
                  <p className="text-gray-600">
                    My short story "Mysterious Friend" won the Editor's Choice Award on StoryClub. A psychological thriller about unexpected encounters...
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      Editor's Choice
                    </span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </article>
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
