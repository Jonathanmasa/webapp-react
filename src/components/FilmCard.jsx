import { Link } from "react-router-dom"
 
 
 const FilmCard = () => {
     return (
         <div className="card mb-4">
             <img className="card-img-top"
                 src="http://localhost:3000/img/films/the_godfather.jpg"
                 alt="descrizione img" />
             <div className="card-body">
                 <h5 className="card-title">
                     Titolo del film
                 </h5>
                 <address><i>
                     By nome autore
                 </i></address>
                 <p className="card-text">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
                 </p>
                 <Link to="films/2" className="btn btn-primary">See more</Link>
             </div>
         </div>
     )
 }
 
 export default FilmCard