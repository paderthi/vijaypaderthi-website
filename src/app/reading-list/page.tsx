import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reading List - Get Free Books & Early Access | Vijay Paderthi',
  description: 'Join my reading list to get a free copy of "The Doctor in the Corner Clinic" and be the first to know when Book 3 releases. Limited spots available!',
};

export default function ReadingListPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold">Join My Reading List</h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed">
              Get exclusive access to free books, early releases, and be part of my reader community
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 text-blue-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Limited time offers • Exclusive content • No spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Book 2 Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                  FREE!
                </div>
                <div className="aspect-[3/4] w-64 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
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
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    OFFER #1
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    First 50 Readers Only
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Get Book 2 For Free</h2>
                <h3 className="text-2xl text-blue-600 font-medium italic">The Doctor in the Corner Clinic</h3>
              </div>

              <div className="text-gray-700 text-lg space-y-4">
                <p>
                  Be one of the first 50 readers to receive a complimentary copy of my latest crime thriller.
                  Dr. Ashok Kulkarni is found dead in his locked clinic, but Inspector Praveen Kumar isn't convinced it's suicide.
                </p>
                <p className="font-medium text-blue-800">
                  This offer is limited to the first 50 email requests. Once claimed, you'll receive your free digital copy within 24 hours.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
                <h4 className="text-lg font-bold text-blue-900 mb-3">How to Claim Your Free Copy:</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    <span>Email me at&nbsp;</span><strong>hello@vijaypaderthi.com</strong>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Subject line: "Free Book 2 Request"
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    Mention your preferred format (PDF/EPUB)
                  </li>
                </ol>
                
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <a
                    href="mailto:hello@vijaypaderthi.com?subject=Free Book 2 Request&body=Hi Vijay,%0A%0AI would like to claim my free copy of 'The Doctor in the Corner Clinic'. My preferred format is: [PDF/EPUB]%0A%0AThank you!"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Free Book Request Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book 3 Waiting List Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                  COMING SOON
                </div>
                <div className="aspect-[3/4] w-64 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                  <Image
                    src="/book3-cover.jpg"
                    alt="Book 3 Coming Soon cover"
                    width={300}
                    height={400}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    OFFER #2
                  </span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    Early Access List
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Join the Book 3 Waiting List</h2>
                <h3 className="text-2xl text-indigo-600 font-medium italic">Be the First to Know</h3>
              </div>

              <div className="text-gray-700 text-lg space-y-4">
                <p>
                  Book 3 continues the Corner Room Series with Inspector Praveen facing his most challenging case yet.
                  A series of brutal deaths across Bangalore, and at the center—Bhairava, a Czechoslovakian Wolfdog.
                </p>
                <p className="font-medium text-indigo-800">
                  Early access subscribers will be the first to know about the release date, get exclusive previews,
                  and have the opportunity for advance reader copies.
                </p>
              </div>

              <div className="bg-white border-2 border-indigo-300 rounded-lg p-6">
                <h4 className="text-lg font-bold text-indigo-900 mb-3">What You'll Get as an Early Reader:</h4>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    First notification when Book 3 releases
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Exclusive preview chapters
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Behind-the-scenes writing updates
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-indigo-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Potential advance reader copy opportunities
                  </li>
                </ul>
                
                <div className="pt-4 border-t border-indigo-200">
                  <a
                    href="mailto:hello@vijaypaderthi.com?subject=Book 3 Early Reader List&body=Hi Vijay,%0A%0AI would like to join the early reader list for Book 3. Please notify me when it's available and share any exclusive content.%0A%0AThank you!"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 6h16l-1 10H5L4 6zm16 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2" />
                    </svg>
                    Join Book 3 Early Reader List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Both Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want Both Offers?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join both lists with a single email and get the best of both worlds—a free copy of Book 2 today and early access to Book 3 when it's ready.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Reader Package</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-green-800">Free Book 2</h4>
                <p className="text-sm text-gray-600">Get your copy today</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 6h16l-1 10H5L4 6zm16 0V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2" />
                  </svg>
                </div>
                <h4 className="font-semibold text-purple-800">Book 3 Early Access</h4>
                <p className="text-sm text-gray-600">Be first in line</p>
              </div>
            </div>
            
            <a
              href="mailto:hello@vijaypaderthi.com?subject=Complete Reader Package - Book 2 Free + Book 3 List&body=Hi Vijay,%0A%0AI would like to claim both offers:%0A1. Free copy of 'The Doctor in the Corner Clinic' (preferred format: PDF/EPUB)%0A2. Join the Book 3 early reader list%0A%0APlease add me to both lists. Thank you!"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Complete Reader Package
            </a>
          </div>
        </div>
      </section>

      {/* Back to Series */}
      <section className="py-12 text-center bg-white">
        <Link
          href="/corner-room-series"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to The Corner Room Series
        </Link>
      </section>
    </div>
  );
}