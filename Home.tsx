import  { ArrowRightIcon, ActivityIcon, SearchIcon, ShieldIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
            alt="Medical laboratory"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Revolutionizing Cancer Mutation Analysis with AI
            </h1>
            <p className="animate-fade-up mt-6 max-w-3xl text-xl text-gray-100 [animation-delay:200ms]">
              Empowering doctors and researchers with fast, accurate genetic insights for better patient care.
            </p>
            <div className="animate-fade-up mt-10 flex items-center gap-x-6 [animation-delay:400ms]">
              <Link
                to="/ai-analysis"
                className="button-primary rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600"
              >
                Try Oncolens
              </Link>
              <Link
                to="/about"
                className="text-lg font-semibold leading-6 text-white flex items-center transition-transform duration-300 hover:translate-x-2"
              >
                Learn more <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600 animate-fade-up">Advanced Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl animate-fade-up [animation-delay:200ms]">
              Transform Cancer Care with AI
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-up [animation-delay:400ms]">
              Our AI-powered platform analyzes genetic mutations with unprecedented speed and accuracy, helping medical professionals make informed decisions faster.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="feature-card animate-fade-up [animation-delay:600ms]">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <ActivityIcon className="h-5 w-5 flex-none text-blue-600 animate-float" />
                  AI Mutation Analysis
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Get fast, accurate insights into genetic mutations with our advanced AI technology.</p>
                  <p className="mt-6">
                    <Link to="/ai-analysis" className="text-sm font-semibold leading-6 text-blue-600 nav-link">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="feature-card animate-fade-up [animation-delay:800ms]">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <SearchIcon className="h-5 w-5 flex-none text-blue-600 animate-float" />
                  Research Database
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Access the latest studies and research data from leading institutions worldwide.</p>
                  <p className="mt-6">
                    <Link to="/research" className="text-sm font-semibold leading-6 text-blue-600 nav-link">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
              <div className="feature-card animate-fade-up [animation-delay:1000ms]">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <ShieldIcon className="h-5 w-5 flex-none text-blue-600 animate-float" />
                  Secure Portal
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Your data is protected with enterprise-grade security and HIPAA compliance.</p>
                  <p className="mt-6">
                    <Link to="/portal" className="text-sm font-semibold leading-6 text-blue-600 nav-link">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center animate-fade-up">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by leading institutions worldwide
              </h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="stats-card flex flex-col bg-white/5 p-8 animate-fade-up [animation-delay:200ms]">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Accuracy Rate</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">95%</dd>
              </div>
              <div className="stats-card flex flex-col bg-white/5 p-8 animate-fade-up [animation-delay:400ms]">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Oncology Centers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">50+</dd>
              </div>
              <div className="stats-card flex flex-col bg-white/5 p-8 animate-fade-up [animation-delay:600ms]">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Research Papers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">1000+</dd>
              </div>
              <div className="stats-card flex flex-col bg-white/5 p-8 animate-fade-up [animation-delay:800ms]">
                <dt className="text-sm font-semibold leading-6 text-gray-300">Patient Cases</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">25K+</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
 