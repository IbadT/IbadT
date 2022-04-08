import React from "react";
import s from './Header.module.css';

class Header extends React.Component{
    render(){
        return (
            <div className={s.container}>
                <img alt="#" className={s.logo} src="https://cdn.create.vista.com/api/media/small/470901746/stock-vector-bebo-green-yellow-modern-vector"/>
                <span className={s.text}>
                    New social network
                </span>
                <span>
                    <input className={s.inp} placeholder='Search'/>
                </span>
            </div>
        )
    }
}

export default Header