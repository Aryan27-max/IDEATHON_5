import  { Link, useLocation } from 'react-router-dom';
import { DnaIcon } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'AI Analysis', href: '/ai-analysis' },
    { name: 'Research', href: '/research' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <Link to="/" className="flex items-center group">
                <DnaIcon className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                <span className="ml-2 text-xl font-semibold text-gray-900">Oncolens</span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      location.pathname === item.href
                        ? 'border-b-2 border-blue-500 text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/portal"
                className="button-primary ml-6 inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
              >
                Doctor & Researcher Portal
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-16">{children}</main>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
              <div className="animate-fade-up">
                <h3 className="text-sm font-semibold text-gray-500">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900 nav-link">About</Link></li>
                  <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900 nav-link">Contact</Link></li>
                </ul>
              </div>
              <div className="animate-fade-up [animation-delay:200ms]">
                <h3 className="text-sm font-semibold text-gray-500">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/blog" className="text-base text-gray-500 hover:text-gray-900 nav-link">Blog</Link></li>
                  <li><Link to="/research" className="text-base text-gray-500 hover:text-gray-900 nav-link">Research</Link></li>
                </ul>
              </div>
              <div className="animate-fade-up [animation-delay:400ms]">
                <h3 className="text-sm font-semibold text-gray-500">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/privacy" className="text-base text-gray-500 hover:text-gray-900 nav-link">Privacy</Link></li>
                  <li><Link to="/terms" className="text-base text-gray-500 hover:text-gray-900 nav-link">Terms</Link></li>
                </ul>
              </div>
              <div className="animate-fade-up [animation-delay:600ms]">
                <h3 className="text-sm font-semibold text-gray-500">Newsletter</h3>
                <p className="mt-4 text-base text-gray-500">Stay updated with our latest insights.</p>
                <form className="mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm transition-shadow duration-300 hover:shadow-md"
                  />
                  <button
                    type="submit"
                    className="button-primary mt-2 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-base text-gray-400">&copy; 2023 Oncolens. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
 