import React from 'react';
import ReactDOM from 'react-dom';
import App from "./js/App/App.js";
import Game from './js/App/Morpion';
import Products from "./js/Products/Products";

ReactDOM.render(
    <div>
        <App name="Quentin"/>
        <Game/>
        <br/>
        <br/>
        <Products/>
    </div>
    ,
    document.getElementById('root')
);
