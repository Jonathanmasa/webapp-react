import { Link } from "react-router-dom"
 
 
 const FilmCard = ({ filmProp }) => {
    const {id, title, image, director, abstract} = filmProp

     return (
         <div className="card mb-4">
             <img className="card-img-top" src={image} alt={title} />
             <div className="card-body">
                 <h5 className= 'title'>
                     {title}
                 </h5>
                 <address><i>
                     By {director || 'Anonymous'}
                 </i></address>
                 <div className="card-text">
                    {abstract}
                 </div>
                 <Link to={`films/${id}`} className="btn btn-primary">See more</Link>
             </div>
         </div>
     )
 }
 
 export default FilmCard