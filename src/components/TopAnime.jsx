import { useState, useEffect } from 'react';
import { fetchTopAnime } from '../services/api';
import '../styles/TopAnime.css';
const TopAnime = () => {
    const [topAnimes, setTopAnimes] = useState([]);

    useEffect(() => {
        fetchTopAnime().then(data => {
            if (data) setTopAnimes(data.data);
        });
    }, []);

    return (
        <div className="top-anime">
            <h1>Top Animes</h1>
            <ul>
                {topAnimes.map(anime => (
                    <li key={anime.mal_id}>{anime.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TopAnime;
