// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"
// import del componente di listato
import ReviewCard from './../components/ReviewCard';

const FilmPage = () => {
    return (
        <>
         <header id="film" className="border-bottom border-1 mb-3">
                 <div className="d-flex mb-3">
                     <img className="film-img"
                         src="the_godfather.jpg"
                         alt="descrizione img" />
                     <div>
                         <h1>Titolo film</h1>
                         <h3 className="text-muted">
                             <i>
                                 By Nome autore
                             </i>
                         </h3>
                         <p>
                             Abscract lorem ipsm dolor sit amet...
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