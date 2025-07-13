import {Link} from 'react-router-dom';

function Card({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <img src={cover} alt={title} className="card__img"/>
            <div className="card__title">{title}</div>
        </Link>
    );
}

export default Card;