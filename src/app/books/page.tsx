import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Books - Vijay Paderthi',
  description: 'Explore the psychological thrillers and murder mysteries by Vijay Paderthi. Gripping tales of identity, silence, and hidden truths.',
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
  formats: string[];
}

const books: Book[] = [
  {
    id: '1',
    title: 'The Girl With Bleeding Teeth',
    subtitle: 'A Village That Burned Its Silence',
    description: 'Set in a village bound by tradition and fear, this novel follows a disturbing event that everyone chooses to ignore. As buried truths begin to surface, the cost of collective silence becomes impossible to escape. This psychological thriller explores suppressed memory, shared guilt, and the danger of protecting secrets for too long.',
    coverImage: '/bleeding-teeth-cover.jpeg',
    amazonLink: 'https://www.amazon.com/Girl-Bleeding-Teeth-Village-Silence-ebook/dp/B0GDW8SWZS',
    genre: 'Psychological Thriller',
    publishDate: '2024',
    formats: ['Kindle', 'Paperback']
  },
  {
    id: '2',
    title: 'The Girl in the Corner Room',
    subtitle: 'A Murder Mystery',
    description: 'A young woman is found dead in a quiet corner room. What appears to be a straightforward case slowly reveals layers of silence, misdirection, and hidden relationships. As the investigation progresses, every detail matters—and every assumption is questioned. This is a grounded murder mystery focused on motive, psychology, and what people choose not to say.',
    coverImage: '/corner-room-cover.jpeg',
    amazonLink: 'https://www.amazon.com/Girl-Corner-Room-Murder-Mystery-ebook/dp/B0GGZ9NTC7',
    genre: 'Murder Mystery',
    publishDate: '2024',
    formats: ['Kindle', 'Paperback']
  },
  {
    id: '3',
    title: 'The Man Who Woke Up as Someone Else',
    subtitle: 'A Stolen Identity Thriller',
    description: 'A man wakes up to find himself living a life that does not belong to him. His name, his surroundings, and his past feel unfamiliar. As he searches for answers, he begins to uncover a carefully constructed deception—one that suggests his identity may have been stolen, altered, or erased. This thriller explores identity, control, and the consequences of living a life built on secrets.',
    coverImage: '/someone-else-cover.jpeg',
    amazonLink: 'https://www.amazon.com/Man-Who-Woke-Someone-Else-ebook/dp/B0GJSBZ7J5',
    genre: 'Identity Thriller',
    publishDate: '2024',
    formats: ['Kindle', 'Paperback']
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
              Psychological thrillers and murder mysteries that explore identity, silence, and the hidden truths that shape our lives.
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
                    <div className="aspect-[3/4] w-64 bg-gray-100 rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} book cover`}
                        width={256}
                        height={341}
                        className="w-full h-full object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full">{book.genre}</span>
                      <span>•</span>
                      <span>{book.publishDate}</span>
                      <span>•</span>
                      <span>{book.formats.join(', ')}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{book.title}</h2>
                    {book.subtitle && (
                      <h3 className="text-xl text-red-600 font-medium italic">{book.subtitle}</h3>
                    )}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    {book.description}
                  </p>

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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Author Page CTA */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Amazon Author Page</h2>
            <p className="text-lg text-gray-600">
              Find all my books and available editions on my official Amazon author page.
            </p>
            <div className="pt-4">
              <a
                href="https://www.amazon.com/stores/Paderthi-Vijay/author/B0GHL31K3S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 8.16 3.304 12.607 3.304 4.447 0 8.971-1.194 12.607-3.304.161-.102.276-.094.348.022.072.116.06.244-.036.364-2.294 2.844-6.33 4.616-12.919 4.616S2.375 20.908.081 18.384c-.096-.12-.108-.248-.036-.364z"/>
                  <path d="M17.72 11.316c-.064-.256-.256-.416-.544-.48L8.416 9.752c-.032-.016-.048-.048-.048-.096V8.72c0-.32.256-.576.576-.576h7.776c.32 0 .576-.256.576-.576s-.256-.576-.576-.576H8.944c-.96 0-1.728.768-1.728 1.728v.936c0 .608.384 1.152.96 1.344l8.64 1.056c.032.016.048.048.048.096v.96c0 .32-.256.576-.576.576H8.512c-.32 0-.576.256-.576.576s.256.576.576.576h7.776c.96 0 1.728-.768 1.728-1.728v-.96c0-.384-.128-.736-.352-1.024z"/>
                </svg>
                Visit Amazon Author Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}