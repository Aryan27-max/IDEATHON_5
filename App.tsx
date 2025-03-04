import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AIAnalysis from './pages/AIAnalysis';
import FloatingDNA from './components/FloatingDNA';

function App() {
  return (
    <Router>
      <Layout>
        <FloatingDNA />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-analysis" element={<AIAnalysis />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
 