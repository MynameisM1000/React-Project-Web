import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/css/App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import MainSection from './Pages/MainSection';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import NotFound from './Pages/NotFound';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainSection />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;