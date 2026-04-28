'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

const NewsletterSignup = ({ variant = 'default', className = '' }: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Create mailto link with pre-filled subscriber info
    const subject = 'Newsletter Subscription Request';
    const body = `Hi Vijay,%0A%0AI would like to subscribe to your newsletter for updates on new releases, events, and writing insights.%0A%0AEmail: ${encodeURIComponent(email)}%0A%0AThank you!`;
    
    window.open(`mailto:hello@vijaypaderthi.com?subject=${encodeURIComponent(subject)}&body=${body}`, '_blank');
    
    // Reset form
    setEmail('');
    alert('Thank you! Your subscription request has been sent. You should receive a confirmation email shortly.');
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-blue-50 rounded-lg p-4 ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-3">
          Get updates on new releases and writing insights.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 ${className}`}>
      <div className="text-center space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Stay in the Loop</h3>
          <p className="text-gray-600 mt-2">
            Get updates on new releases, upcoming events, and exclusive insights into my writing process.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe
            </button>
          </div>
        </form>
        
        <p className="text-xs text-gray-500">
          No spam, unsubscribe at any time. You'll receive a confirmation email.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;