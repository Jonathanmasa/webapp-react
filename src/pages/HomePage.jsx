import FilmCard from '../components/FilmCard';

const HomePage = () => {
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