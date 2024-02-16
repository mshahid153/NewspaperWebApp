import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const SidebarNews = props => {
    const {articles} = props
    const {id,title,tabId,publishedDate} = articles

    return(
    <div>
        <Link to={`/news/${id}`} className="news-item-link text-decoration-none text-dark">
        <div className="sidebar-news-cotainer mt-2 border-bottom border-1 border-solid border-dark">
            <h1 className="category-title text-uppercase fs-5" style={{color:'#213F99'}}>{tabId}</h1>
            <p className="content-title fs-6 fw-semibold">{title}</p>
            <p className="published-date">{publishedDate}</p>
        </div>
        </Link>
    </div>
    );
}

export default SidebarNews