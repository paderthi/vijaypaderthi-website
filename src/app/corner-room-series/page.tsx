import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Corner Room Series - Vijay Paderthi',
  description: 'A crime thriller series set in Bangalore, where every case begins with a death that doesn\'t add up and leads to secrets people will do anything to keep buried.',
};

interface SeriesBook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  amazonLink: string;
  bookNumber: number;
  publishDate: string;
  isNew?: boolean;
}

const seriesBooks: SeriesBook[] = [
  {
    id: 'corner-room-1',
    title: 'The Girl in the Corner Room',
    subtitle: 'A Murder Mystery',
    description: 'A young woman is found dead in a quiet corner room. What appears to be a straightforward case slowly reveals layers of silence, misdirection, and hidden relationships. As the investigation progresses, every detail matters—and every assumption is questioned. This is a grounded murder mystery focused on motive, psychology, and what people choose not to say.',
    coverImage: '/corner-room-cover.jpeg',
    amazonLink: 'https://www.amazon.com/Girl-Corner-Room-Murder-Mystery-ebook/dp/B0GGZ9NTC7',
    bookNumber: 1,
    publishDate: '2024'
  },
  {
    id: 'corner-room-2',
    title: 'The Doctor in the Corner Clinic',
    subtitle: 'The Room Was Never the Mystery',
    description: 'Dr. Ashok Kulkarni is found dead inside his locked clinic. Gun in hand. Door bolted from the inside. An open-and-shut suicide, the police say.\n\nInspector Praveen Kumar is not convinced.\n\nAshok was a celebrated cardiologist, a Padma Shri recipient, and one of Bangalore\'s most trusted doctors. But as Praveen retraces the final months of his life, he uncovers a burned letter, a growing fear, and a secret powerful enough to destroy more than one life.\n\nWhat begins as a locked-room death soon turns into something far more dangerous: a search through buried relationships, quiet betrayals, and truths hidden behind respectability. As the case deepens, Praveen finds himself drawn into a mystery where every answer raises a darker question, and where the cost of the truth may reach far beyond the dead.',
    coverImage: '/doctor-corner-clinic-cover.jpg',
    amazonLink: 'https://www.amazon.com/gp/product/B0GX141YWT',
    bookNumber: 2,
    publishDate: '2025',
    isNew: true
  }
];

