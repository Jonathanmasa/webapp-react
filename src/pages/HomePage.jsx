// uso axios
import axios from 'axios'
// uso di state e effect
import { useState, useEffect } from "react"
// importo filmcard
import FilmCard from '../components/FilmCard';

const HomePage = () => {

    // funzione di fetching dei dati lista film index
    const fetchFilm = () => {
        axios.get("http://localhost:3000/api/films")
        .then(
            res => {
                console.log(res.data);
                
            }
        )
        .catch()
    }

    fetchFilm();

    return (
        <>
          <h1 className="text-primary">Bool Movies</h1>
             <h2><i>The nerdest movie community</i></h2>
 
             <div className="row row-cols-3 mt-4 ">
                <p>
                    <FilmCard/>
                </p>
                 
             </div>
        </>

    )
}
export default HomePage