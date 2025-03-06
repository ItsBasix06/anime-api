import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeList from './components/AnimeList';
import TopAnime from './components/TopAnime';
import AnimeDetail from './components/AnimeDetail';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<AnimeList />} />
                <Route path="/top" element={<TopAnime />} />
                <Route path="/anime/:id" element={<AnimeDetail />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

