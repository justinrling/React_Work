import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';     //modular css classes


                                        //remember: component cannot return multiple elements
                                        //must wrap in <div>, <aux> higher order component, or make array
const layout = (props) => (             
    <Aux>                               
        <div>Toolbar, SideDrawer, Backdrop</div>  
        <main className={classes.Content} /*modular css class*/>                                   
            {props.children}    
        </main>
    </Aux>
);

export default layout;  //a wrapper component for main content