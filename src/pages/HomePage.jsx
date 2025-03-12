// uso axios
import axios from 'axios'
// uso di state e effect
import { useState, useEffect } from "react"
// importo filmcard
import FilmCard from '../components/FilmCard';

const HomePage = () => {

    // setto stato del componente
    const [films, setFilms] = useState([]);

    // funzione di fetching dei dati lista film index
    const fetchFilms = () => {
        axios.get("http://localhost:3000/api/films")
        .then(
            res => {
                // console.log(res.data);
                setFilms(res.data)
                
            }
        )
        .catch(err => console.log(err)
        )
    }

    // fetchFilm();
    useEffect(fetchFilms, []);

    // funzione di rendering delle card dei film 
    const renderFilms = () => {
        return films.map (
            film => {
                return (
                    <div className='col' key={film.id}>
                        <FilmCard filmProp={film} />
                    </div>
                )
            }
        )
    }

    return (
        <>
          <h1 className="text-primary">Bool Movies</h1>
             <h2><i>The nerdest movie community</i></h2>
 
             <div className="row row-cols-3 mt-4 ">
                <div>
                    {renderFilms()}
                </div>
                 
             </div>
        </>

    )
}
export default HomePage