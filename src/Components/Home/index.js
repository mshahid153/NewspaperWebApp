import TopNews from '../TopNews';
import SidebarNews from '../SidebarNews';
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = props => {
        const {articles} = props

        const getLatestNews = () => {
                const latestNews = articles.filter(article => article.tabId === "latest")
                return(
                        <div className='latest-news-container col-2 shadow rounded d-none d-md-block' style={{backgroundColor: '#F2D4D6'}}>
                                <h1 className='news-category-title fs-4 text-center my-3 fw-bold pb-3 border-bottom border-3 border-solid border-dark'>
                                        [ Latest News ]
                                </h1>
                                {latestNews.map(eachNews => (<SidebarNews articles={eachNews} key= {eachNews.id} />))}
                        </div>
                )
        }

        const getTopNews = () => {
                const  topNews = articles.sort(() => Math.random() - 0.5).slice(0, 11);
                return(
                        <div className='top-news-container col-11 col-md-7 shadow rounded' style={{backgroundColor: '#F2D4D6'}}>
                                <h1 className='news-category-title fs-4 text-center my-3 fw-bold pb-3 border-bottom border-3 border-solid border-dark'>
                                        [ Top News ]
                                </h1>
                                {topNews.map(eachNews => (<TopNews articles={eachNews} key= {eachNews.id} />))}
                        </div>
                )
        }

        const getViralNews = () => {
                const viralNews = articles.sort(() => Math.random() - 0.5).slice(0, 10);

                return(
                        <div className='viral-news-container col-2 shadow rounded d-none d-md-block' style={{backgroundColor: '#F2D4D6'}}>
                                <h1 className='news-category-title fs-4 text-center my-3 fw-bold pb-3 border-bottom border-3 border-solid border-dark'>
                                        [ Viral ]
                                </h1>
                                {viralNews.map(eachNews => (<SidebarNews articles={eachNews} key= {eachNews.id} />))}
                        </div>
                )
        }

        return(
        <div className='container'>
                <div className='row home-news-container w-100 justify-content-around py-3'>
                        {getLatestNews()}
                        {getTopNews()}
                        {getViralNews()}
                </div>
        </div>
        );
}
        


export default Home