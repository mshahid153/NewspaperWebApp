import {Component} from 'react'
import TabItem from '../TabItem'
import { Link } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const tabsList = [
    {tabId: '', displayText: 'Home'},
    {tabId: 'latest', displayText: 'Latest'},
    {tabId: 'world', displayText: 'World'},
    {tabId: 'india', displayText: 'India'},
    {tabId: 'sports', displayText: 'Sports'},
    {tabId: 'education', displayText: 'Education'},
  ]


class Header extends Component{
    state = {
        activeTabId: tabsList[0].tabId,
      }
    
      setActiveTabId = tabId => {
        this.setState({activeTabId: tabId})
      }
    
    render(){
        const {activeTabId} = this.state
    return(
    <div className='header'>
        <div className='navbar-container d-flex justify-content-between align-items-center'  >
            <div className='epaper-container order-2 ms-4 order-lg-1 ms-md-5'>
              <Link to="/epaper" className='d-flex align-items-center text-decoration-none text-dark'>
                  <img src="https://i.postimg.cc/VLSH2pV8/newspaper.png" alt="epaper-logo" className='epaper-logo-img'/>
                  <h1 className='epaper-title d-none d-md-block'>E-Paper</h1>
              </Link>
            </div>
            <div className='brand-conatiner d-flex align-items-center order-1 ms-2 order-lg-2'>
                <img src="https://i.postimg.cc/vmMMvftC/Brand-logo.png" alt='brand-logo' className='brand-logo-img' draggable="false"/>
            </div>
            <div className='search-container order-3 me-4 order-lg-3 me-md-5'>
                <Link to="/searchnews" className='d-flex align-items-center text-decoration-none text-dark'>
                <img src="https://i.postimg.cc/nVN6Vn7z/serach-logo.png" alt='search-img' className='search-img'/>
                <h1 className='search-title d-none d-md-block'>Search</h1>
                </Link>
            </div>
        </div>
        <div className="tabs-list d-flex justify-content-around">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
                isActive={activeTabId === eachTab.tabId}
              />
            ))}
          </div>
    </div>
    );
}
}


export default Header