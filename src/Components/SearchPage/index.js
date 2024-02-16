import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
import NewsCard from '../NewsCard';

class SearchPage extends Component {
      state = {searchInput: '',}
      
      onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
      }
    
      getSearchResults = () => {
        const {searchInput} = this.state
        const {articles} = this.props
        const searchResults = articles.filter(eachArticle =>
          eachArticle.title.toLowerCase().includes(searchInput.toLowerCase()),
        )
        return searchResults
      }
  
      render() {
        const {searchInput} = this.state;
        const searchResults = this.getSearchResults().sort(() => Math.random() - 0.5)

        return(
            <div className='d-flex flex-column align-items-center'>
                <div className='search-input-container mt-3'>
                    <input type="text" value={searchInput} onChange={this.onChangeSearchInput} className="search-input" id="floatingSearch" placeholder="Search" />
                    <img src="https://i.postimg.cc/nVN6Vn7z/serach-logo.png" alt='search-img' className='search-icon' />
                </div>
                <div className='container'>
                    <div className='row d-flex justify-content-center my-2'>
                        {searchResults.map(eachNews => (<NewsCard articles={eachNews} key={eachNews.id} />))}
                    </div>
                </div>
            </div>
    );
}
}

export default SearchPage