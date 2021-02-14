import React, { useContext } from 'react';
import { TabContext } from '../../context/TabContext';
import maps from '../../data/Neighborhood';

const Tabs = () => {
    const { tab, setTab } = useContext(TabContext);
    const categories = Object.keys(maps);

    return (
        <>
        <h2 className='mobile-show'>{tab}</h2>
        <ul className="tabs">
            {categories.map((item) => (
                <li key={item}>
                    <button 
                        className={item===tab? 'active tab': 'tab'}
                        onClick={()=> setTab(item)}
                    >
                        <i className={`fas ${maps[item].icon}`}></i>
                        <span>{item}</span>
                    </button>
                </li>
            ))}
        </ul>
            
        </>         
    )
}

export default Tabs;
