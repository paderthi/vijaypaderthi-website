interface StructuredDataProps {
  type: 'person' | 'book' | 'article' | 'website';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case 'person':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": data.name || "Vijay Paderthi",
        "jobTitle": "Author",
        "description": data.description || "Author, storyteller, and creative writer passionate about exploring the human experience through words.",
        "url": "https://vijaypaderthi.com",
        "image": data.image,
        "sameAs": data.socialLinks || [
          "https://twitter.com/vijaypaderthi",
          "https://linkedin.com/in/vijaypaderthi",
          "https://goodreads.com/author/vijaypaderthi"
        ],
        "knowsAbout": ["Creative Writing", "Storytelling", "Literature", "Fiction"],
        "alumniOf": data.education,
        "award": data.awards
      };
      break;

    case 'book':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Book",
        "name": data.title,
        "author": {
          "@type": "Person",
          "name": "Vijay Paderthi"
        },
        "description": data.description,
        "genre": data.genre,
        "isbn": data.isbn,
        "numberOfPages": data.pages,
        "datePublished": data.publishDate,
        "publisher": data.publisher,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": data.price,
          "priceCurrency": "USD",
          "url": data.purchaseUrl
        }
      };
      break;

    case 'article':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "author": {
          "@type": "Person",
          "name": "Vijay Paderthi"
        },
        "datePublished": data.publishDate,
        "dateModified": data.modifiedDate || data.publishDate,
        "publisher": {
          "@type": "Person",
          "name": "Vijay Paderthi"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.url
        },
        "image": data.image,
        "articleSection": data.category,
        "keywords": data.keywords
      };
      break;

    case 'website':
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Vijay Paderthi - Author & Storyteller",
        "description": "Welcome to the official website of author Vijay Paderthi. Discover books, stories, and insights from a passionate storyteller.",
        "url": "https://vijaypaderthi.com",
        "author": {
          "@type": "Person",
          "name": "Vijay Paderthi"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://vijaypaderthi.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}