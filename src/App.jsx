import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';

// Placeholder pages
const Bank = () => <div className="p-6"><h1 className="text-2xl font-bold">Bank Page</h1></div>;
const Marketplace = () => <div className="p-6"><h1 className="text-2xl font-bold">Marketplace Page</h1></div>;
const GST = () => <div className="p-6"><h1 className="text-2xl font-bold">GST Page</h1></div>;
const Company = () => <div className="p-6"><h1 className="text-2xl font-bold">Company Page</h1></div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bank" element={<Bank />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="gst" element={<GST />} />
          <Route path="company" element={<Company />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 