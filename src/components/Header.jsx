import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar bg-black mb-4">
             <div className="container-fluid justify-content-start">
                 <Link className="navbar-brand text-primary" to="/">🎬 Bool Movies</Link>
                 <Link className="btn btn-sm btn-secondary" to="/films/create">Add film</Link>
             </div>
         </nav>
    )
}

export default Header