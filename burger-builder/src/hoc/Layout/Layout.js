import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';     //modular css classes
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

                                        //remember: component cannot return multiple elements
                                        //must wrap in <div>, <aux> higher order component, or make array
class Layout extends Component {            
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {  //to set state if it depends on old state, bc async
            return {showSideDrawer: !this.state.showSideDrawer};
        });
    }

    render () {
        return(
            <Aux>  
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>        
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>                     
                <div>Toolbar, SideDrawer, Backdrop</div>  
                <main className={classes.Content} /*modular css class*/>                                   
                    {this.props.children}    
                </main>
            </Aux>
        )
    }
}

export default Layout;  //a wrapper component for main content