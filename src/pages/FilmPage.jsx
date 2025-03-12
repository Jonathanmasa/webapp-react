// importiamo parte LInk del modulo react-router
import { Link, useParams } from "react-router-dom"
// import del componente di listato
import ReviewCard from './../components/ReviewCard';
// uso axios
import axios from 'axios'
 // uso di state e effect
import { useState, useEffect } from "react"

const FilmPage = () => {
    
        // recuperiamo l'id del film richiesto
        const { id } = useParams();
 
        // settiamo lo stato del componente
        const [film, setFilm] = useState({});
    
        // funzione di chiamata all'API per il film richiesto
        const fectFilm = () => {
            axios.get("http://localhost:3000/api/films/" + id)
                .then(
                    res => {
                        // console.log(res.data);
                        setFilm(res.data)
                    }
                )
                .catch(err => console.log(err)
                )
        }
    
    
        // chiamata all'API al montaggio del componente
        useEffect(fectFilm, [])

    return (
        <>
         <header id="film" className="border-bottom border-1 mb-3">
                 <div className="d-flex mb-3">
                     <img className="film-img"
                         src={film.image}
                         alt={film.title} />
                     <div>
                         <h1>{film.title}</h1>
                         <h3 className="text-muted">
                             <i>
                                 By {film.director}
                             </i>
                         </h3>
                         <p>
                            {film.abstract}
                         </p>
                     </div>
                 </div>
 
             </header>
 
             <section id="reviews">
                 <header className="d-flex justify-content-between align-items-center mb-4">
                     <h4>Our community reviews</h4>
                 </header>
                
                {/* Reviews qui */}
                <p><ReviewCard/></p>
                
             </section>
 
             <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                 <Link className="btn btn-secondary" to="/">Back to home</Link>
             </footer>
        </>

    )
}
export default FilmPage