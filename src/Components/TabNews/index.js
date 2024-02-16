import NewsCard from "../NewsCard"
import 'bootstrap/dist/css/bootstrap.min.css'
  
const TabNews = props => {
    const {articles,category} = props
    const filteredArticles = articles.filter(article => article.tabId === category)
    return (
        <div className="container">
            <div className="row d-flex align-content-center py-3"> 
                {filteredArticles.map(eachNews => (<NewsCard articles={eachNews} key= {eachNews.id} />))}
            </div>
        </div>
    )
}

export default TabNews