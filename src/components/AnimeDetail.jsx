import { useState, useEffect } from 'react';
import { fetchAnimeById } from '../services/api';
import { useParams } from 'react-router-dom';
import '../styles/AnimeDetail.css';

const AnimeDetail = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        if (id) {
            fetchAnimeById(id).then(data => {
                if (data) setAnime(data.data);
            });
        }
    }, [id]);

    if (!anime) return <p>Cargando...</p>;
    return (
        <div className="anime-detail">
            <h1>{anime.title}</h1>
            <p>{anime.synopsis}</p>
            <div className="anime-links">
                <a href="https://www.crunchyroll.com/es/" target="_blank" rel="noopener noreferrer">Ver en Crunchyroll</a>
            </div>
            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        </div>
    );
};

export default AnimeDetail;