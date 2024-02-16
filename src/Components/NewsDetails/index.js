import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"

const NewsDetails = props => {
  const { id } = useParams();
  const {articles} = props
  const newsIdData = articles.find(data => data.id === parseInt(id));
  const { title, content, author, publishedDate, imageUrl } = newsIdData;

  return (
    <div className='news-container'>
        <div className="news-info shadow rounded my-3">
            <h1 className="news-details-title">{title}</h1>
            <img className="news-image" src={imageUrl} alt={title} />
            <p className="news-content">{content}</p>
            <div className="author-details">
                <p className='news-date'>Published at {publishedDate},</p>
                <p className="author-name"> By {author}.</p>
            </div>
        </div>
    </div>
  );
};

export default NewsDetails;
