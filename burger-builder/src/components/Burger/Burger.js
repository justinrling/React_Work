import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => { //wrapper component around all of the ingredients
    
    let transformedIngredients = Object.keys(props.ingredients) //returns an array of the keys - string ingredient names (not included: values)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => { //transforms string value into an array, length of array based on props.ingredients[igKey] value
            return <BurgerIngredient key={igKey + i} type={igKey} />;   //previous array mapped to return appropriate amount of BurgerIngredient components
        }); //pretty much turns an object of key value pairs into an array of BurgerIngredients
    })
    .reduce((arr, el) => {  //flattens array, either empty or contains JSX elements
        return arr.concat(el)
    }, []);

    if( transformedIngredients.length === 0){   //if no ingredients in array
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;