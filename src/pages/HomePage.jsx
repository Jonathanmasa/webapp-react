// Importazioni
import axios from "axios";
import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";

const HomePage = () => {
  // Stato per i film
  const [films, setFilms] = useState([]);

  // Funzione per ottenere i film dall'API
  const fetchFilms = () => {
    axios
      .get("http://localhost:3000/api/films")
      .then((res) => {
        setFilms(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchFilms, []);

  return (
    <div className="container mt-4">
      <h1 className="text-primary text-center fw-bold">🎬 Bool Movies</h1>
      <h2 className="text-center text-white fst-italic">The nerdiest movie community</h2>

      {/* Grid system di Bootstrap */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        {films.map((film) => (
          <div className="col" key={film.id}>
            <FilmCard filmProp={film} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;