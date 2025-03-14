import axios from "axios";
 // importiamo parte LInk del modulo react-router
 import { Link, useNavigate } from "react-router-dom"
 // importiamo lo useState
 import { useState } from "react";
 
 const initialData = {
     title: "",
     director: "",
      abstract: "",
     image: null
    
 };
 
 const endpointApi = "http://localhost:3000/api/films";
 
 
 const CreateFilmPage = () => {
 
     // navigazione
     const navigate = useNavigate();
 
 
     // states iniziali
     const [formDataOgj, setFormDataOgj] = useState(initialData);
 
 
 
     const setFieldValue = (e) => {
         const { value, name } = e.target;
         if (name === "image") setFormDataOgj({ ...formDataOgj, image: e.target.files[0] });
         else setFormDataOgj({ ...formDataOgj, [name]: value });
     }
 
 
 
     const handleSubmit = (e) => {
         e.preventDefault();
 
 
         // // Inviamo i dati al backend con axios e reindirizziamo alla home
         axios.post(endpointApi, formDataOgj, { headers: { "Content-Type": "multipart/form-data" } })
             .then(
                 () => { navigate("/") }
             )
             .catch((err) => {
                 console.log(err);
             });
     }
 
     return (
         <>
             <header className="border-bottom border-1 mb-3">
                 <h1 className="text-primary">Add a new film</h1>
             </header>
 
             <section id="film-form">
 
                 <form onSubmit={handleSubmit}>
                     <div className="mb-4">
                         <label className="text-primary">Title:</label>
                         <input
                             className="form-control"
                             name="title"
                             type="text"
                             value={formDataOgj.title}
                             onChange={setFieldValue}
                             required
                         />
                     </div>
                     <div className="mb-4">
                         <label className="text-primary">Director:</label>
                         <input
                             className="form-control"
                             name="director"
                             type="text"
                             value={formDataOgj.director}
                             onChange={setFieldValue}
                             required
                         />
                     </div>
                     <div className="mb-4">
                         <label className="text-primary">Image:</label>
                         <input
                             className="form-control"
                             name="image"
                             type="file"
                             onChange={setFieldValue}
                             required
                         />
                     </div>
                     <div className="mb-4">
                         <label className="text-primary">Abstract:</label>
                         <textarea
                             value={formDataOgj.abstract}
                             className="form-control"
                             name="abstract"
                             onChange={setFieldValue}
                             required
                         ></textarea>
                     </div>
                     <div className="border-top mb-3 pt-3 d-flex justify-content-between">
                         <Link className="btn btn-secondary" to="/">Back</Link>
                         <button className="btn btn-success" type="submit">
                             Add film
                         </button>
                     </div>
                 </form>
             </section>
         </>
 
     )
 }
 
 export default CreateFilmPage