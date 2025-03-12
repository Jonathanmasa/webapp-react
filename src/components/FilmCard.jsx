import { Link } from "react-router-dom"
 
 
 const FilmCard = ({ filmProp }) => {
    const {id, title, image, director, abstract} = filmProp

     return (
         <div className="card mb-4">
             <img className="card-img-top"
                 src={image && <img className="card-img-top" src={image} alt={title} />}
                 alt={title} />
             <div className="card-body">
                 <h5 className={title}>
                     Titolo del film
                 </h5>
                 <address><i>
                     By {director || 'Anonymous'}
                 </i></address>
                 <p className="card-text">
                    {abstract}
                 </p>
                 <Link to={`films/${id}`} className="btn btn-primary">See more</Link>
             </div>
         </div>
     )
 }
 
 export default FilmCard