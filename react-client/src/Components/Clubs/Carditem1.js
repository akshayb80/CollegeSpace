import React from "react";

function Carditem1(props) {
  
  return (
    <>
      <li className="cards1__item">

        <a className="cards1__item__link" href={props.path} target="_blank">
          <figure className="cards1__item__pic-wrap" data-category={props.label}>
            <img
              className="cards1__item__img"
              src={props.src}
            />
          </figure>
          <div className="cards1__item__info">
            <h5 className="cards1__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default Carditem1;
