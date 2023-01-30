import React from "react";
import {navList} from "./navList";


export const Header = () => {
    const List = ({link, text}) => {
    return (
      <li className="nav-list__item">
        <a href={link}>
            {text}
        </a>
      </li>)
    };
  
    return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          My logo
        </a>
        <nav>
          <ul className="nav-list">
            {navList.map(({text, link, id}) => {
                return (<List key={id} href={link} text={text}/>);
            })}
          </ul>
        </nav>
      </div>
    </header>)
  };