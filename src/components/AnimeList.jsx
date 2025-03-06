import { useState, useEffect } from "react";
import { fetchAnime } from "../services/api";
import { Link } from "react-router-dom";
import "../styles/AnimeList.css";


const AnimeList = () => {
  const [animes, setAnimes] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      fetchAnime(query)
        .then((data) => {
          if (data) {
            setAnimes(data.data);
            setError(null);
          } else {
            setError("No se encontraron animes.");
          }
        })
        .catch(() => setError("Error al obtener los animes."))
        .finally(() => setLoading(false));
    };

    if (query) {
      const timeout = setTimeout(fetchData, 500);
      return () => clearTimeout(timeout);
    } else {
      fetchData(); 
    }
  }, [query]);

return (
  <div className="anime-list">
    <h1>Lista de Animes</h1>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Buscar anime..."
    />
    {loading && <p>Cargando...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}
    <div className="anime-grid">
      {animes.length === 0 && !loading && !error && (
        <p>No se encontraron animes. Intenta buscar uno.</p>
      )}
      {animes.map((anime) => (
        <div key={anime.mal_id} className="anime-card">
          <Link to={`/anime/${anime.mal_id}`}>
            <img src={anime.images.jpg.large_image_url} alt={anime.title} />
            <p>{anime.title}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

};

export default AnimeList;