export default function CornerRoomSeriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold">The Corner Room Series</h1>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              A crime thriller series set in Bangalore, where every case begins with a death that doesn't add up and leads to secrets people will do anything to keep buried.
            </p>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100">
              Tense police work collides with family loyalty, ambition, betrayal, and the hidden lives behind respectable faces.
            </p>
          </div>
        </div>
      </section>

      {/* New Book Highlight */}
      <section className="bg-green-50 border-l-4 border-green-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <div className="bg-green-400 text-green-900 px-3 py-1 rounded-full font-semibold text-sm">
                  NEW RELEASE
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Book 2: The Doctor in the Corner Clinic</h3>
              </div>
              <p className="text-gray-700 mt-2">
                <strong>Free copies available!</strong> Email <a href="mailto:hello@vijaypaderthi.com" className="text-blue-600 hover:text-blue-800 underline">hello@vijaypaderthi.com</a> for one of the first 50 free copies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Books in Series */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {seriesBooks.map((book, index) => (
              <div 
                key={book.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-start`}
              >
                {/* Book Cover */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    {book.isNew && (
                      <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                        NEW!
                      </div>
                    )}
                    <div className="aspect-[3/4] w-64 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-gray-100">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} book cover`}
                        width={300}
                        height={400}
                        className="w-full h-full object-contain rounded-lg"
                        priority={book.isNew}
                      />
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Book {book.bookNumber}
                      </span>
                      {book.isNew && (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                          Latest Release
                        </span>
                      )}
                      <span className="text-sm text-gray-500">{book.publishDate}</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">{book.title}</h2>
                    <h3 className="text-xl lg:text-2xl text-blue-600 font-medium italic">{book.subtitle}</h3>
                  </div>

                  <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                    {book.description.split('\n\n').map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Special Offer for New Book */}
                  {book.isNew && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Get Your Free Copy</h4>
                      <p className="text-blue-800 text-sm">
                        Be one of the first 50 readers to get a free copy. Send an email to{' '}
                        <a href="mailto:hello@vijaypaderthi.com" className="font-medium underline hover:text-blue-600">
                          hello@vijaypaderthi.com
                        </a>{' '}
                        and I'll send you a complimentary copy of this latest thriller.
                      </p>
                    </div>
                  )}

                  {/* Purchase Link */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 8.16 3.304 12.607 3.304 4.447 0 8.971-1.194 12.607-3.304.161-.102.276-.094.348.022.072.116.06.244-.036.364-2.294 2.844-6.33 4.616-12.919 4.616S2.375 20.908.081 18.384c-.096-.12-.108-.248-.036-.364z"/>
                        <path d="M17.72 11.316c-.064-.256-.256-.416-.544-.48L8.416 9.752c-.032-.016-.048-.048-.048-.096V8.72c0-.32.256-.576.576-.576h7.776c.32 0 .576-.256.576-.576s-.256-.576-.576-.576H8.944c-.96 0-1.728.768-1.728 1.728v.936c0 .608.384 1.152.96 1.344l8.64 1.056c.032.016.048.048.048.096v.96c0 .32-.256.576-.576.576H8.512c-.32 0-.576.256-.576.576s.256.576.576.576h7.776c.96 0 1.728-.768 1.728-1.728v-.96c0-.384-.128-.736-.352-1.024z"/>
                      </svg>
                      Buy on Amazon
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
                COMING SOON
              </span>
              <h2 className="text-4xl font-bold text-white">Book 3 — Coming Soon</h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Book Cover */}
                <div className="flex-shrink-0 mx-auto lg:mx-0">
                  <div className="relative">
                    <div className="aspect-[3/4] w-64 rounded-lg shadow-lg overflow-hidden bg-gray-100/20">
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

                {/* Book Details */}
                <div className="flex-1 space-y-6 text-left">
                  <div className="text-lg leading-relaxed space-y-4">
                    <p>
                      A series of brutal deaths begins across Bangalore, pulling Inspector Praveen into a case unlike any he has faced before.
                    </p>
                    
                    <p>
                      The victims appear unrelated at first, businessmen, contractors, real estate men, all found with savage wounds that suggest an animal attack. But the pattern is too precise. The targets are too specific. And whatever is moving through the city is not killing at random.
                    </p>
                    
                    <p>
                      As fear spreads, rumours take over. The media turns the deaths into spectacle, while Praveen follows the quieter evidence: old land records, hidden partnerships, a burned home, and a family whose deaths were once dismissed as an accident.
                    </p>
                    
                    <p>
                      At the center of it all is <strong>Bhairava</strong> — a Czechoslovakian Wolfdog shaped by loss, memory, and instinct.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-center">
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-sm">To the city, it is a monster.</p>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <p className="text-sm">To Praveen, it becomes something harder to name.</p>
                      </div>
                    </div>
                    
                    <p>
                      As the investigation closes in on the last surviving man, Praveen is forced to confront the most difficult question of his career:
                    </p>
                    
                    <p className="text-xl font-semibold text-purple-200 italic">
                      When the law fails, what does justice become?
                    </p>
                  </div>
                  
                  <div className="bg-white/20 rounded-lg p-4 border border-white/30">
                    <p className="text-sm text-purple-100">
                      <strong>Stay Updated:</strong> Be the first to know when Book 3 releases. Email{' '}
                      <a href="mailto:hello@vijaypaderthi.com" className="text-purple-200 underline hover:text-white">
                        hello@vijaypaderthi.com
                      </a>{' '}
                      to join the early reader list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Order */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Reading Order</h2>
            <p className="text-lg text-gray-600">
              While each book can be read as a standalone mystery, reading them in order will give you the full experience of the series progression.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {seriesBooks.map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Book {book.bookNumber}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 italic">{book.subtitle}</p>
                  {book.isNew && (
                    <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium mt-2">
                      New Release!
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to All Books */}
      <section className="py-12 text-center">
        <Link
          href="/books"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          View All Books
        </Link>
      </section>
    </div>
  );
}