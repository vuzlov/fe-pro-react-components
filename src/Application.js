import React from 'react';
import {items, navList} from "./items"

const Header = () => {
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
      <a href="" className="logo">
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

const NavItem = () => {
  const Article = ({label, text, }) => {
      return (
      <li className="list__item">
        <h2>{label}</h2>
        <p>
          {text}
        </p>
      </li>)
  };

  return (
    <main>
      <section className="posts">
        <div className="container">
          <h1>
            Posts
          </h1>
          <ul className="list">
            {items.map(({text, label, id}) => {
                return (<Article key={id} label={label} text={text}/>);
            })}
          </ul>
        </div>
      </section>
    </main>
  )
};

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <a href="" className="logo">
            Logo
        </a>
        <p className="copyright">
            Small static blog @ 2022
        </p>
      </div>
    </footer>
  )
};

const Application = () => {
  return (
    <>
      <Header/>
      <NavItem/>
      <Footer/>
    </>
  )
};


export default Application;
