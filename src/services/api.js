const API_URL = 'https://api.jikan.moe/v4';

export const fetchAnime = (query) => {
    return fetch(`${API_URL}/anime?q=${query}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al obtener los datos', error);
            return null;
        });
};

export const fetchTopAnime = () => {
    return fetch(`${API_URL}/top/anime`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al obtener el top de animes', error);
            return null;
        });
};

export const fetchAnimeById = (id) => {
    return fetch(`${API_URL}/anime/${id}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error al obtener los detalles del anime', error);
            return null;
        });
};