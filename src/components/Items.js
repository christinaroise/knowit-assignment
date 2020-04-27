import React from 'react'
import Watchers from '../assets/icons/png/001-visibility.png'
import Forks from '../assets/icons/png/002-code.png'
import Issues from '../assets/icons/png/003-exclamation.png'
import '../style/itemsList.css'
import '../style/screenSize/itemsToDesktop.css'

const Items = ({ items, loading }) => {

    const openInNewTab = (url) =>{
        var win = window.open(url);

    };

    if(loading){
        return<h2>Loading..</h2>
    }
    return(
        <div className="items-container">
            {items.map((items) => (
                <div className="card"
                onClick={() => openInNewTab(items.html_url)}>
                    <div className="card-body">
                        <div className="watchers" id="watchers">
                            <img alt="eye-icon" src={Watchers} height="19px"/>
                            <p>{items.watchers}</p>
                        </div>
                        <h5 className="card-title">{items.full_name}</h5>
                        <h6 className="card-subtitle">{items.description}</h6>
                        <div className="onHover-container" id="onHoverContainer">
                            <div className="card-text-container">
                                <img alt="eye-icon" src={Forks} height="19px"/>
                                <p className="card-text">: {items.forks}</p>
                            </div>
                            <div className="card-text-container">
                                <img alt="eye-icon" src={Issues} height="19px"/>
                                <p className="card-text">{items.open_issues}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items
