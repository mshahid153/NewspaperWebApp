import { Link } from "react-router-dom";
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const NewsCard = ({ articles }) => {
    const { id,title, imageUrl, publishedDate } = articles;

    return (
        <div className="col-12 col-md-5 col-lg-3 my-3">
            <div className="card news-card-container shadow" style={{ width: '18rem' }}>
            <img src={imageUrl} className="card-img-top" alt="news-img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{publishedDate}</p>
              <Link to={`/news/${id}`} ><button className="btn btn-primary">Read More </button></Link>
            </div>
            </div>
        </div>
    );
}

export default NewsCard;
