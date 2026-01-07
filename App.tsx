
import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

// Lazy load pages for performance
const Home = React.lazy(() => import('./pages/Home'));
const Listen = React.lazy(() => import('./pages/Listen'));
const Stations = React.lazy(() => import('./pages/Stations'));
const Shows = React.lazy(() => import('./pages/Shows'));
const ShowDetail = React.lazy(() => import('./pages/ShowDetail'));
const Schedule = React.lazy(() => import('./pages/Schedule'));
const Sports = React.lazy(() => import('./pages/Sports'));
const Weather = React.lazy(() => import('./pages/Weather'));
const News = React.lazy(() => import('./pages/News'));
const NewsPost = React.lazy(() => import('./pages/NewsPost'));
const Events = React.lazy(() => import('./pages/Events'));
const Advertise = React.lazy(() => import('./pages/Advertise'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Accessibility = React.lazy(() => import('./pages/Accessibility'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const LoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8 animate-pulse">
    <div className="text-brand-orange text-8xl font-heading font-black italic">FM95</div>
    <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div className="w-1/2 h-full bg-brand-yellow animate-[loading_1s_infinite]"></div>
    </div>
    <p className="text-gray-400 font-heading font-bold tracking-widest uppercase">Tuning Signal...</p>
    <style>{`
      @keyframes loading {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }
    `}</style>
  </div>
);

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center p-8 bg-brand-charcoal text-white">
          <div>
            <h1 className="text-6xl font-heading font-black mb-8 text-brand-orange uppercase italic">Technical Difficulties</h1>
            <p className="text-2xl mb-12 text-gray-400 max-w-lg mx-auto">We're experiencing some interference. Please try refreshing the page or checking back later.</p>
            <button onClick={() => window.location.reload()} className="bg-brand-yellow text-brand-charcoal px-10 py-5 rounded-full font-heading font-bold text-xl">Restart Broadcast</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listen" element={<Listen />} />
              <Route path="/stations" element={<Stations />} />
              <Route path="/shows" element={<Shows />} />
              <Route path="/show/:id" element={<ShowDetail />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/sports" element={<Sports />} />
              <Route path="/weather" element={<Weather />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsPost />} />
              <Route path="/events" element={<Events />} />
              <Route path="/advertise" element={<Advertise />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
