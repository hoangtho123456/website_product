import React from 'react';
import classes from './pizzaImage.css';
import pizzaImg from '../../assets/pizza.jpg';
const pizzaImage = (props) => (
    <div className={classes.pizzaImage}>
        <img src={pizzaImg} className={classes.pizzaImg} />
    </div>
);

export default pizzaImage;
