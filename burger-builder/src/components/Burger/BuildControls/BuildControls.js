import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => ( //loop through controls to build each individual BuildControl component
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}  //execute ingredientAdded passing ctrl.type -> goes to addIngredientHandler
            removed={() => props.ingredientsRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default buildControls;
