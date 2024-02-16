import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const TopNews = props => {
    const {articles} = props
    const {id,title,tabId,publishedDate,imageUrl} = articles

    return(
        <Link to={`/news/${id}`} className="news-item-link text-decoration-none text-dark">
         <div className="top-news-container d-flex justify-content-between my-3 pb-3 border-bottom border-1 border-solid border-dark">
            <div className="content-cotainer mt-2">
                 <h1 className="category-title text-uppercase fs-4" style={{color:'#213F99'}}>{tabId}</h1>
                 <p className="content-title fs-6 fw-semibold">{title}</p>
                  <p className="published-date">{publishedDate}</p>
             </div>
            <img src={imageUrl} alt="img" className="top-news-image w-25 rounded object-fit-cover"/>
        </div>
        </Link>
    )
}

export default TopNews