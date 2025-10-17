import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css'

import ScrollToTop from "./components/ScrollToTop.jsx";

import Header from './components/Header.jsx';
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Footer from './components/Footer.jsx';

import Home from './pages/Home.jsx';
import Services from "./pages/Services.jsx";
import Photos from "./pages/Photos.jsx";
import Contact from "./pages/Contact.jsx";
import EmailConfirmation from "./pages/EmailConfirmation.jsx";
import Legal from "./pages/Legal.jsx";
import NotFound404 from "./pages/NotFound404.jsx";

function App() {
    return (
        <Router basename="/">
            <ScrollToTop />
            <div className="App">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/services" element={<Services/>} />
                        <Route path="/photos" element={<Photos/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/email-sent" element={<EmailConfirmation/>} />
                        <Route path="/legal" element={<Legal/>} />
                        <Route path="*" element={<NotFound404/>} />
                    </Routes>
                </div>
                <ScrollToTopButton />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
