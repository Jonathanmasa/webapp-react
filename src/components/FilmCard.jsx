import { Link } from "react-router-dom";

const FilmCard = ({ filmProp }) => {
  const { id, title, image, director, abstract } = filmProp;

  return (
    <div className="card film-card shadow-lg border-0">
      <img
        className="card-img-top film-card-img"
        src={image || "placeholder.jpg"}
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">{title}</h5>
        <address className="text-white">
          <i>By {director || "Anonymous"}</i>
        </address>
        <p className="card-text">{abstract}</p>
        <Link to={`films/${id}`} className="btn btn-outline-primary w-100">
          See more
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;