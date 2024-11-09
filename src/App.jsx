import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/component/Home/Home'; // Import the Home component
import Header from '../src/component/Header/Header'; // Import the Header component
import Footer from '../src/component/Footer/Footer'; // Import the Footer component

function App() {
    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default App;

