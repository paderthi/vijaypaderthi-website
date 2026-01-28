import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Books - Vijay Paderthi',
  description: 'Explore the literary works of Vijay Paderthi. Discover compelling stories that resonate with readers worldwide.',
};

interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage: string;
  amazonLink: string;
  goodreadsLink?: string;
  genre: string;
  publishDate: string;
  pages: number;
  isbn?: string;
  awards?: string[];
}

const books: Book[] = [
  {
    id: '1',
    title: 'Echoes of Tomorrow',
    subtitle: 'A Journey Through Time and Memory',
    description: 'In this gripping tale of love, loss, and redemption, Maya discovers that some memories are too powerful to fade. When she inherits her grandmother\'s mysterious journal, she uncovers a family secret that spans generations. A beautifully crafted story that explores the connection between past and present, showing how our ancestors\' choices shape our destiny.',
    coverImage: '/book-covers/echoes-of-tomorrow.jpg',
    amazonLink: 'https://amazon.com/dp/example1',
    goodreadsLink: 'https://goodreads.com/book/example1',
    genre: 'Literary Fiction',
    publishDate: '2023',
    pages: 324,
    isbn: '978-0-123456-78-9',
    awards: ['Finalist - 2023 Indie Book Awards']
  },
  {
    id: '2',
    title: 'The Last Symphony',
    description: 'When renowned composer Elena Marchetti loses her hearing, she must find new ways to create music and rediscover her passion for life. Set against the backdrop of Vienna\'s classical music scene, this emotional journey explores the power of art to heal and transform. A moving story about resilience, creativity, and the universal language of music.',
    coverImage: '/book-covers/last-symphony.jpg',
    amazonLink: 'https://amazon.com/dp/example2',
    goodreadsLink: 'https://goodreads.com/book/example2',
    genre: 'Contemporary Fiction',
    publishDate: '2024',
    pages: 287,
    isbn: '978-0-987654-32-1'
  },
  {
    id: '3',
    title: 'Whispers in the Wind',
    subtitle: 'Tales from the Mountain Village',
    description: 'A collection of interconnected short stories set in a remote Himalayan village where ancient traditions meet modern challenges. Each tale reveals the hopes, dreams, and struggles of the villagers as they navigate changing times while preserving their cultural heritage. Rich with folklore and human emotion, these stories celebrate the resilience of the human spirit.',
    coverImage: '/book-covers/whispers-wind.jpg',
    amazonLink: 'https://amazon.com/dp/example3',
    goodreadsLink: 'https://goodreads.com/book/example3',
    genre: 'Short Stories',
    publishDate: '2022',
    pages: 256,
    isbn: '978-0-456789-12-3',
    awards: ['Winner - 2022 Regional Literary Award']
  }
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">My Books</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover stories that explore the depths of human experience, from intimate personal journeys to grand adventures that span time and place.
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {books.map((book, index) => (
              <div 
                key={book.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Book Cover */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="aspect-[3/4] w-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-gray-600 font-medium text-center px-4">
                        {book.title}
                        <br />
                        <span className="text-sm">Book Cover</span>
                      </span>
                    </div>
                    {book.awards && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        Award Winner
                      </div>
                    )}
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{book.genre}</span>
                      <span>•</span>
                      <span>{book.publishDate}</span>
                      <span>•</span>
                      <span>{book.pages} pages</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{book.title}</h2>
                    {book.subtitle && (
                      <h3 className="text-xl text-gray-600 font-medium">{book.subtitle}</h3>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {book.description}
                  </p>

                  {book.awards && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Recognition:</h4>
                      <ul className="space-y-1">
                        {book.awards.map((award, awardIndex) => (
                          <li key={awardIndex} className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Purchase Links */}
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
                    
                    {book.goodreadsLink && (
                      <a
                        href={book.goodreadsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.262 8.455c0 1.804-.927 3.405-2.347 4.323-.205.133-.685.133-.89 0l-.133-.089c-.133-.089-.266-.222-.266-.399 0-.177.089-.31.222-.399.623-.399 1.024-1.113 1.024-1.869 0-.444-.133-.844-.355-1.202-.266-.444-.667-.755-1.113-.933-.089-.044-.133-.133-.133-.222v-.444c0-.266.222-.488.488-.488.089 0 .177.022.266.067 1.113.444 1.825 1.557 1.825 2.855zm-5.105-.266c.222 0 .444.089.578.222.133.133.222.355.222.578v4.099c0 .222-.089.444-.222.578-.133.133-.355.222-.578.222-.222 0-.444-.089-.578-.222-.133-.133-.222-.355-.222-.578V8.989c0-.222.089-.444.222-.578.133-.133.355-.222.578-.222zm-1.69-1.202c-.089-.044-.133-.133-.133-.222v-.444c0-.266.222-.488.488-.488.089 0 .177.022.266.067.444.177.844.488 1.113.933.222.355.355.755.355 1.202 0 .755-.4 1.469-1.024 1.869-.133.089-.222.222-.222.399 0 .177.133.31.266.399l.133.089c.205.133.685.133.89 0 1.42-.918 2.347-2.519 2.347-4.323 0-1.298-.711-2.411-1.825-2.855-.089-.044-.177-.067-.266-.067-.266 0-.488.222-.488.488v.444c0 .089.044.177.133.222.444.177.844.488 1.113.933.222.355.355.755.355 1.202 0 .755-.4 1.469-1.024 1.869-.133.089-.222.222-.222.399 0 .177.133.31.266.399l.133.089c.205.133.685.133.89 0 1.42-.918 2.347-2.519 2.347-4.323 0-1.298-.711-2.411-1.825-2.855z"/>
                        </svg>
                        View on Goodreads
                      </a>
                    )}
                  </div>

                  {book.isbn && (
                    <p className="text-sm text-gray-500 pt-2">
                      ISBN: {book.isbn}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
            <p className="text-lg text-gray-600">
              Be the first to know about new releases, exclusive content, and upcoming events.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}