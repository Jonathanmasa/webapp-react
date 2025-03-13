// Importiamo il modulo react-router
import { Link, useParams, useNavigate } from "react-router-dom";
// Import del componente ReviewCard
import ReviewCard from "./../components/ReviewCard";
// Import di axios
import axios from "axios";
// Import di useState e useEffect
import { useState, useEffect } from "react";
// import del componente di form
import ReviewForm from './../components/ReviewForm';

const FilmPage = () => {
  // Recuperiamo l'id del film richiesto
  const { id } = useParams();

   // utilizzo per il redirect (useNavigate)
   const redirect = useNavigate();

  // Stato per il film
  const [film, setFilm] = useState(null);

  // Funzione per recuperare i dati del film
  const fetchFilm = () => {
    axios
      .get("http://localhost:3000/api/films/" + id)
      .then((res) => {
        setFilm(res.data);
      })
      .catch(err => {
        console.log(err);
        if (err.status === 404) redirect("/404")
    })
  };

  // Effetto per chiamare l'API quando cambia l'ID
  useEffect(() => {
    fetchFilm();
  }, [id]);

  // Funzione per renderizzare le recensioni
  const renderReviews = () => {
    return film?.reviews?.map((review) => (
      <ReviewCard key={review.id} reviewProp={review} />
    ));
  };

  if (!film) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header id="film" className="border-bottom border-1 mb-3">
        <div className="d-flex mb-3">
          <img
            className="film-img"
            src={film.image || "placeholder.jpg"}
            alt={film.title || "No title available"}
          />
          <div>
            <h1>{film.title}</h1>
            <h3 className="text-white">
              <i>By {film.director}</i>
            </h3>
            <div>{film.abstract}</div>
          </div>
        </div>
      </header>

      <section id="reviews">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h4>Our community reviews</h4>
        </header>
        <div>{renderReviews()}</div>
      </section>


      <section>
          <ReviewForm film_id={film.id} />
      </section>

      <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
        <Link className="btn btn-secondary" to="/">
          Back to home
        </Link>
      </footer>
    </>
  );
};

export default FilmPage;