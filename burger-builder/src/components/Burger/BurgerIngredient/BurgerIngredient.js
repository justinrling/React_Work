import React, { Component } from 'react';
import PropTypes from 'prop-types'; //prop-types package

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render(){
        let ingredient = null;
        
        switch(this.props.type){    //class-based, so THIS.props
            case('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                    ingredient = <div className={classes.Meat}></div>;
                    break;
            case('cheese'):
                    ingredient = <div className={classes.Cheese}></div>;
                    break;
            case('salad'):
                ingredient = <div className={classes.Salad}></div>;
                break;
            case('bacon'):
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {  //Prop type validation, makes sure prop: 'type' is a string, and is required
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;