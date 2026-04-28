import Link from "next/link";
import Image from "next/image";
import StructuredData from "@/components/StructuredData";
import NewsletterSignup from "@/components/NewsletterSignup";

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
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to My
                <span className="text-blue-600 block">Literary World</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Software engineer and author who writes fiction inspired by Indian settings.
                Thrillers, mysteries, and character-driven stories shaped by years of reading and storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Explore My Books
                </Link>
                <Link
                  href="/reading-list"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Get Free Books
                </Link>
              </div>
            </div>
            
            {/* Featured New Book Highlight */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  NEW RELEASE
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Free copies available
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative mx-auto">
                  <div className="aspect-[3/4] w-48 rounded-lg shadow-lg overflow-hidden bg-gray-100">
                    <Image
                      src="/doctor-corner-clinic-cover.jpg"
                      alt="The Doctor in the Corner Clinic book cover"
                      width={300}
                      height={400}
                      className="w-full h-full object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
                <div className="text-left space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">The Doctor in the Corner Clinic</h2>
                  <p className="text-lg text-blue-600 italic">"The Room Was Never the Mystery"</p>
                  <p className="text-gray-700">
                    Dr. Ashok Kulkarni is found dead inside his locked clinic. Gun in hand. Door bolted from the inside.
                    The police say suicide. Inspector Praveen Kumar isn't convinced.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://www.amazon.com/gp/product/B0GX141YWT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Buy on Amazon
                    </a>
                    <Link
                      href="/reading-list"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Free Copy
                    </Link>
                  </div>
                </div>
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
            <Link href="/books" className="group cursor-pointer relative">
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10 shadow-lg">
                NEW!
              </div>
              <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow bg-gray-100">
                <Image
                  src="/doctor-corner-clinic-cover.jpg"
                  alt="The Doctor in the Corner Clinic book cover"
                  width={300}
                  height={400}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Doctor in the Corner Clinic</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                A locked-room mystery in Bangalore. Dr. Ashok Kulkarni is found dead in his clinic, gun in hand. The police say suicide. Inspector Praveen Kumar isn't convinced.
              </p>
              <div className="mt-2">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                  Free copies available
                </span>
              </div>
            </Link>
            
            <Link href="/books" className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow bg-gray-100">
                <Image
                  src="/corner-room-cover.jpeg"
                  alt="The Girl in the Corner Room book cover"
                  width={300}
                  height={400}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Girl in the Corner Room</h3>
              <p className="text-gray-600 text-sm line-clamp-3">
                A grounded murder mystery focused on motive and psychology. What appears straightforward slowly reveals layers of silence, misdirection, and hidden relationships.
              </p>
            </Link>
            
            <Link href="/books" className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden group-hover:shadow-lg transition-shadow bg-gray-100">
                <Image
                  src="/someone-else-cover.jpeg"
                  alt="The Man Who Woke Up as Someone Else book cover"
                  width={300}
                  height={400}
                  className="w-full h-full object-contain rounded-lg"
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
            <a href="https://www.imdb.com/title/tt4849438/review/rw3737170/?ref_=ext_shr_lnk" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow block">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎬</div>
                    <div className="text-sm font-medium text-gray-700">IMDB Featured Review</div>
                  </div>
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
                    <span>Click to Read on IMDB</span>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="https://yourstoryclub.com/short-stories-unusual-experience/thriller-short-story-mysterious-friend/index.html" target="_blank" rel="noopener noreferrer" className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow block">
              <div className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-sm font-medium text-gray-700">Award-Winning Story</div>
                  </div>
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
                    <span>Click to Read Story</span>
                  </div>
                </div>
              </div>
            </a>
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
      </div>
    </>
  );
}
