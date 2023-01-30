import React from "react";
import {items} from "./items";


export const NavItem = () => {
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